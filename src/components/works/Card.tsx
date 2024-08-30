import Image from "next/image";
import Link from "next/link";
import React from "react";
import cardImg from "../../../public/assets/images/heroImg.jpg";
import { FaArrowRight } from "react-icons/fa6";

const Card = ({
  title,
  description,
  img_url,
}: {
  title?: string;
  description?: string;
  img_url?: string;
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow">
      <Link href="#">
        <div className="relative w-full h-[18rem] sm:h-[24rem] lg:h-[30rem] group">
          <Image
            width={500}
            height={500}
            src={img_url}
            alt=""
            className="rounded-t-lg w-full h-full object-cover"
          />
          <div className="p-3 lg:p-4 absolute bottom-0 bg-gradient-to-t from-gray-900 from-10% via-gray-800 via-30%">
            <div className="mb-1 sm:mb-2 font-semibold text-lg sm:text-xl lg:text-2xl capitalize text-white p-3">
              {title}
              <br />
              <div className="font-normal nowrap text-sm sm:text-base transition-all ease-in-out hidden sm:group-hover:block">
                {description}
                <div className="flex justify-center gap-x-24 items-center p-3 mt-2 rounded-full border transition-all text-primary-btn hover:text-primary-bg border-primary-btn hover:bg-primary-btn">
                  Explore <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
