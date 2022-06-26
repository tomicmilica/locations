import { render, screen } from "@testing-library/react";
import LocationCard from "./locationCard";
import "@testing-library/jest-dom/extend-expect";

const Locations = {
  id: "1",
  createdAt: new Date("2021-01-01"),
  name: "Fadelhaven",
  userCount: 2,
  description: "Creative",
  views: 5,
};

const mockedProps = {
  location: Locations,
  onClick: jest.fn(),
};

describe("Location Card", () => {
  beforeEach(() => {
    render(<LocationCard {...mockedProps} />);
  });

  test("Should render component", () => {
    expect(screen.getByTestId("location-card")).toBeInTheDocument();
  });

  it("Then it should render icon with the specified alt text", () => {
    expect(screen.getByAltText("edit")).toBeInTheDocument();
  });
});
