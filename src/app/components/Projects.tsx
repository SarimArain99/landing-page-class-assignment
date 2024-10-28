import React from "react";

function Projects() {
  return (
    <div className="flex flex-col gap-y-16">
      <div className="flex lg:flex-row flex-col items-center justify-between pb-10 gap-y-8 gap-x-5">
        <span className="flex flex-col gap-y-4 text-sm lg:text-left text-center">
          <h3 className="font-semibold uppercase">01 / EcoShop</h3>
          <p className="lg:w-96 font-serif font-semibold">
            EcoShop is a web app that allows users to browse and purchase
            eco-friendly products.
          </p>
          <p className="lg:w-96">
            The platform includes a product listing page, search and filter
            functionality for sustainable categories (e.g., recycled, organic),
            and a real-time shopping cart.
          </p>
        </span>
        <img
          src="/EcoShop.jpg"
          alt="EcoShop"
          className="h-60 w-72 object-cover"
        />
      </div>

      <div className="h-[2px] bg-black"></div>

      <div className="flex lg:flex-row flex-col items-center justify-between pb-10 gap-y-8 gap-x-5">
        <span className="flex flex-col gap-y-4 text-sm lg:text-left text-center">
          <h3 className="font-semibold uppercase">02 / FitLife</h3>
          <p className="lg:w-96 font-serif font-semibold">
            FitLife is a health dashboard where users can track their fitness
            goals, log daily workouts, monitor nutrition, and visualize progress
            with charts and graphs.
          </p>
          <p className="lg:w-96">
            Using React, Tailwind CSS, and Chart.js, FitLife delivers a
            user-friendly, responsive UI with a focus on personalization.
          </p>
        </span>
        <img
          src="/FitLife.jpg"
          alt="FitLife"
          className="h-60 w-72 object-cover"
        />
      </div>
      <div className="h-[2px] bg-black"></div>

      {/* Project 3 */}
      <div className="flex lg:flex-row flex-col items-center justify-between pb-10 gap-y-8 gap-x-5">
        <span className="flex flex-col gap-y-4 text-sm lg:text-left text-center">
          <h3 className="font-semibold uppercase">03 / ArtGallery</h3>
          <p className="lg:w-96 font-serif font-semibold">
            ArtGallery is a digital platform for artists to display their
            artwork in virtual galleries.
          </p>
          <p className="lg:w-96">
            Users can browse different collections, view artwork details, and
            even &qout;like&quot; or comment on pieces. Using Next.js and Framer Motion
            for animations.
          </p>
        </span>
        <img
          src="/ArtGallery.jpg"
          alt="ArtGallery"
          className="h-60 w-72 object-cover"
        />
      </div>
      <div className="h-[2px] bg-black"></div>
      {/* Project 4 */}
      <div className="flex lg:flex-row flex-col items-center justify-between pb-10 gap-y-8 gap-x-5">
        <span className="flex flex-col gap-y-4 text-sm lg:text-left text-center">
          <h3 className="font-semibold uppercase">04 / TravelEase</h3>
          <p className="lg:w-96 font-serif font-semibold">
            TravelEase is a trip planner that allows users to explore travel
            destinations, save their favorite spots, and generate custom
            itineraries.
          </p>
          <p className="lg:w-96">
            Using APIs, like Google Maps and OpenWeather, TravelEase offers
            real-time maps, weather forecasts, and recommendations for
            accommodations, dining, and activities.
          </p>
        </span>
        <img
          src="/TravelEase.jpg"
          alt="TravelEase"
          className="h-60 w-72 object-cover"
        />
      </div>
      <div className="h-[2px] bg-black"></div>
    </div>
  );
}

export default Projects;
