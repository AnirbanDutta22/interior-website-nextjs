import React from "react";
import Input, { TextArea } from "./form/Input";
import Button from "./Button";

const ContactForm = ({
  title,
  className,
}: {
  title: string;
  className: string;
}) => {
  return (
    <div className={`px-7 py-7 shadow-2xl ${className}`}>
      <h1 className="text-3xl sm:text-4xl font-medium text-red-500">{title}</h1>
      <p className="text-base font-medium text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        natus
      </p>
      <form action="" className="mt-4">
        <Input label="Name" type="text" name="Name" placeholder="Name" />
        <Input label="Email" type="email" name="Email" placeholder="Email" />
        <Input label="Phone" type="text" name="Phone" placeholder="Phone" />
        <TextArea />
      </form>
      <Button title="Submit" className="my-3" />
    </div>
  );
};

export default ContactForm;
