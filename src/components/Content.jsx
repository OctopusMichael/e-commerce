"use client";
import React, { useState } from "react";
import Image from "next/image";
import cartWhite from "../images/cartWhite.svg";
import Carousel from "./Carousel";
import plus from "../images/icon-plus.svg";
import minus from "../images/icon-minus.svg";
import Modal from "./Modal";

const slider = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];

const Content = ({ setAddCart, openModal, toggleModal }) => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };
  const decrement = () => {
    if (counter > 0) setCounter((prevState) => prevState - 1);
  };

  const handleAddCart = () => {
    setAddCart(counter);
  };

  return (
    <section className="z-0 flex flex-col  items-center  xl:flex-row   mt-[-10px]   lg:mt-[100px]  md:my-container   ">
      <Carousel>
        {slider.map((element, index) => (
          <Image
            className="w-full h-full rounded-xl"
            width={1440}
            height={1000}
            src={element}
            onClick={openModal}
            key={index}
            alt="test"
            priority="true"
          />
        ))}
      </Carousel>

      <div className="md:w-1/2  md:text-start flex flex-col gap-5 md:gap-8 px-[30px] py-[30px]">
        <p className="uppercase text-orange font-bold ">Sneaker Company</p>
        <h1 className="text-[30px] md:text-[40px] font-bold leading-8 md:leading-10">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-darkGray">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="flex  justify-between  items-center md:flex-col md:items-start ">
          <div className="flex gap-5 items-center">
            <h1 className="font-bold md:text-[30px]">$125.00</h1>
            <h2 className="bg-paleOrange text-orange font-bold rounded-lg px-2 md:text-[20px]">
              50%
            </h2>
          </div>
          <div>
            <h1 className="text-darkGray line-throug  md:text-[20px]">
              $250.00
            </h1>
          </div>
        </div>
        {/* carrito  */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-5">
          <div className="flex flex-row  justify-between items-center text-orange font-bold text-[24px]  h-[50px] bg-lightGray rounded-xl ">
            <button
              onClick={decrement}
              className="  w-[50px] h-full hover:bg-darkGray  rounded-[12px_0px_0px_12px] flex justify-center items-center "
            >
              <Image
                className="w-auto h-auto"
                src={minus}
                width={500}
                height={500}
                alt="operator"
              />
            </button>
            <h1 className="text-black text-center text-[20px] md:w-[30px]">
              {counter}
            </h1>
            <button
              onClick={increment}
              className=" w-[50px] h-full hover:bg-darkGray  rounded-[0px_12px_12px_0px] flex justify-center items-center "
            >
              <Image
                className=" w-auto h-auto"
                src={plus}
                width={500}
                height={500}
                alt="operator"
              />
            </button>
          </div>
          <button
            onClick={handleAddCart}
            className="hover:bg-hoverOrange w-full rounded-xl h-[50px] bg-orange text-white font-bold text-center flex  flex-row justify-center items-center gap-2"
          >
            <Image
              className="w-auto h-auto    "
              src={cartWhite}
              alt="img-button-add"
            />
            Add to Cart
          </button>
        </div>
      </div>

      {toggleModal && (
        <Modal openModal={openModal}>
          <Carousel>
            {slider.map((element) => (
              <Image
                className="w-full h-full rounded-xl"
                width={1440}
                height={10000}
                src={element}
                alt="test"
              />
            ))}
          </Carousel>
        </Modal>
      )}
    </section>
  );
};

export default Content;
