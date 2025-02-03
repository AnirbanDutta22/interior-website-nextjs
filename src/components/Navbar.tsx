/* eslint-disable react/display-name */
"use client";
import Link from "next/link";
import React, { forwardRef, useEffect, useState } from "react";
import Button, { Button2 } from "./Button";
import { usePathname } from "next/navigation";
import Input from "./form/Input";
import { CgCross } from "react-icons/cg";
import { BiCross } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const navItmes = [
  { item: "services", link: "services" },
  { item: "design ideas", link: "design-ideas" },
  { item: "gallery", link: "gallery" },
  { item: "about us", link: "about" },
  { item: "contact", link: "contact" },
];

const Navbar = forwardRef<HTMLElement>((props, ref) => {
  const [isFixedNav, setNavFixed] = useState(false);
  const [isQuoteModalOpen, setQuoteModelOpen] = useState(false);
  const pathname = usePathname();

  const fixNav = () => {
    if (window.scrollY > 150) {
      setNavFixed(true);
    } else {
      setNavFixed(false);
    }
  };

  const modalOpen = () => {
    setQuoteModelOpen((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener("scroll", fixNav);
  }, []);

  return (
    <>
      <nav
        className={`backdrop-blur-sm backdrop-brightness-[.98] fixed top-0 ${
          pathname === "/"
            ? isFixedNav
              ? "bg-primary-bg shadow-md"
              : "bg-transparent"
            : "bg-primary-bg shadow-md"
        } w-full z-20 start-0`}
        ref={ref}
      >
        <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-3">
          {/* logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="text-sm sm:text-md lg:text-lg font-semibold whitespace-nowrap capitalize text-gray-400">
              <span className="text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wider font-bold text-red-600">
                Dipankar
              </span>{" "}
              <br /> interior & exterior solutions
            </span>
          </Link>
          {/* buttons */}
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button2 title="login" link="/login" className="hidden lg:flex" />
            <Button
              title="free consult now"
              className="hidden lg:flex"
              onClick={modalOpen}
            />
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          {/* navitems */}
          <div
            className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul
              className={`flex flex-col ${
                pathname === "/"
                  ? isFixedNav
                    ? "text-gray-900"
                    : "text-gray-100"
                  : "text-gray-900"
              } text-xl rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0`}
            >
              {navItmes.map((item, i) => (
                <li key={i}>
                  <Link
                    href={`/${item.link}`}
                    className={`block py-2 px-3 capitalize ${
                      isFixedNav
                        ? "hover:text-primary-btn"
                        : "hover:text-gray-300"
                    }`}
                    aria-current="page"
                  >
                    {item.item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {isQuoteModalOpen && (
        <div className="z-30 fixed flex bg-black/60 py-20 px-30 w-full h-full justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative bg-primary-bg p-10 w-[40rem] h-fit">
            <h1 className="text-center text-3xl font-bold text-red-500">
              Get Free Consultation
            </h1>
            <form action="" className="mt-4">
              <Input label="Name" type="text" name="Name" placeholder="Name" />
              <Input
                label="Email"
                type="email"
                name="Email"
                placeholder="Email"
              />
              <Input
                label="Phone"
                type="text"
                name="Phone"
                placeholder="Phone"
              />
              <Input
                label="Pincode"
                type="text"
                name="Pincode"
                placeholder="Pincode"
              />
            </form>
            <p className="my-3">
              <input type="checkbox" className="mr-4 cursor-pointer" />
              By submitting this form, you agree to the privacy policy & terms
              and conditions
            </p>
            <Button title="Submit" className="my-5" />
            <RxCross2
              className="text-3xl absolute top-4 right-4 cursor-pointer"
              onClick={modalOpen}
            />
          </div>
        </div>
      )}
    </>
  );
});

export default Navbar;
