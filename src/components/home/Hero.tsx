import Image from "next/image";
import React, { useState } from "react";
import heroImg2 from "../../../public/assets/images/heroImg2.jpg";
import heroImg from "../../../public/assets/images/heroImg.jpg";
import CarouselContainer from "../carousel/CarouselLayout";
import SliderDiv from "../carousel/SliderDiv";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh]">
      <CarouselContainer>
        <SliderDiv index={0}>
          <div
            style={{
              backgroundImage: `url(${heroImg.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "100vh",
            }}
          ></div>
        </SliderDiv>
        <SliderDiv index={1}>
          <div
            style={{
              backgroundImage: `url(${heroImg2.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "100vh",
            }}
          ></div>
        </SliderDiv>
        <SliderDiv index={2}>
          <div
            style={{
              backgroundImage: `url(${heroImg.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "100vh",
            }}
          ></div>
        </SliderDiv>
        <SliderDiv index={3}>
          <div
            style={{
              backgroundImage: `url(${heroImg2.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "100vh",
            }}
          ></div>
        </SliderDiv>
      </CarouselContainer>
    </div>
  );
};

export default Hero;
