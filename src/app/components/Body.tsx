import React from "react";
import Projects from "./Projects";

function Body() {
  return (
    <div className="lg:pt-56 md:pt-40 pt-28 lg:px-48 md:px-20 px-10">
      <div className="flex flex-col md:flex-row items-center md:gap-x-36 gap-y-6 justify-between">
        <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl text-center md:text-left">
          Hello, I'm Muhammad Sarim
        </h2>
        <p className="font-semibold lg:text-2xl md:text-xl text-gray-500 md:mt-5 mt-3 text-center md:text-left">
          A senior-year design student specializing in Front-End Development
        </p>
      </div>
      <div className="flex justify-start my-14">
        <svg
          className="h-10 w-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
      <Projects />
      
    </div>
  );
}

export default Body;
