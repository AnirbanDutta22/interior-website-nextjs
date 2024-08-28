import Image from "next/image";
import React from "react";
import heroImg3 from "../../../public/assets/images/heroImg3.jpg";

const WorksCategory = () => {
  return (
    <section className="relative w-[100vw] h-auto mx-auto mt-10 py-10 bg-slate-300">
      <h2 className="sectionHeading">explore category wise</h2>
      <h1 className="mt-10 text-center text-2xl sm:text-3xl lg:text-4xl font-montserrat capitalize">
        Customize your home{" "}
        <span className="text-primary-btn font-semibold">as you want</span>
      </h1>
      <p className="mb-10 text-lg text-center">
        Explore our home interior designs category wise and customize your home.
      </p>
    </section>
  );
};

export default WorksCategory;
