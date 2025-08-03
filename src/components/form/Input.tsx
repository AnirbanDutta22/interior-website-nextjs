import React, { ChangeEventHandler } from "react";

const Input = ({
  label,
  value,
  name,
  onChangeValue,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  value?: string;
  type: string;
  onChangeValue?: ChangeEventHandler;
  placeholder: string;
  required?: boolean;
}) => {
  return (
    <div className="flex flex-col gap-y-1.5 sm:gap-y-2.5">
      <label
        htmlFor={name}
        className="text-lg sm:text-xl font-semibold my-1.5 text-primary-btn-100"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value || ""}
        onChange={onChangeValue}
        required={required}
        className="px-5 py-2 text-black text-base sm:text-lg border-1 border border-gray-300 focus:outline-1 focus:outline-gray-400"
        placeholder={placeholder}
      />
    </div>
  );
};

const TextArea = () => {
  return (
    <div className="flex flex-col gap-y-2.5">
      <label
        htmlFor="textarea"
        className="text-xl font-semibold my-1.5 text-primary-btn-100"
      >
        Write Message
      </label>
      <textarea
        className="px-5 py-2 border-1 border border-gray-300 focus:outline-1 focus:outline-gray-400"
        id="textarea"
        name="textarea"
        rows={6}
      />
    </div>
  );
};

export { TextArea };
export default Input;
