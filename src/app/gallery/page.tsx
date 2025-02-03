import React from "react";
import Image from "next/image";
import image from "../../../public/assets/images/works5.jpeg";

const Gallery = () => {
  return (
    <section className="relative">
      <h1 className="mt-10 mb-5 text-xl sm:text-2xl lg:text-3xl font-montserrat">
        OUR <span className="text-primary-btn font-semibold">GALLERY</span>
      </h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 md:grid-rows-8 gap-4">
          <div className="h-48 col-span-2 sm:col-span-3 md:col-span-2">
            <Image
              src={image}
              alt="Item 1"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 2"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 3"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="row-span-2">
            <Image
              src={image}
              alt="Item 4"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <Image
              src={image}
              alt="Item 5"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 6"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="row-span-2">
            <Image
              src={image}
              alt="Item 7"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="row-span-2">
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div className="h-48 col-span-2">
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <Image
              src={image}
              alt="Item 8"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
