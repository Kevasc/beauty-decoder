import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../../components/NavBar";

describe("NavBar", () => {
  it("renders a Nav Bar container", () => {
    render(<NavBar />);

    const navBarContainer = screen.getByTestId("nav_bar_container");

    expect(navBarContainer).toBeInTheDocument();
  });
});
