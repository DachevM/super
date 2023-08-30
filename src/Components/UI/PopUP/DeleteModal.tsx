import { useCallback } from "react";
import { createPortal } from "react-dom";

import type React from "react";

import "./modal.css";

interface DeleteProps {
  show: boolean;
  setShow: (v: boolean) => void;
  children: React.ReactNode;
}
const DeleteModal = ({ show, setShow, children }: DeleteProps) => {
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      setShow(false);
    }
  });
  return createPortal(
    <div
      className={show ? "modal_active" : "modal"}
      onClick={useCallback(() => setShow(false), [])}
    >
      <div
        className={"delete_modal"}
        onClick={useCallback((e: any) => e.stopPropagation(), [])}
      >
        {children}
      </div>
    </div>,
    document.getElementById("deleteModal") as HTMLElement
  );
};

export default DeleteModal;
