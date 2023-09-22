"use client";

import React, { useState } from "react";
import Image from "next/image";
import iconPrevious from "../images/icon-previous.svg";
import iconNext from "../images/icon-next.svg";

const thumb = [
  "./images/image-product-1-thumbnail.jpg",
  "./images/image-product-2-thumbnail.jpg",
  "./images/image-product-3-thumbnail.jpg",
  "./images/image-product-4-thumbnail.jpg",
];

const Carousel = ({ children: slider }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current) => (current === 0 ? slider.length - 1 : current - 1));
  };
  const next = () => {
    setCurrent((current) =>
      current === slider.length - 1 ? 0 : current + 1
    );
  };

  const handleCLick = (id) => {
    setCurrent(id);
  };

  return (
    <section className=" md:w-1/2  flex flex-col gap-5  ">
      <div className=" overflow-hidden relative  flex flex-row  md:w-[450px] md:h-[450px] ">
        <div
          className="flex transition-transform ease-out duration-500 "
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slider}
        </div>

        <div
          className={` md:hidden absolute  inset-0 flex flex-row  justify-between items-center px-3 `}
        >
          <button
            onClick={prev}
            className="rounded-full  flex  justify-center items-center w-[40px] h-[40px] bg-white  "
          >
            <Image
              className="w-auto h-[14px] me-[2px]"
              src={iconPrevious}
              alt="btn-arrow-right"
            />
          </button>

          <button
            onClick={next}
            className=" rounded-full flex justify-center items-center w-[40px] h-[40px] bg-white"
          >
            <Image
              className="w-auto h-[14px] ms-[2px]"
              src={iconNext}
              alt="btn-arrow-left"
            />
          </button>
        </div>
      </div>
      <div className=" hidden  md:flex md:flex-row justify-between md:w-[450px]  ">
        {thumb.map((element, index) => (
          <Image
            key={index}
            onClick={() => handleCLick(index)}
            className="w-[80px] h-[80px]  rounded-xl cursor-pointer  border-solid border-2 hover:border-orange  hover:opacity-[80%] "
            width={1440}
            height={10000}
            src={element}
            alt="test"
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
