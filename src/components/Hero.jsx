import React from "react";
import { HERO_CONTENT } from "../constants/data";
import profilePic from "./../assets/profilePic.jpg";
import demoPic from "./../assets/demopic-min.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  useGSAP(() => {
    gsap.from(".heroLeft", {
      x: -30,
      opacity: 0,
      duration: 0.5,
      delay: 1,
      stagger: 0.5
    });
    gsap.from(".heroImage", {
      opacity: 0,
      x: 80,
      duration: 0.8,
      delay: 2,
    });
    gsap.to(".heroImage", {
      duration: 2,
      y: 10,
      repeat: -1,
      yoyo: true,
    })
  });

  return (
    <div className="border-b border-neutral-900 pb-10 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="name heroLeft text-4xl font-thin pb-6 tracking-tight lg:mt-8 mt-5 lg:text-6xl">
              Rohit Ghate
            </h1>
            <span className="title heroLeft bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent text-2xl border border-slate-400 p-5 rounded-md hover:cursor-pointer">
              Full Stack Developer
            </span>
            <p className="summary heroLeft my-2 max-w-xl tracking-tight font-light py-4">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              className="heroImage rounded brightness-90"
              src={demoPic}
              width={350}
              alt="Rohit Ghate"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
