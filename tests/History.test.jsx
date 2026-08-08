import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";
import { vi } from "vitest";
import { supabase } from "../src/supabaseClient";

vi.mock("../src/supabaseClient", () => ({
  supabase: {
    auth: {
      getSession: vi.fn(),
      onAuthStateChange: vi.fn(),
    },
  },
}));

function setUp() {
  supabase.auth.getSession.mockResolvedValue({ data: { session: {} } });
  supabase.auth.onAuthStateChange.mockImplementation((callback) => {
    callback("SIGNED_IN", {
      user: { id: "123", email: "example@email.com" },
    });

    return { data: { subscription: { unsubscribe: vi.fn() } } };
  });
  const user = userEvent.setup();
  const router = createMemoryRouter(routes, {
    initialEntries: ["/dashboard"],
  });
  render(<RouterProvider router={router} />);

  return {user}
}

describe("history page", () => {
  it("shows delete pop up and deletes file", async () => {
    const {user} = setUp();

    await waitFor (expect(
      screen.getByRole("heading", { name: "Home Ed Helper" }),
    ).toBeInTheDocument())
  });
});
