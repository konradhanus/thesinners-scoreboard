import React from "react";
import { render, screen } from "@testing-library/react";
import DogRanking from "./components/ScoreBoard/Table/DogRanking";

test("renders learn react link", () => {
  render(<DogRanking />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
