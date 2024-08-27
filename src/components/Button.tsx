import React from "react";

export type Title = string;

export default function Button({ title }: { title?: Title }) {
  return (
    <button
      type="button"
      className="text-white bg-secondary-btn font-medium rounded-full text-sm px-6 py-3 text-center me-2 mb-2 capitalize"
    >
      {title}
    </button>
  );
}

export function Button2({ title }: { title?: Title }) {
  return (
    <button
      type="button"
      className="text-secondary-btn border border-secondary-btn font-medium rounded-full text-sm px-6 py-3 text-center me-2 mb-2 capitalize"
    >
      {title}
    </button>
  );
}
