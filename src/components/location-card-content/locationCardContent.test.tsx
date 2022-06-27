import { render, screen } from "@testing-library/react";
import LocationCardContent from "./locationCardContent";
import "@testing-library/jest-dom/extend-expect";

const mockedProps = {
  icon: "image",
  data: "data",
};

describe("Location Card", () => {
  beforeEach(() => {
    render(<LocationCardContent {...mockedProps} />);
  });

  test("Should render component", () => {
    expect(screen.getByTestId("location-card-content")).toBeInTheDocument();
  });

  it("Then it should render icon with the specified alt text", () => {
    expect(screen.getByAltText("icon")).toBeInTheDocument();
  });
});
