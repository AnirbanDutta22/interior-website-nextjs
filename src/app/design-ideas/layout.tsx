import BudgetCalculator from "@/components/BudgetCalculator";
import ContactForm from "@/components/ContactForm";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="w-full relative">
      {children}
      <BudgetCalculator />
      <div className="w-1/2 mt-20 mb-10 mx-auto">
        <ContactForm title="Contact us" className="shadow-lg" />
      </div>
    </section>
  );
};

export default layout;
