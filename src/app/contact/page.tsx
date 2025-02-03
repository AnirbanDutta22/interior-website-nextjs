import ContactForm from "@/components/ContactForm";
import Map from "@/components/Map";
import React from "react";
import { BiCurrentLocation, BiLocationPlus, BiPhoneCall } from "react-icons/bi";
import { FaClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="relative">
      <h1 className="mt-10 mb-5 text-xl sm:text-2xl lg:text-3xl font-montserrat">
        <span className="text-primary-btn font-semibold">CONTACT</span> US
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap gap-10">
        {/* contact details */}
        <div className="basis-full lg:basis-1/2">
          <Map />
          <h1 className="mt-5 text-2xl sm:text-3xl text-red-500 font-medium">
            Seamless Communication
          </h1>
          <p className="text-sm sm:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
            voluptatum.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 border-t-2 border-b-2 border-gray-400 p-8 my-4">
            <div className="flex items-center gap-x-2">
              <BiCurrentLocation className="text-6xl bg-blue-100 text-primary-btn-100" />
              <div>
                <h3 className="text-lg sm:text-xl font-medium">Office</h3>
                <p className="text-base sm:text-lg text-nowrap sm:text-wrap">
                  Coochbehar,West Bengal,700324
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <BiPhoneCall className="text-6xl bg-blue-100 text-primary-btn-100" />
              <div>
                <h3 className="text-lg sm:text-xl font-medium">Call Us</h3>
                <span className="text-base sm:text-lg text-nowrap sm:text-wrap">
                  +919876543723 / 89765463872
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <MdEmail className="text-6xl bg-blue-100 text-primary-btn-100" />
              <div>
                <h3 className="text-lg sm:text-xl font-medium">
                  Email Support
                </h3>
                <span className="text-base sm:text-lg text-nowrap sm:text-wrap">
                  dipankarinterior@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <FaClock className="text-6xl bg-blue-100 text-primary-btn-100" />
              <div>
                <h3 className="text-lg sm:text-xl font-medium">Office Hour</h3>
                <span className="text-base sm:text-lg text-nowrap sm:text-wrap">
                  10.00 - 5.00
                </span>
              </div>
            </div>
          </div>
          <div className="flex mt-4 justify-start sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
        {/* contact form */}
        <div className="basis-full lg:basis-1/2 px-6">
          <ContactForm title="Send us message" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
