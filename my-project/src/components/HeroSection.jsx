import React from "react";

const HeroSection = () => {
  return (
    <div
      id="hero"
      className="h-screen w-full flex flex-col justify-center items-center text-white relative"
    >
      {/* Background Photo */}
      <div className="w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1736144287605-3919f585752c?q=80&w=2791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Your Full Photo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay and Floating Content */}
      <div className="absolute top-[50vh] left-0 w-full h-full flex flex-col justify-start items-start">
        <div className="bg-black/50 p-4 rounded-lg shadow-lg mt-6 ml-6">
          <h1 className="text-xl md:text-2xl font-bold animate-bounce">
            Sajan Kumar
          </h1>
        </div>
        <div className="bg-black/50 p-4 rounded-lg shadow-lg mt-6 ml-6">
          <h1 className="text-xl md:text-2xl font-bold animate-bounce">
            sajan99559@gmail.com
          </h1>
        </div>
      </div>
      
    </div>
  );
};

export default HeroSection;
