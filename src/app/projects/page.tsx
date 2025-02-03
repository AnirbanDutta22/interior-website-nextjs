import React from "react";
import recentworks from "../../../public/data/recentworks.json";
import Link from "next/link";
import Card from "@/components/works/Card";
import ContactForm from "@/components/ContactForm";
import BudgetCalculator from "@/components/BudgetCalculator";

const Projects = () => {
  return (
    <section className="relative">
      <h1 className="mt-10 mb-5 text-xl sm:text-2xl lg:text-3xl font-montserrat">
        PROJECTS WE HAVE{" "}
        <span className="text-primary-btn font-semibold">EXECUTED</span>
      </h1>

      {/* recent projects */}
      <div className="flex justify-between items-center mb-3 text-xl">
        <h2 className="my-6 text-lg sm:text-xl lg:text-2xl font-montserrat">
          Recent Projects
        </h2>
        <Link
          href="/projects/recent-projects"
          className="text-gray-500 hover:text-primary-btn"
        >
          Explore more {">"}
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recentworks.map((work, index) => {
          if (index < 4)
            return (
              <Card
                key={index}
                title={work.title}
                description={work.description}
                img_url={work.img_url}
                link="/projects/recent-projects/1"
              />
            );
        })}
      </div>
      {/* residential projects */}
      <div className="mt-10 flex justify-between items-center mb-3 text-xl">
        <h2 className="my-6 text-lg sm:text-xl lg:text-2xl font-montserrat">
          Residential Projects
        </h2>
        <Link
          href="/projects/recent-projects"
          className="text-gray-500 hover:text-primary-btn"
        >
          Explore more {">"}
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recentworks.map((work, index) => {
          if (index < 4)
            return (
              <Card
                key={index}
                title={work.title}
                description={work.description}
                img_url={work.img_url}
                link="/projects/recent-projects/1"
              />
            );
        })}
      </div>
      {/* commercial projects */}
      <div className="mt-10 flex justify-between items-center mb-3 text-xl">
        <h2 className="my-6 text-lg sm:text-xl lg:text-2xl font-montserrat">
          Commercial Projects
        </h2>
        <Link
          href="/projects/recent-projects"
          className="text-gray-500 hover:text-primary-btn"
        >
          Explore more {">"}
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recentworks.map((work, index) => {
          if (index < 4)
            return (
              <Card
                key={index}
                title={work.title}
                description={work.description}
                img_url={work.img_url}
                link="/projects/recent-projects/1"
              />
            );
        })}
      </div>
    </section>
  );
};

export default Projects;
