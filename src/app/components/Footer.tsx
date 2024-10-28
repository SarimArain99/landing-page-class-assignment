import React from "react";

function Footer() {
  return (
    <footer className="bg-[#f3f3f3] w-full sm:py-7 py-3 flex sm:flex-row flex-col justify-between items-center gap-x-2 lg:px-48 md:px-20 sm: px-10">
      <h2 className="text-blue-600 font-semibold text-lg">
        Muhammad Sarim-2024
      </h2>
      <div className="flex items-center gap-x-5 text-lg">
        <p>Artstation</p>
        <p>LinkedIn</p>
        <p>Twitter</p>
      </div>
    </footer>
  );
}

export default Footer;
