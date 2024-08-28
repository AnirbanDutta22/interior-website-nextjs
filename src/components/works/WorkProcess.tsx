import React from "react";
import process from "../../../public/data/process.json";
import Image from "next/image";

const WorkProcess = () => {
  return (
    <div className="relative w-[80%] mx-auto py-10 md:py-20">
      <h2 className="sectionHeading">how we work</h2>
      <h1 className="mt-10 text-center text-2xl sm:text-3xl lg:text-4xl font-montserrat capitalize">
        phases of{" "}
        <span className="text-primary-btn font-semibold">
          achieving your dream
        </span>
      </h1>
      {process.map((pro, index) => (
        <div
          key={index}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:text-center"
        >
          <span className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-gray-400">
            {pro.id}
          </span>
          <div className="md:col-span-2 text-left">
            <h1 className="text-lg sm:text-xl lg:text-3xl uppercase font-semibold text-gray-500">
              {pro.heading}
            </h1>
            <p>{pro.text}</p>
          </div>
          <div className="sm:col-span-2 grid grid-cols-2 gap-x-5">
            {pro.images.map((_, index) => (
              <Image
                key={index}
                src={_}
                width={100}
                height={100}
                alt=""
                className="w-[35rem] h-full object-cover"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkProcess;
