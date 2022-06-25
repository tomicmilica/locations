import React, { FC } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div>{children}</div>
    </>,
    document.getElementById("modal") as Element
  );
};

export default Modal;
