"use client";
import CarouselContainer from "../carousel/CarouselLayout";
import SliderDiv from "../carousel/SliderDiv";
import Button from "../Button";
import slides from "../../../public/data/slider.json";
import { FaBots, FaPhone, FaRocketchat, FaWhatsapp } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative w-full h-[35rem] sm:h-[45rem] lg:h-[100vh]">
      {/* carousel slider  */}
      <CarouselContainer arrowsVisible indicatorsVisible autoplay={false}>
        {slides.map((slide, index) => (
          <SliderDiv key={index} index={index}>
            <div
              style={{
                // backgroundImage: `url(${heroImg.src})`,
                backgroundImage: `linear-gradient(90deg,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.6),rgba(0,0,0,0.1)),url(${slide.img_url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100%",
                backgroundPosition: "fixed",
              }}
              className="relative"
            >
              <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-6 backdrop-blur-sm flex flex-col justify-center items-center gap-y-6 text-center w-2/3">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-montserrat font-bold text-primary-bg">
                  {slide.head}
                </h1>
                <h3 className="text-md sm:text-lg lg:text-2xl font-serif text-primary-bg">
                  <span className={slide.sub_head_color}>{slide.sub_head}</span>
                </h3>
                <Button
                  title={slide.button_title}
                  className={`px-6 sm:px-8 lg:px-10 py-2 sm:py-2.5 lg:py-3 text-lg lg:text-xl font-normal ${slide.button_color}`}
                />
              </div>
            </div>
          </SliderDiv>
        ))}
      </CarouselContainer>
    </div>
  );
};

export default Hero;
