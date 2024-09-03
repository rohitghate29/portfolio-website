import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "./../assets/logo.png";

function Navbar() {
  useGSAP(() => {
    gsap.from(".logo", {
      y: -20,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    });

    gsap.from(".nav-links", {
      y: -20,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
  });

  return (
    <div className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} width={40} alt="Logo" className="logo mr-3" />
        <h1 className="logo text-2xl">RG</h1>
      </div>
      <div className="nav-links m-8 flex items-center justify-between gap-5 text-2xl">
        <a href="https://drive.google.com/file/d/1Oze1lx9-ZcRydavoBNY8wDCB6u0r82u2/view?usp=sharing" target="_blank">
          <button className="bg-neutral-900 px-2 py-1 rounded text-sm font-medium text-purple-700 hover:text-neutral-300 transition-all ease-linear">
            Resume
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/rohit-ghate-80566a239/"
          target="_blank"
        >
          <FaLinkedin className="nav-links" />
        </a>
        <a href="https://github.com/rohitghate29" target="_blank">
          <FaGithub className="nav-links" />
        </a>
        <a href="https://x.com/RohitGhate20" target="_blank">
          <FaXTwitter className="nav-links" />
        </a>
        <a
          href="https://www.instagram.com/im_rohitt_?igsh=djNxdzJoZjdyOXQx"
          target="_blank"
        >
          <FaInstagram className="nav-links" />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
