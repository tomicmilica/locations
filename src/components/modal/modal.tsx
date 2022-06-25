import React from "react";
import ReactDOM from "react-dom";
import { Content } from "./styled/modal.styled";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <Content>{children}</Content>
    </>,
    document.getElementById("modal") as Element
  );
};

export default Modal;
