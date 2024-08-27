import React from "react";

export type Title = string;

export default function Button({
  title,
  className,
  color,
}: {
  title?: Title;
  className?: string;
  color?: string;
}) {
  return (
    <button
      type="button"
      className={`md:flex justify-center items-center text-white bg-secondary-btn
      font-medium rounded-full text-sm px-6 py-3 text-center me-2 mb-2 capitalize ${className}`}
    >
      {title}
    </button>
  );
}

export function Button2({
  title,
  className,
  color,
}: {
  title?: Title;
  className?: string;
  color?: string;
}) {
  return (
    <button
      type="button"
      className={`text-secondary-btn border border-secondary-btn font-medium rounded-full text-sm px-6 py-3 text-center me-2 mb-2 capitalize ${className}`}
    >
      {title}
    </button>
  );
}
