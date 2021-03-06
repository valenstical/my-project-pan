import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from "./test-utils";


function HomePage () {
  return (
    <div>
      <h1>LuminSkin Product Page</h1>
    </div>
  )
}

describe("HomePage", () => {
  it("should render the heading", () => {
    render(<HomePage />);

    const heading = screen.getByText(
      /LuminSkin Product Page/i
    );

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
  });
});