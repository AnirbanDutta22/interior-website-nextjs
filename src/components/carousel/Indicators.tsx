import React from "react";

type ClickType = (index: number) => number;

export function DefaultIndicators({
  slides,
  slideNo,
  onIndicatorClick,
}: {
  slides?: number;
  slideNo?: number;
  onIndicatorClick?: ClickType;
}) {
  let indicators = Array.from({ length: slides }, (_, i) => i);

  return (
    <div className="absolute top-[90%] left-1/2 translate-x-[-50%] flex gap-x-2">
      {indicators.map((_, index) => (
        <button
          key={index}
          className={`${
            slideNo === index ? "bg-slate-400" : "bg-slate-200"
          } indicator size-1 sm:size-2.5 lg:size-3 rounded-full`}
          onClick={() => onIndicatorClick(index)}
        ></button>
      ))}
    </div>
  );
}

export function CustomIndicators({ children }: { children?: React.ReactNode }) {
  return <>{children}</>;
}
