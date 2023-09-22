"use client";

import { useState} from "react";

import Image from "next/image";
import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import car from "../images/icon-cart.svg";
import user from "../images/image-avatar.png";
import close from "../images/icon-close.svg";
import thumbnail from "../images/image-product-1-thumbnail.jpg";
import delet from "../images/icon-delete.svg";

const Navbar = ({ addCart, setAddCart }) => {
  const [toggle, setToggle] = useState(false);
  const [cartToggle, setCartToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
    setCartToggle(false);
    if (toggle == true) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
  };

  const handleCartToggle = () => {
    setCartToggle(!cartToggle);
  };

  const handleDelete = () => {
    setAddCart(0);
  };

  return (
    <>
      <section className="border border-botton border-solid border-gray-200">
        <nav className="  h-[10vh] relative z-10 flex flex-row justify-between items-center  my-container bg-white ">
          <div className="flex flex-row gap-3 items-center ">
            <button onClick={handleClick} className=" h-[25px] md:hidden  ">
              <Image className="w-auto h-5" src={menu} alt="img" />
            </button>
            <a className="" href="#">
              <Image clasname="w-auto h-full" src={logo} alt="img" />
            </a>

            <ul className=" hidden xl:ms-[50px]  md:flex flex-row md:gap-4 xl:gap-9 ">
              <li className="">
                <a href="#"> Collection </a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#"> Women</a>
              </li>
              <li>
                <a href="#"> About</a>
              </li>
              <li>
                <a href="#"> Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-row gap-5 xl:gap-10 items-center ">
            <div className="relative">
              {addCart !== 0 && (
                <span className="bg-orange text-white absolute top-[-5px] right-[-5px] w-[20px] h-[15px] rounded-full text-[10px] text-center ">
                  {addCart}
                </span>
              )}
              <Image
                onClick={handleCartToggle}
                className="w-[25px] h-[25px] "
                src={car}
                alt="img"
              />
            </div>
            <Image
              className="w-[25px] h-[25px] md:w-[40px] md:h-[40px]   "
              src={user}
              alt="img"
            />
          </div>
          <div
            className={` ${
              toggle ? "left-0 " : " left-[-200vw] "
            } duration-500 bg-darkContainer absolute top-0 transition-all  h-[100vh] w-full `}
          >
            <div className="bg-white h-[100vh] w-[60vw] px-[30px] py-[30px]">
              <button onClick={handleClick} className="">
                <Image src={close} alt="close" />
              </button>

              <ul className="flex flex-col gap-3 font-bold">
                <li className="mt-[50px]">
                  <a href="#"> Collection </a>
                </li>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#"> Women</a>
                </li>
                <li>
                  <a href="#"> About</a>
                </li>
                <li>
                  <a href="#"> Contact</a>
                </li>
              </ul>
            </div>
          </div>
          {cartToggle && (
            <div className=" h-[230px] w-[95%] md:w-[400px] absolute top-[90px] left-2  rounded-xl shadow-2xl bg-white block md:hidden ">
              <h1 className="font-bold  p-[20px]">Cart</h1>
              <hr className="hr" />
              <div className="flex flex-col justify-center   h-auto">
                {addCart ? (
                  <div className="flex flex-col p-[20px] gap-5  w-full">
                    <div className="flex flex-row justify-between items-center">
                      <Image
                        className="w-[50px] h-[50px] rounded-lg"
                        src={thumbnail}
                        alt="thumbnail"
                      />
                      <p>
                        {" "}
                        Fall Limited Edition Sneakers <br />
                        $125.00 x {addCart} ={" "}
                        <span className="font-bold"> ${addCart * 125}.00</span>
                      </p>
                      <Image
                        onClick={handleDelete}
                        className="w-[15px] h-[15px]"
                        src={delet}
                        alt="delet"
                      />
                    </div>
                    <button className="text-white bg-orange rounded-lg h-[40px] hover:bg-hoverOrange">
                      CheckOut
                    </button>
                  </div>
                ) : (
                  <div>
                    <h1 className="text-darkGray font-bold flex justify-center items-center h-[150px] ">
                      Your cart is empty
                    </h1>
                  </div>
                )}
              </div>
            </div>
          )}
          {cartToggle && (
            <div className=" h-[230px] w-[95%] md:w-[400px] absolute top-[90px] right-0  rounded-xl shadow-2xl bg-white hidden md:block ">
              <h1 className="font-bold  p-[20px]">Cart</h1>
              <hr className="hr" />
              <div className="flex flex-col justify-center   h-auto">
                {addCart ? (
                  <div className="flex flex-col p-[20px] gap-5  w-full">
                    <div className="flex flex-row justify-between items-center">
                      <Image
                        className="w-[50px] h-[50px] rounded-lg"
                        src={thumbnail}
                        alt="thumbnail"
                      />
                      <p>
                        {" "}
                        Fall Limited Edition Sneakers <br />
                        $125.00 x {addCart} ={" "}
                        <span className="font-bold"> ${addCart * 125}.00</span>
                      </p>
                      <Image
                        onClick={handleDelete}
                        className="w-[15px] h-[15px]"
                        src={delet}
                        alt="delet"
                      />
                    </div>
                    <button className="text-white bg-orange rounded-lg h-[40px] hover:bg-hoverOrange">
                      CheckOut
                    </button>
                  </div>
                ) : (
                  <div>
                    <h1 className="text-darkGray font-bold flex justify-center items-center h-[150px] ">
                      Your cart is empty
                    </h1>
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>
      </section>
    </>
  );
};

export default Navbar;
