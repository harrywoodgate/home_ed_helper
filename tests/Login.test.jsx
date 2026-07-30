import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import userEvent from "@testing-library/user-event";
import routes from "../src/routes";
import { supabase } from "../src/supabaseClient";
import { vi } from "vitest";

vi.mock("../src/supabaseClient", () => ({
  supabase: {
    auth: {
      signInWithPassword: vi.fn(),
      getSession: vi.fn(),
      onAuthStateChange: vi.fn(),
    },
  },
}));

describe("login page", () => {
  it("logs in successfully", async () => {
    const user = userEvent.setup();

    supabase.auth.signInWithPassword.mockResolvedValue({ error: null });
    supabase.auth.getSession.mockResolvedValue({ data: { session: {} } });
    supabase.auth.onAuthStateChange.mockImplementation((callback) => {
        callback("SIGNED_IN", {
            user: {id: "123", email: "example@email.com"}
        })

      return { data: { subscription: { unsubscribe: vi.fn() } } };
    });

    const router = createMemoryRouter(routes, {
      initialEntries: ["/login"],
    });
    render(<RouterProvider router={router} />);

    await user.type(screen.getByPlaceholderText("Email"), "email@example.com");
    await user.type(screen.getByPlaceholderText("Password"), "password123");
    await user.click(screen.getByRole("button"));

    expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
      email: "email@example.com",
      password: "password123",
    });
  });
  it("link takes you to signup page", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, {
      initialEntries: ["/login"],
    });
    render(<RouterProvider router={router} />);

    await user.click(screen.getByRole("link"));

    expect(screen.getByRole("heading", { name: "Create your account" }));
  });
});
