import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="text-sm sm:text-md lg:text-lg font-semibold whitespace-nowrap capitalize text-gray-600">
                <span className="text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider font-bold text-red-600">
                  Dipankar
                </span>{" "}
                <br /> interior & exterior solutions
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 md:grid-cols-4">
            {/* Design Ideas Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Design Ideas
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {footerData.designIdeas.map((idea, index) => (
                  <li key={index} className="mb-4">
                    <a href={idea.link} className="hover:underline">
                      {idea.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Our Services
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {footerData.services.map((service, index) => (
                  <li key={index} className="mb-4">
                    <a href={service.link} className="hover:underline">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Our Projects
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {footerData.projects.map((project, index) => (
                  <li key={index} className="mb-4">
                    <a href={project.link} className="hover:underline">
                      {project.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                About Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {footerData.about.map((item, index) => (
                  <li key={index} className="mb-4">
                    <a href={item.link} className="hover:underline">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Dipankar Interior & Exterior Solutions™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
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
      </div>
    </footer>
  );
};

const footerData = {
  designIdeas: [
    { title: "Modern Living Room", link: "#" },
    { title: "Minimalist Bedroom", link: "#" },
    { title: "Cozy Home Office", link: "#" },
    { title: "Sustainable Design", link: "#" },
    { title: "Color Palette Ideas", link: "#" },
    { title: "Lighting Tips", link: "#" },
  ],
  services: [
    { title: "Residential Interior Design", link: "#" },
    { title: "Commercial Interior Design", link: "#" },
    { title: "3D Visualization", link: "#" },
    { title: "Space Planning", link: "#" },
    { title: "Color Consultation", link: "#" },
    { title: "Furniture Selection", link: "#" },
  ],
  projects: [
    { title: "Luxury Villa in XYZ", link: "#" },
    { title: "Modern Office Space", link: "#" },
    { title: "Chic Cafe Interior", link: "#" },
    { title: "Stylish Apartment Renovation", link: "#" },
    { title: "Family Home Design", link: "#" },
    { title: "Retail Space Transformation", link: "#" },
  ],
  about: [
    { title: "Our Story", link: "#" },
    { title: "Meet the Team", link: "#" },
    { title: "Testimonials", link: "#" },
    { title: "Careers", link: "#" },
    { title: "Press & Media", link: "#" },
    { title: "Contact Us", link: "#" },
  ],
};

export default Footer;
