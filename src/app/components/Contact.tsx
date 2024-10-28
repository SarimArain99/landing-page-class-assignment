import React from "react";

function Contact() {
  return (
    <>
      <div className="bg-black h-[2px] my-10"></div>
      <div className="flex items-center justify-between md:flex-row flex-col gap-y-3 my-5">
        <h2 className="sm:w-[250px] md:w-[250px] lg:w-[347px] lg:text-2xl md:text-xl sm:text-lg text-sm font-semibold text-justify">
          I am thrilled to answer to your next project
        </h2>
        <div className="flex flex-col gap-y-2 items-center">
          <h2 className="lg:text-2xl md:text-xl sm:text-lg text-sm font-medium">
            sarimarain99@gmail.com
          </h2>
          <p className="text-xs">View Resume</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
