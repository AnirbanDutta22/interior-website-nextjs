import React from "react";
import image from "../../../../public/assets/images/works6.jpg";
import Image from "next/image";
import { Button2 } from "@/components/Button";

const DesignIdea = ({ params }: { params: { designIdeaId: string } }) => {
  return (
    <section className="w-full relative h-full">
      <h1 className="mt-10 mb-5 text-xl sm:text-2xl lg:text-3xl font-montserrat">
        {params.designIdeaId}{" "}
        <span className="text-primary-btn font-semibold">DESIGN IDEAS</span>
      </h1>
      <p className="text-xl">
        Find the perfect kitchen interior design ideas to match your style. Get
        inspired with our exclusive collection of beautiful, customized designs
        and trends. Our team of interior design experts will help you create a
        space that reflects your personality, taste and lifestyle.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-auto gap-10 my-10">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idea, index) => (
          <div
            key={index}
            className="w-full h-96 flex flex-col gap-y-4 cursor-pointer"
          >
            <Image src={image} alt="" className="w-full h-5/6" />
            <Button2 link="#" title="get quote" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignIdea;
