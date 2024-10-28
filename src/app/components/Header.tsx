"use client";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="bg-[#f3f3f3] fixed w-full py-7 lg:px-48 md:px-20 sm: px-10 flex justify-between items-center">
      <h1 className="font-extrabold text-3xl">sa.</h1>
      <div className="md:flex hidden gap-x-5 font-semibold mx-10">
        <Link href="#">Work</Link>
        <Link href="/about">About</Link>
        <Link href="#">Playground</Link>
        <Link href="#">Contact</Link>
      </div>
      <div className="md:hidden flex">
        <button className="relative group" onClick={() => setIsOpen(!isOpen)}>
          <div className="relative flex overflow-hidden items-center justify-center w-[50px] h-[50px] transform transition-all">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div
                className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${
                  isOpen ? "rotate-[42deg]" : ""
                }`}
              ></div>
              <div
                className={`bg-black h-[2px] w-1/2 rounded transform transition-all duration-300 ${
                  isOpen ? "-translate-x-10 opacity-0" : ""
                }`}
              ></div>
              <div
                className={`bg-black h-[2px] w-7 transform transition-all duration-300 origin-left ${
                  isOpen ? "-rotate-[42deg]" : ""
                }`}
              ></div>
            </div>
          </div>
        </button>
      </div>
      {isOpen && (
        <div className="bg-[#f3f3f3] h-screen w-[50%] fixed right-0 top-20 flex flex-col items-start p-5 space-y-5">
          <Link
            href="/"
            onClick={handleClick}
            className="text-lg font-semibold hover:text-gray-600"
          >
            Work
          </Link>
          <Link
            href="/about"
            onClick={handleClick}
            className="text-lg font-semibold hover:text-gray-600"
          >
            About
          </Link>
          <Link
            href="/"
            onClick={handleClick}
            className="text-lg font-semibold hover:text-gray-600"
          >
            Playground
          </Link>
          <Link
            href="/"
            onClick={handleClick}
            className="text-lg font-semibold hover:text-gray-600"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
