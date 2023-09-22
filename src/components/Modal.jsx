"use client";

import Image from "next/image";
import close from "../images/icon-close.svg";

const Modal = ({ openModal, children }) => {
  return (
    <>
      {openModal && (
        <div className=" flex justify-center items-center fixed top-0  left-0 h-[100vh] bg-darkContainer z-50 w-[100vw]  flex-col">
          <div className=" flex flex-col">
            <button className="self-end mb-5 " onClick={openModal}>
              <Image
                className="hover:text-orange"
                src={close}
                alt="close"
                onClick={openModal}
              />
            </button>

            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
