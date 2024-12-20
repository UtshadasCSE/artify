import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const Hero = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the ART of music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Artify is an innovative digital platform designed to revolutionize the
          art world. It serves as a virtual exhibition space where artists can
          showcase their creativity, and art enthusiasts can immerse themselves
          in a world of stunning visual storytelling.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button className="bg-black">Explore Courses</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
