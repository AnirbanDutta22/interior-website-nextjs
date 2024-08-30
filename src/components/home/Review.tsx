import React from "react";
import Button, { Button2 } from "../Button";
import CarouselContainer from "../carousel/CarouselLayout";
import SliderDiv from "../carousel/SliderDiv";
import reviews from "../../../public/data/reviews.json";

const Review = () => {
  return (
    <section className="relative w-[100vw] h-auto mx-auto my-10 py-10 md:py-20 bg-slate-200">
      <div className="w-[80%] mx-auto flex flex-col sm:flex-row justify-evenly items-center">
        <div className="w-full sm:w-1/2">
          <h2 className="sectionHeading text-left">reviews</h2>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-montserrat capitalize">
            Over 1000 designs completed for{" "}
            <span className="text-primary-btn font-semibold">
              happy clients.
            </span>
          </h1>
          <Button2 title="all reviews" className="mt-5 sm:mt-8" />
        </div>
        <div className="w-full sm:w-2/3 h-[28rem] lg:h-[35rem]">
          <CarouselContainer
            indicatorsVisible
            autoplay={true}
            className="h-[100%]"
          >
            {reviews.map((review, index) => (
              <SliderDiv key={index} index={index}>
                <p className="text-lg sm:text-xl font-lora text-black">
                  <span className="quote">&ldquo;</span>
                  {review.text}
                  <span className="quote">&rdquo;</span>
                </p>
                <video
                  width="100%"
                  height="100%"
                  controls
                  className="mt-4 md:mt-6"
                >
                  <source src={review.video_link} type="video/mp4" />
                  <source src={review.video_link} type="video/ogg" />
                  Your browser does not support the video tag.
                </video>
              </SliderDiv>
            ))}
          </CarouselContainer>
        </div>
      </div>
    </section>
  );
};

export default Review;
