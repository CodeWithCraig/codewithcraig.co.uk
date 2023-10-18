import React from "react";

export function Header() {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-semibold">
          Your Startup
        </a>
        <nav>
          <a href="/" className="mr-4">
            Home
          </a>
          <a href="/" className="mr-4">
            Features
          </a>
          <a href="/" className="mr-4">
            Pricing
          </a>
          <a href="/" className="mr-4">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
