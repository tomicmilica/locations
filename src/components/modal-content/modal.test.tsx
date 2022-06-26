import { fireEvent, render, screen } from "@testing-library/react";
import ModalContent from "./modalContent";
import "@testing-library/jest-dom/extend-expect";

const Locations = {
  id: "1",
  createdAt: new Date("2021-01-01"),
  name: "Fadelhaven",
  userCount: 2,
  description: "Creative",
  views: 5,
};

const modalProps = {
  location: Locations,
  onClose: jest.fn(),
};

describe("Modal", () => {
  beforeEach(() => {
    render(<ModalContent {...modalProps} />);
  });

  test("Should render component", () => {
    expect(screen.getByTestId("modal-content")).toBeInTheDocument();
  });

  it("Then it should call onClose", () => {
    const button = screen.getByTestId("modal-x-button");
    fireEvent.click(button);
    expect(modalProps.onClose).toHaveBeenCalledTimes(1);
  });
});
