"use client";

import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { DefaultArrows } from "./Arrows";
import { DefaultIndicators } from "./Indicators";
import { useDispatch, useSelector } from "react-redux";
import {
  nextSlide,
  prevSlide,
  jumpToSlide,
  setTotalSlide,
} from "../../app/redux/features/slideCounterSlice";
import { RootState } from "@/app/redux/store";

export default function CarouselContainer({
  children,
}: {
  children?: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const slideNo = useSelector(
    (state: RootState) => state.sliderCounter.slideNo
  );
  const [totalSlides, setTotalSlides] = useState(children?.length || null);

  useEffect(() => {
    dispatch(setTotalSlide(totalSlides));
  }, []);

  useEffect(() => {
    const handleIntervalFunction = () => {
      dispatch(nextSlide());
    };

    const timeoutId = setInterval(handleIntervalFunction, 4000);

    // Cleanup function to clear timeout if the component unmounts
    return () => clearInterval(timeoutId);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section className="slider-container relative max-w-[100%] h-[20rem] sm:h-[28rem] lg:h-[100vh] overflow-hidden">
      {children}
      <DefaultArrows
        onRightHandleClick={() => dispatch(nextSlide())}
        onLeftHandleClick={() => dispatch(prevSlide())}
      />
      <DefaultIndicators
        slides={totalSlides}
        slideNo={slideNo}
        onIndicatorClick={(index) => dispatch(jumpToSlide(index))}
      />
    </section>
  );
}
