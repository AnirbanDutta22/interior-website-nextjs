import React from "react";
import Input, { TextArea } from "./form/Input";
import Button from "./Button";
import { submitContactForm } from "@/app/_lib/actions";

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
      <form action={submitContactForm} className="mt-4">
        <Input label="Name" type="text" name="name" placeholder="Name" required />
        <Input label="Email" type="email" name="email" placeholder="Email" required />
        <Input label="Phone" type="text" name="phone" placeholder="Phone" required />
        <Input label="Pincode" type="text" name="pincode" placeholder="Pincode" required />
        <TextArea />
        <Button title="Submit" className="my-3" type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
