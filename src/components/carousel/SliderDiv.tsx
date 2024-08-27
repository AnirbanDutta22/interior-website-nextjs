"use client";

import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function SliderDiv({
  id,
  index,
  children,
}: {
  id?: string;
  index?: number;
  children?: ReactNode;
}) {
  const slideNo = useSelector(
    (state: RootState) => state.sliderCounter.slideNo
  );

  return (
    <div
      id={id}
      className={`slide absolute top-0 left-0 w-full h-full transition-all ease-in-out duration-300 ${
        slideNo > index
          ? "translate-x-[-100%]"
          : slideNo < index && "translate-x-[100%]"
      }`}
    >
      {children}
    </div>
  );
}
