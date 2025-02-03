"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import categories from "../../../public/data/categories.json";
import { useRouter } from "next/router";
import Link from "next/link";

const WorksCategory = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="relative w-[100vw] h-auto mx-auto mt-10 py-10 bg-slate-200">
      <h2 className="sectionHeading">explore category wise</h2>
      <h1 className="mt-10 text-center text-2xl sm:text-3xl lg:text-4xl font-montserrat capitalize">
        Customize your home{" "}
        <span className="text-primary-btn font-semibold">as you want</span>
      </h1>
      <p className="mb-10 mt-2 text-base text-center">
        Explore our home interior designs category wise and customize your home.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-[25rem,25rem,25rem] gap-6 w-[80%] mx-auto">
        {categories.map((cat, index) => (
          <Link
            href={`/categories/${cat.title.toLowerCase()}`}
            key={index}
            className={`video-container relative ${
              index === 1
                ? "md:row-span-2 md:col-span-2"
                : index === 5 || index === 6
                ? "md:col-span-3"
                : "md:col-span-2"
            } cursor-pointer group`}
          >
            <video
              className="w-full h-full object-cover"
              src="/assets/videos/vid1.mp4"
              loop
              autoPlay
            />
            <div className="absolute w-full h-full p-2 sm:p-3 md:p-5 flex items-end text-white bottom-0 left-0 bg-gradient-to-t from-gray-900 from-5%">
              <h1 className="text-lg sm:text-xl md:text-2xl font-montserrat capitalize">
                {cat.title}
              </h1>
              <FaArrowRight className="mb-2 mx-3 transition-all ease-in-out duration-500 group-hover:translate-x-4" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WorksCategory;
