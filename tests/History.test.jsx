import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";
import { vi } from "vitest";
import { supabase } from "../src/supabaseClient";
import { useManageHistory } from "../src/hooks/useManageHistory";
import { downloadPdf } from "../src/utils/downloadPdf";
import { previewPdf } from "../src/utils/previewPdf";
import { fetchBlob } from "../src/utils/fetchBlob";

vi.mock("../src/hooks/useManageHistory", () => ({
  useManageHistory: vi.fn(),
}));

vi.mock("../src/utils/downloadPdf", () => ({
  downloadPdf: vi.fn(),
}));

vi.mock("../src/utils/previewPdf", () => ({
  previewPdf: vi.fn(),
}));

vi.mock("../src/utils/fetchBlob", () => ({
  fetchBlob: vi.fn(),
}));

vi.mock("../src/supabaseClient", () => ({
  supabase: {
    auth: {
      getSession: vi.fn(),
      onAuthStateChange: vi.fn(),
    },
  },
}));

const todaysDate = new Date().toISOString().split("T")[0];
const [year, month, day] = todaysDate.split("-");
const formattedDate = `${day}/${month}/${year}`;
let mockDeleteHistory;

function setUp() {
  supabase.auth.getSession.mockResolvedValue({ data: { session: {} } });
  supabase.auth.onAuthStateChange.mockImplementation((callback) => {
    callback("SIGNED_IN", {
      user: { id: "123", email: "example@email.com" },
    });

    return { data: { subscription: { unsubscribe: vi.fn() } } };
  });
  mockDeleteHistory = vi.fn();
  useManageHistory.mockReturnValue({
    history: [
      {
        id: "123",
        file_path: `123-Philosophy-${formattedDate}.pdf`,
        file_name: `Philosophy-${formattedDate}`,
      },
    ],
    deleteHistory: mockDeleteHistory,
  });
  const user = userEvent.setup();
  const router = createMemoryRouter(routes, {
    initialEntries: ["/dashboard/history"],
  });
  render(<RouterProvider router={router} />);

  return { user };
}

describe("history page", () => {
  it("renders history reports", async () => {
    setUp();

    await waitFor(() => {
      expect(
        screen.getByText(formattedDate),
        screen.getByRole("heading", { name: "Philosophy" }),
      ).toBeInTheDocument();
    });
  });
  it("previews report", async () => {
    const { user } = setUp();

    await waitFor(() => {
      user.click(screen.getByRole("button", { name: "Preview" }));
      expect(fetchBlob).toHaveBeenCalled();
      expect(previewPdf).toHaveBeenCalled();
    });
  });
  it("downloads report", async () => {
    const { user } = setUp();

    await waitFor(() => {
      user.click(screen.getByRole("button", { name: "Download" }));
      expect(downloadPdf).toHaveBeenCalled();
    });
  });
  it("deletes report", async () => {
    const { user } = setUp();

    // for some reason this only works with getAllByRole, getByRole still returns both buttons
    await waitFor(() => {
      // user.click(screen.getByRole("button", { name: "Delete" }));
      user.click(screen.getAllByRole("button", { name: "Delete" })[0]);
      user.click(screen.getAllByRole("button", { name: "Delete" })[1]);
      expect(mockDeleteHistory).toHaveBeenCalled();
    });
  });
});
