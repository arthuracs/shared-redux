import { ThemeProvider } from "@lokalise/louis";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("App handles user input and can reset state", async () => {
  const user = userEvent.setup();

  render(
    <ThemeProvider activeTheme="base">
      <App />
    </ThemeProvider>
  );

  expect(
    screen.getByRole("textbox", { name: "Full name" })
  ).toBeInTheDocument();
  expect(screen.getByRole("textbox", { name: "E-mail" })).toBeInTheDocument();

  screen.getByLabelText("Full name").focus();

  await user.keyboard("Genly Ai");

  expect(screen.getByLabelText("Full name")).toHaveValue("Genly Ai");

  await user.click(screen.getByRole("button", { name: "Reset" }));

  expect(screen.getByLabelText("Full name")).toHaveValue("");
});
