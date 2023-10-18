import React from "react";

export function KeyFeatures() {
  return (
    <section className="features bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="flex justify-center items-start">
          <div className="w-1/3 p-4">
            <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              dignissim, tellus at ultrices tincidunt.
            </p>
          </div>
          <div className="w-1/3 p-4">
            <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              dignissim, tellus at ultrices tincidunt.
            </p>
          </div>
          <div className="w-1/3 p-4">
            <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              dignissim, tellus at ultrices tincidunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
