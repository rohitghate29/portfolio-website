import React, { useRef } from "react";
import about from "./../assets/about.jpg";
import { ABOUT_TEXT } from "../constants/data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GiphyComponent from "./GiphyComponent";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(() => {
    gsap.from(".about", {
      opacity: 0,
      duration: 1,
    });

    gsap.from("#heading", {
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: "#heading",
        scroller: "body",
      },
    });

    gsap.from("#aboutContentLeft", {
      x: -100,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: "#aboutContentLeft",
        scroller: "body",
        top: "20%",
      },
    });
    gsap.from(".aboutContentRight", {
      x: 100,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: ".aboutContentRight",
        scroller: "body",
        top: "20%",
      },
    });
    gsap.to("#aboutContentLeft", {
      duration: 2,
      y: 10,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <div className="about border-b border-neutral-900 pb-4">
      <h2 className="my-14 text-center text-4xl" id="heading">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <div
              className="w-[300px] rounded-md  overflow-hidden"
              id="aboutContentLeft"
            >
              <GiphyComponent />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center lg:justify-start">
            <p className="aboutContentRight my-2 max-w-xl tracking-tight lg:leading-8 font-light py-4">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
