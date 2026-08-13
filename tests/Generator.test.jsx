import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";
import { supabase } from "../src/supabaseClient";
import { useManageHistory } from "../src/hooks/useManageHistory";
import { useManageImages } from "../src/hooks/useManageImages";
import { previewPdf } from "../src/utils/previewPdf";
import React from "react";

vi.mock('@react-pdf/renderer', async () => {
  const actual = await vi.importActual('@react-pdf/renderer');

  return {
    ...actual,
    PDFDownloadLink: ({ children }) =>
      React.createElement('a', { href: '#' }, children({ loading: false })),
  };
});

vi.mock("../src/utils/previewPdf", () => ({
  previewPdf: vi.fn(),
}));

vi.mock("../src/hooks/useManageHistory", () => ({
  useManageHistory: vi.fn(),
}));

vi.mock("../src/hooks/useManageImages", () => ({
  useManageImages: vi.fn(),
}));

vi.mock("../src/supabaseClient", () => ({
  supabase: {
    auth: {
      getSession: vi.fn(),
      onAuthStateChange: vi.fn(),
    },
  },
}));

const mockAddHistory = vi.fn();
const mockResetImages = vi.fn();

function setUp() {
  supabase.auth.getSession.mockResolvedValue({ data: { session: {} } });
  supabase.auth.onAuthStateChange.mockImplementation((callback) => {
    callback("SIGNED_IN", {
      user: { id: "123", email: "example@email.com" },
    });

    return { data: { subscription: { unsubscribe: vi.fn() } } };
  });
  useManageHistory.mockReturnValue({
    history: [],
    addHistory: mockAddHistory,
  });
  useManageImages.mockReturnValue({
    images: [],
    resetImages: mockResetImages,
  });

  const user = userEvent.setup();
  const router = createMemoryRouter(routes, {
    initialEntries: ["/dashboard/generator"],
  });
  render(<RouterProvider router={router} />);

  return { user };
}

describe("generator", () => {
  it("previews report", async () => {
    const { user } = setUp();

    await waitFor(() => {
      user.click(screen.getByRole("button", { name: "Preview" }));
      expect(previewPdf).toHaveBeenCalled();
    });
  });
  it("saves report", async () => {
    const { user } = setUp();

    await waitFor(() => {
      user.click(screen.getByRole("button", { name: "Save" }));
      expect(mockAddHistory).toHaveBeenCalled();
    });
  });
  it("resets generator", async () => {
    const { user } = setUp();

    await waitFor(() => {
      user.click(screen.getByRole("button", { name: "New report" }));
      expect(mockResetImages).toHaveBeenCalled();
      expect(screen.getByText("Select an option")).toBeInTheDocument();
      expect(screen.getByRole("textbox").value).toMatch("");
    });
  });
  it("renders download link", async () => {
    const { user } = setUp();

    await waitFor(() => {
      expect(screen.getByRole("link", {name: "Download"})).toBeInTheDocument();
      user.click(screen.getByRole("link", {name: "Download"}))
    })
  });
});
