import React, { Suspense } from "react";
import Link from "next/link";
import Card from "@/components/works/Card";
import ContactForm from "@/components/ContactForm";
import BudgetCalculator from "@/components/BudgetCalculator";
import { getRecentWorks } from "../_lib/data";
import LoadingSpinner from "@/components/LoadingSpinner";

// Server component for project sections
async function ProjectSection({ title, link }: { title: string; link: string }) {
  const recentworks = await getRecentWorks();
  
  return (
    <>
      <div className="mt-10 flex justify-between items-center mb-3 text-xl">
        <h2 className="my-6 text-lg sm:text-xl lg:text-2xl font-montserrat">
          {title}
        </h2>
        <Link
          href={link}
          className="text-gray-500 hover:text-primary-btn"
        >
          Explore more {">"}
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recentworks.map((work: any, index: number) => {
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
    </>
  );
}

const Projects = () => {
  return (
    <section className="relative">
      <h1 className="mt-10 mb-5 text-xl sm:text-2xl lg:text-3xl font-montserrat">
        PROJECTS WE HAVE{" "}
        <span className="text-primary-btn font-semibold">EXECUTED</span>
      </h1>

      {/* recent projects */}
      <Suspense fallback={<LoadingSpinner />}>
        <ProjectSection title="Recent Projects" link="/projects/recent-projects" />
      </Suspense>
      
      {/* residential projects */}
      <Suspense fallback={<LoadingSpinner />}>
        <ProjectSection title="Residential Projects" link="/projects/recent-projects" />
      </Suspense>
      
      {/* commercial projects */}
      <Suspense fallback={<LoadingSpinner />}>
        <ProjectSection title="Commercial Projects" link="/projects/recent-projects" />
      </Suspense>
    </section>
  );
};

export default Projects;
