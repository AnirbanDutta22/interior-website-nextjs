import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export function DefaultArrows({ onRightHandleClick, onLeftHandleClick }) {
  return (
    <>
      <button
        className="left-arrow absolute top-1/2 translate-y-[-50%] left-10 z-10 text-xl lg:text-2xl font-bold bg-slate-200 hover:bg-slate-300 text-black p-2.5 rounded-full"
        onClick={onLeftHandleClick}
      >
        <FaArrowLeft />
      </button>
      <button
        className="right-arrow absolute top-1/2 translate-y-[-50%] right-10 z-10 text-xl lg:text-2xl font-bold bg-slate-200 hover:bg-slate-300 text-black p-2.5 rounded-full"
        onClick={onRightHandleClick}
      >
        <FaArrowRight />
      </button>
    </>
  );
}

export function CustomArrows({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}
