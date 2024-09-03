import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaJava } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import {
  RiJavascriptFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";

function Technologies() {

   useGSAP(() => {
     gsap.to(".animate", {
       duration: 2,
       y: 10,
       repeat: -1,
       yoyo: true,
       stagger: 0.3
     });
     gsap.to(".animate2", {
       duration: 2,
       y: 10,
       repeat: -1,
       yoyo: true,
       stagger: 0.4
     });
   }); 

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-10 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap justify-center items-center gap-4 py-4 pb-6">
        <div className="animate rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-5xl text-red-400" />
        </div>
        <div className="animate2 rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoSpringBoot className="text-5xl text-green-500" />
        </div>
        <div className="animate rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptFill className="text-5xl text-yellow-500" />
        </div>
        <div className="animate2 rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-5xl text-cyan-400" />
        </div>
        <div className="animate rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-5xl text-green-500" />
        </div>
        <div className="animate2 rounded-2xl border-4 border-neutral-800 p-4">
          <GrMysql className="text-5xl text-slate-400" />
        </div>
        <div className="animate rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-5xl text-cyan-400" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
