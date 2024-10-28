import Contact from "@/app/components/Contact";
import Info from "@/app/components/Info";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="lg:pt-40 md:pt-20 pt-28 lg:px-48 md:px-20 sm: px-10">
      <div className="flex items-center justify-between lg:flex-row flex-col gap-x-20 gap-y-8">
        <div className="flex flex-col gap-y-4 md:gap-y-8 lg:w-1/2 text-center lg:text-left">
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Hi, I&apos;m Muhammad Sarim, a Front-End Developer.
          </h1>
          <h2 className="text-xs md:text-sm lg:w-96 text-justify leading-relaxed">
            As a front-end developer, I focus on bringing digital ideas to life
            by crafting user-friendly, visually appealing, and responsive
            interfaces. My work revolves around creating seamless experiences
            for users, combining design principles with technical skills in
            HTML, CSS, JavaScript, and frameworks like React and Next.js.
          </h2>
          <h2 className="text-xs md:text-sm lg:w-96 text-justify leading-relaxed">
            I enjoy designing interactive components and optimizing website
            performance, ensuring that each application not only looks good but
            also provides a smooth user journey across all devices.
          </h2>
        </div>
        <div className="flex justify-center lg:w-1/2">
          <Image
            width={1000}
            height={1000}
            src="/sarim3.jpg"
            alt="Sarim"
            className="h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96 object-cover rounded-md shadow-md"
          />
        </div>
      </div>
      <Info />
      <Contact />
    </div>
  );
}

export default Page;
