import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900">
        <div class="fixed -z-10 h-screen w-screen bg-slate-950">
          <div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
