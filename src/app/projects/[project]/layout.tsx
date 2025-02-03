import React from "react";

const ProjectPageLayout = ({
  params,
  children,
}: Readonly<{
  children: React.ReactNode;
  params: { project: string };
}>) => {
  return (
    <section className="relative w-[80vw] h-auto mx-auto my-10">
      <h2 className="my-6 text-lg sm:text-xl lg:text-2xl font-montserrat">
        {params.project} Page
      </h2>
      {children}
    </section>
  );
};

export default ProjectPageLayout;
