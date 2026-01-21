"use client";

import { useEffect, useState } from "react";

const images = [
  "/hero/hero2.jpg",
  "/hero/hero.jpg",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    console.log("current slide:", current);
  }, [current]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <img
        src={images[current]}
        alt="hero"
        className="w-full h-full"
        style={{ objectFit: "fill" }}
      />
    </div>
  );
}
