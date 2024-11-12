import Header from "../Header";
import { render, screen } from "@testing-library/react";

it("Should render Header Component with a login button.", () => {
  render(<Header />);

  const loginButton = screen.getByRole("button");
  expect(loginButton).toBeInTheDocument();
});
