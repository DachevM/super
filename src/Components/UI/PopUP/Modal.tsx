import { useCallback } from "react";
import { createPortal } from "react-dom";

import type React from "react";

import "./modal.css";

interface ModalProps {
  show: boolean;
  setShow: (v: boolean) => void;
  children: React.ReactNode;
}

const Modal = ({ show, setShow, children }: ModalProps) => {
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      setShow(false);
    }
  });

  return createPortal(
    <div
      className={show ? "modal_active" : "modal"}
      onClick={useCallback(() => {
        setShow(false);
      }, [])}
    >
      <div
        className={"content"}
        onClick={useCallback((e: any) => {
          e.stopPropagation();
        }, [])}
      >
        {children}
      </div>
    </div>,
    document.getElementById("modals") as HTMLInputElement
  );
};

export default Modal;
