import Image from "next/image";
import React from "react";
import { Button2 } from "./Button";
import calculator from "../../public/assets/images/calculator.png";

const BudgetCalculator = () => {
  return (
    <div className="w-full mx-auto flex flex-wrap justify-center items-center gap-x-10 py-10 lg:py-20 bg-gray-200">
      <Image
        src={calculator.src}
        alt=""
        width={100}
        height={100}
        className="size-32 sm:size-44 md:size-56"
      />
      <div className="capitalize px-10 text-center md:text-left">
        <h1 className="mb-4 text-gray-700 text-2xl sm:text-3xl md:text-4xl font-semibold">
          interior design budget calculator
        </h1>
        <p className="mb-4 text-sm sm:text-md md:text-lg">
          calculate budget for your home interior design by sharing your space
          details. test
        </p>
        <Button2 title="get estimate" link="/" />
      </div>
    </div>
  );
};

export default BudgetCalculator;
