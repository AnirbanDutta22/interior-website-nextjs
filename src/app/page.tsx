import Hero from "@/components/home/Hero";
import Image from "next/image";

import who_we from "../../public/assets/images/who_we.jpg";
import stats from "../../public/data/stats.json";
import Button from "@/components/Button";
import RecentWorks from "@/components/works/RecentWorks";

export default function Home() {
  return (
    <>
      <Hero />
      {/* who we are */}
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
                stat.title === "experience" && "scale-110 md:scale-150"
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
      <RecentWorks />
    </>
  );
}
