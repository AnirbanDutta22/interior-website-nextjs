import React from "react";
import Card from "./Card";
import recentworks from "../../../public/data/recentworks.json";
import Link from "next/link";

const RecentWorks = () => {
  return (
    <section className="relative w-[80vw] h-auto mx-auto my-10">
      <h2 className="sectionHeading">our recent works</h2>
      <h1 className="my-10 text-center text-2xl sm:text-3xl lg:text-4xl font-montserrat">
        Have a look on our{" "}
        <span className="text-primary-btn font-semibold">Recent Projects</span>
      </h1>
      <div className="flex justify-end mb-3 text-xl text-gray-500 hover:text-primary-btn">
        <Link href="/projects" className="">
          Explore more {">"}
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recentworks.map((work, index) => (
          <Card
            key={index}
            title={work.title}
            description={work.description}
            img_url={work.img_url}
            link="/projects/recent-projects/1"
          />
        ))}
      </div>
    </section>
  );
};

export default RecentWorks;
