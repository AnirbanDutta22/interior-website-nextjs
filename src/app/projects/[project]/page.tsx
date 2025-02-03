import Link from "next/link";
import React from "react";

import recentworks from "../../../../public/data/recentworks.json";
import Card from "@/components/works/Card";

const Project = () => {
  return (
    <section>
      {/* projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recentworks.map((work, index) => {
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

export default Project;
