"use client";
import React, { useState } from "react";
import Content from "@/components/Content";
import Navbar from "../components/Navbar";


export default function Home() {
  const [addCart, setAddCart] = useState(0);
  const [toggleModal, setToggleModal] = useState(false);


  const openModal = () =>{
    setToggleModal(!toggleModal)
  }



  return (
    <>
      <header>
        <Navbar addCart={addCart} setAddCart={setAddCart} />
      </header>
      <main >
        <Content setAddCart={setAddCart} openModal={openModal} toggleModal={toggleModal}  /> 
       
      </main>

    </>
  );
}
