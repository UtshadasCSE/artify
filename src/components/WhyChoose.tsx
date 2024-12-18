"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
// import Image from "next/image";

const content = [
  {
    title: "Melodies of the Soul",
    description:
      "A collection of soulful tunes that resonate with deep emotions and inspire introspection. Perfect for relaxing and unwinding after a long day.",
  },
  {
    title: "Symphony of the Seasons",
    description:
      "Experience the magic of changing seasons through orchestral compositions that capture the essence of spring, summer, autumn, and winter.",
  },
  {
    title: "Rhythms of Nature",
    description:
      "Immerse yourself in the sounds of nature intertwined with ambient beats, creating a perfect harmony of music and the environment.",
  },
  {
    title: "Echoes of Eternity",
    description:
      "Dive into a realm of timeless soundscapes, blending electronic and acoustic elements for a transcendent musical experience.",
  },
];

const WhyChoose = () => {
  return (
    <div>
      <div className="">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default WhyChoose;
