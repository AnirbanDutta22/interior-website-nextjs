import React from "react";
import image from "../../../public/assets/images/works3.jpg";
import Image from "next/image";
import Link from "next/link";

const DesignIdea = () => {
  return (
    <section className="w-full relative">
      <h1 className="mt-10 mb-5 text-xl sm:text-2xl lg:text-3xl font-montserrat">
        INTERIOR{" "}
        <span className="text-primary-btn font-semibold">DESIGN IDEAS</span>
      </h1>
      <p className="text-xl">
        Find the perfect home interior design ideas to match your style. Get
        inspired with our exclusive collection of beautiful, customized designs
        and trends. Our team of interior design experts will help you create a
        space that reflects your personality, taste and lifestyle.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-auto gap-10 my-10">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((idea, index) => (
          <Link href="/design-ideas/1" key={index}>
            <div className="w-full h-96 flex flex-col gap-y-4 cursor-pointer">
              <Image src={image} alt="" className="w-full h-5/6" />
              <div>
                <h2 className="text-2xl">Kitchen Designs</h2>
                <span>10 Designs</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default DesignIdea;
