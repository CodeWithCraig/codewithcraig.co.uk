import React from "react";

export function Hero() {
  return (
    <section className="hero bg-gray-200 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">
          Revolutionize Your Business with Our Startup
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          dignissim, tellus at ultrices tincidunt, orci turpis vulputate justo.
        </p>
        <a
          href="/"
          className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
