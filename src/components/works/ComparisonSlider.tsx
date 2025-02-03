import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const homes = [
  {
    title: "Madhab's kitchen",
    img1: "/assets/images/works2.jpeg",
    img2: "/assets/images/works5.jpeg",
  },
  {
    title: "Radhika's hall room",
    img1: "/assets/images/works3.jpg",
    img2: "/assets/images/works1.jpg",
  },
  {
    title: "Raja's living room",
    img1: "/assets/images/works7.jpg",
    img2: "/assets/images/works8.jpg",
  },
  {
    title: "Ayush's balcony",
    img1: "/assets/images/works5.jpeg",
    img2: "/assets/images/works2.jpeg",
  },
  {
    title: "Kapil's kitchen",
    img1: "/assets/images/works3.jpg",
    img2: "/assets/images/works5.jpeg",
  },
];

const ComparisonSlider = () => {
  const labelStyle = {
    fontSize: ".75rem",
    position: "absolute",
    padding: ".25rem",
    color: "white",
    borderRadius: ".25rem",
    border: "1px solid white",
    backdropFilter:
      "blur(0.25rem) saturate(180%) contrast(80%) brightness(120%)",
    WebkitBackdropFilter:
      "blur(0.25rem) saturate(180%) contrast(80%) brightness(120%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    transition: "opacity 0.25s ease-in-out",
  };
  return (
    <section className="relative w-[80vw] h-auto mx-auto mt-10 py-10">
      <h2 className="sectionHeading">change the look</h2>
      <h1 className="mt-10 text-center text-2xl sm:text-3xl lg:text-4xl font-montserrat capitalize">
        Explore real{" "}
        <span className="text-primary-btn font-semibold">before & after</span>{" "}
        designs
      </h1>
      <p className="mb-10 mt-2 text-base text-center">
        Explore our home interior designs category wise and customize your home.
      </p>
      <div className="flex justify-between items-center text-base sm:text-md lg:text-xl capitalize overflow-x-scroll md:overflow-x-hidden">
        <TabGroup className="w-full">
          <TabList>
            {homes.map((home, index) => (
              <Tab
                key={index}
                className="data-[selected]:bg-primary-btn data-[selected]:outline-none data-[selected]:text-white"
              >
                <div
                  className={`w-full text-nowrap px-3 md:px-5 py-1 md:py-2 border-b-4 cursor-pointer`}
                >
                  {home.title}
                </div>
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {homes.map((home, index) => (
              <TabPanel key={index}>
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={home.img1}
                      srcSet={home.img1}
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={home.img2}
                      srcSet={home.img2}
                      alt="Image two"
                    />
                  }
                  handle={
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <ReactCompareSliderHandle />
                      <div
                        style={{
                          ...labelStyle,
                          translate: "-100% 0",
                          left: 0,
                        }}
                      >
                        before
                      </div>
                      <div
                        style={{
                          ...labelStyle,
                          translate: "100% 0",
                          right: 0,
                        }}
                      >
                        after
                      </div>
                    </div>
                  }
                  className="h-[24rem] sm:h-[32rem] lg:h-[40rem]"
                />
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </section>
  );
};

export default ComparisonSlider;
