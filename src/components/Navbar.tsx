"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button, { Button2 } from "./Button";

const Navbar = () => {
  const [isFixedNav, setNavFixed] = useState(false);

  const fixNav = () => {
    if (window.scrollY > 150) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", fixNav);
  }, []);

  return (
    <nav
      className={`bg-transparent backdrop-blur-sm backdrop-brightness-[.98] fixed top-0 ${
        isFixedNav && "bg-primary-bg shadow-md"
      } w-full z-20 start-0`}
    >
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
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
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button2 title="login" className="hidden md:flex" />
          <Button title="free consult now" className="hidden md:flex" />
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col ${
              isFixedNav ? "text-gray-900" : "text-gray-100"
            } text-xl rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0`}
          >
            <li>
              <Link href="#" className="block py-2 px-3" aria-current="page">
                Services
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3">
                Design ideas
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-2 px-3">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
