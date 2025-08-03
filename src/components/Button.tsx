import Link from "next/link";
import React from "react";

export type Title = string;

export default function Button({
  title,
  className,
  color,
  onClick,
  disabled,
  type = "button",
}: {
  title?: Title;
  className?: string;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`md:flex justify-center items-center text-white transition-all ease-in-out duration-150 bg-secondary-btn hover:bg-primary-btn-100
      font-medium rounded-full text-sm px-6 py-3 text-center me-2 mb-2 capitalize ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {title}
    </button>
  );
}

export function Button2({
  title,
  className,
  color,
  link,
}: {
  title?: Title;
  className?: string;
  color?: string;
  link?: string;
}) {
  // console.log(link);
  return (
    <Link href={link}>
      <button
        type="button"
        className={`text-primary-btn border border-primary-btn transition-all ease-in-out duration-150 hover:bg-primary-btn hover:text-primary-bg hover:border-transparent font-medium rounded-full text-sm px-6 py-3 text-center me-2 mb-2 capitalize ${className}`}
      >
        {title}
      </button>
    </Link>
  );
}
