import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGreaterThan,
  FaLessThan,
} from "react-icons/fa6";

export function DefaultArrows({ onRightHandleClick, onLeftHandleClick }) {
  return (
    <>
      <button
        className="left-arrow absolute top-1/2 translate-y-[-50%] left-10 z-10 text-xl lg:text-2xl font-bold text-slate-200"
        onClick={onLeftHandleClick}
      >
        <FaLessThan />
      </button>
      <button
        className="right-arrow absolute top-1/2 translate-y-[-50%] right-10 z-10 text-xl lg:text-2xl font-bold text-slate-200"
        onClick={onRightHandleClick}
      >
        <FaGreaterThan />
      </button>
    </>
  );
}

export function CustomArrows({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}
