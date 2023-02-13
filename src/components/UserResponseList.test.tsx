import { ThemeProvider } from "@lokalise/louis";
import { render, screen } from "@testing-library/react";
import { UserDetails } from "../types/userDetails";
import { UserResponseList } from "./UserResponseList";

test("UserResponseList displays all submitted user information", () => {
  const mockReset = jest.fn();
  const mockUserDetails: UserDetails = {
    tshirtSize: { value: "gethen", label: "Gethen" },
    email: "bar@buzz.com",
    fruit: "banana",
    name: "foo",
    phone: "123",
  };
  render(
    <ThemeProvider activeTheme="base">
      <UserResponseList userDetails={mockUserDetails} onReset={mockReset} />
    </ThemeProvider>
  );

  expect(
    screen.getByText(mockUserDetails.tshirtSize.label)
  ).toBeInTheDocument();
  expect(screen.getByText(mockUserDetails.email)).toBeInTheDocument();
  expect(screen.getByText(mockUserDetails.fruit)).toBeInTheDocument();
  expect(screen.getByText(mockUserDetails.name)).toBeInTheDocument();
  expect(screen.getByText(mockUserDetails.phone)).toBeInTheDocument();
});
