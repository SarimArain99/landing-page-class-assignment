import React from "react";

function Info() {
  return (
    <>
      <div className=" flex flex-col gap-y-10 mt-10 w-[250px] md:w-[500px]">
        <div className="flex items-center gap-x-10">
          <h2 className="font-bold text-sm">Main Technologies: </h2>
          <p className="uppercase font-semibold text-xs">
            html, css, JavaScript / TypeScript,
            <br /> Tailwind css, React.js, next.js, node.js
          </p>
        </div>
        <div className="flex items-center sm:gap-x-24 gap-x-[90px] md:gap-x-20">
          <h2 className="font-bold text-sm">Main Skills: </h2>
          <p className="uppercase font-semibold text-xs">
            html, css, JavaScript / TypeScript,
            <br /> Tailwind css, React.js, next.js, node.js
          </p>
        </div>
      </div>
    </>
  );
}

export default Info;
