import React from "react";
import { PROJECTS } from "./../constants/data";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { FaLink } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    gsap.from("#projects", {
      opacity: 0,
      x: -160,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#projects",
        scroller: "body",
        start: "top 80%",
        end: "top 10%",
        scrub: 2,
      },
    });
  });
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="text-4xl text-center my-10">Projects</h2>
      <div>
        {PROJECTS.map((item, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            id="projects"
          >
            <div className="w-full lg:w-1/4">
              <a href={item.link} target="_blank">
                <img
                  src={item.image}
                  height={250}
                  width={250}
                  alt={item.title}
                  className="mb-6 rounded"
                />
              </a>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <a href={item.link} target="_blank">
                <span className="flex items-center mb-2 font-semibold">
                  {item.title} <FaLink className="ml-2" />
                </span>
              </a>
              <p className="mb-4 text-neutral-400">{item.description}</p>
              {item.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-3 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
