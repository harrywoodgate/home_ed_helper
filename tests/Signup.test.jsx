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
      signUp: vi.fn(),
      getSession: vi.fn(),
      onAuthStateChange: vi.fn(),
    },
  },
}));

describe("signup page", () => {
  it("signs user up successfully", async () => {
    const user = userEvent.setup();

    supabase.auth.signUp.mockResolvedValue({ error: null });
    supabase.auth.getSession.mockResolvedValue({ data: { session: {} } });
    supabase.auth.onAuthStateChange.mockImplementation((callback) => {
      callback("SIGNED_IN", {
        user: { id: "123", email: "example@email.com" },
      });

      return { data: { subscription: { unsubscribe: vi.fn() } } };
    });

    const router = createMemoryRouter(routes, {
      initialEntries: ["/signup"],
    });
    render(<RouterProvider router={router} />);

    await user.type(screen.getByPlaceholderText("Email"), "email@example.com");
    await user.type(
      screen.getAllByPlaceholderText("Password")[0],
      "password123",
    );
    await user.type(
      screen.getAllByPlaceholderText("Password")[1],
      "password123",
    );
    await user.click(screen.getByRole("button"));

    expect(supabase.auth.signUp).toHaveBeenCalledWith({
      email: "email@example.com",
      password: "password123",
    });
  });
  it("throws an error if passwords do not match", async () => {
    const user = userEvent.setup();
    const router = createMemoryRouter(routes, {
      initialEntries: ["/signup"],
    });
    render(<RouterProvider router={router} />);

    await user.type(screen.getByPlaceholderText("Email"), "email@example.com");
    await user.type(
      screen.getAllByPlaceholderText("Password")[0],
      "password123",
    );
    await user.type(
      screen.getAllByPlaceholderText("Password")[1],
      "password1234",
    );
    await user.click(screen.getByRole("button"));

    expect(screen.getByText("Passwords do not match!")).toBeInTheDocument();
  });
  it("throws an error if user already exists", async () => {
    const user = userEvent.setup();

    supabase.auth.signUp.mockResolvedValue({
      error: { message: "User already registered" },
    });

    const router = createMemoryRouter(routes, {
      initialEntries: ["/signup"],
    });
    render(<RouterProvider router={router} />);

    await user.type(screen.getByPlaceholderText("Email"), "email@example.com");
    await user.type(
      screen.getAllByPlaceholderText("Password")[0],
      "password123",
    );
    await user.type(
      screen.getAllByPlaceholderText("Password")[1],
      "password123",
    );
    await user.click(screen.getByRole("button"));

    expect(screen.getByText("User already registered")).toBeInTheDocument();
  });
});
