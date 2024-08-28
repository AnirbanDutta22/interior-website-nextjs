import Hero from "@/components/home/Hero";
import Image from "next/image";

import who_we from "../../public/assets/images/who_we.jpg";
import map from "../../public/assets/images/map.png";
import stats from "../../public/data/stats.json";
import reasons from "../../public/data/reasons.json";
import Button from "@/components/Button";
import RecentWorks from "@/components/works/RecentWorks";
import WorksCategory from "@/components/works/WorksCategory";
import WorkProcess from "@/components/works/WorkProcess";
import Review from "@/components/home/Review";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <Hero />
      {/* who we are section */}
      <section className="relative w-[80vw] h-auto mx-auto my-10">
        <h2 className="sectionHeading">who we are</h2>
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 p-6 mt-6">
          <Image
            src={who_we}
            alt="who_we_are"
            className="w-full h-full object-cover"
          />
          <div className="p-6 flex flex-col gap-y-6 justify-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat">
              Crafter of{" "}
              <span className="text-primary-btn font-semibold">
                Your Perfect Space
              </span>
            </h1>
            <p className="font-sans text-md sm:text-lg lg:text-xl mt-3">
              At [Your Company], we are dedicated to transforming houses into
              homes with style and sophistication. Our team of experienced
              interior designers combines creativity with technical expertise to
              craft spaces that are both beautiful and functional. We take pride
              in understanding your unique vision and translating it into
              stunning, personalized interiors.
            </p>
            <Button title="discover more" className="w-[10rem]" />
          </div>
        </div>
        {/* stats */}
        <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-7 p-6 mt-16 md:my-36">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${
                stat.title === "experience" &&
                "scale-110 md:scale-150 mx-0 md:mx-4 px-3 py-2 shadow-amber-400 shadow-2xl"
              } text-center capitalize`}
            >
              <span className={`text-3xl sm:text-4xl font-bold`}>
                {stat.number}
              </span>
              <h4 className="text-lg sm:text-xl">{stat.title}</h4>
            </div>
          ))}
        </div>
      </section>
      {/* recent works section */}
      <RecentWorks />
      {/* categories of home interior */}
      <WorksCategory />
      {/* why to choose */}
      <section className="relative w-[100vw] h-auto mx-auto bg-primary-btn py-10 md:py-20">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-6xl font-lora text-primary-bg capitalize">
          why to choose us
        </h2>
        <p className="w-3/4 md:w-1/2 mt-4 mx-auto text-center text-md sm:text-lg lg:text-xl text-primary-bg">
          Choose us for unparalleled design expertise, personalized service, and
          innovative solutions that transform your vision into reality. Our
          commitment to quality and attention to detail ensures a perfect home
          makeover.
        </p>
        <div className="w-full lg:w-1/2 mx-auto flex flex-wrap justify-center items-center font-semibold capitalize text-lg sm:text-xl lg:text-2xl">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-y-3 sm:gap-y-5 p-7 sm:p-10 text-center"
            >
              <Image
                src={reason.img_url}
                alt="icons"
                width={100}
                height={100}
                className="size-[2.5rem] sm:size-[3.5rem] md:size-[5rem]"
              />
              {reason.text}
            </div>
          ))}
        </div>
      </section>
      {/* how we work section */}
      <section className="relative w-[100vw] h-auto mx-auto">
        <div
          style={{
            backgroundImage: `linear-gradient(90deg,rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6),rgba(0,0,0,0.6)),url(${map.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "16rem",
            backgroundPosition: "fixed",
          }}
          className="px-3 sm:px-4 lg:px-6 flex flex-col justify-center items-center capitalize font-montserrat text-primary-bg"
        >
          <div className="w-full text-center flex justify-evenly items-center text-xl sm:text-2xl lg:text-3xl font-semibold">
            <h1>
              আপনার স্বপ্ন, <br />
              আমাদের গ্যারান্টি
            </h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl">
              your dream, <br />
              our promise
            </h1>
            <h1>
              তোমাৰ সপোন,
              <br /> আমাৰ প্ৰতিশ্ৰুতি
            </h1>
          </div>
          <Button title="contact now" className="w-[10rem] mt-6 sm:mt-8" />
        </div>
        <WorkProcess />
        <Review />
      </section>
    </>
  );
}
