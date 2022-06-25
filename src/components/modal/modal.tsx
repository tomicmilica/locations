import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>{children}</>,
    document.getElementById("modal") as Element
  );
};

export default Modal;
