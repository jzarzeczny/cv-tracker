import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../LoginForm";
import { ThemeProvider } from "styled-components";
import theme from "../../../theme";
import { debug } from "console";
import { act } from "react-dom/test-utils";

describe("Login form testing", () => {
  test("Render the component", () => {
    render(
      <ThemeProvider theme={theme}>
        <LoginForm />
      </ThemeProvider>
    );
  });
  test("Render inputs", () => {
    render(
      <ThemeProvider theme={theme}>
        <LoginForm />
      </ThemeProvider>
    );
    const usernameInput = screen.getByLabelText(/username:/i);
    const passwordInput = screen.getByLabelText(/password:/i);
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
  test("Handle inputs", () => {
    render(
      <ThemeProvider theme={theme}>
        <LoginForm />
      </ThemeProvider>
    );
    const usernameInput = screen.getByLabelText(/username:/i);
    const passwordInput = screen.getByLabelText(/password:/i);
    fireEvent.change(usernameInput, { target: { value: "test123" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    expect(usernameInput.value).toBe("test123");
    expect(passwordInput.value).toBe("123456");
  });
  test("Button click without input gives errors", async () => {
    render(
      <ThemeProvider theme={theme}>
        <LoginForm />
      </ThemeProvider>
    );
    const button = screen.getByDisplayValue(/Login/i);
    fireEvent.click(button);
    const errors = await screen.findAllByTestId("error");
    expect(errors[0].innerHTML).toBe("Nickname is required");
    expect(errors[1].innerHTML).toBe("Password is required");
  });
  test("Correct input does not give error anymore", async () => {
    render(
      <ThemeProvider theme={theme}>
        <LoginForm />
      </ThemeProvider>
    );
    const button = screen.getByDisplayValue(/Login/i);
    fireEvent.click(button);
    const usernameInput = screen.getByLabelText(/username:/i);
    const passwordInput = screen.getByLabelText(/password:/i);
    fireEvent.change(usernameInput, { target: { value: "test123" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    const errors = await screen.findAllByTestId("error");
    expect(usernameInput.value).toBe("test123");
    expect(passwordInput.value).toBe("123456");
    expect(errors[1]).not.toBeInTheDocument();

    expect(errors[0]).not.toBeVisible();
  });
});
