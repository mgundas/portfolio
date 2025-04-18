"use client";
import Image from "next/image";
import db from "../../database/database";
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className="relative">
      <div className="hero-container">
        <div className="flex-2/4 grid gap-2 text-2xl">
          <h1 className="text-indigo-300 font-light">Hello! I am</h1>
          <h1 className="font-medium">{db.profile.name}</h1>
          <p className="text-cyan-400 font-light">{db.profile.title}</p>
          <p className="font-light">{db.profile.description}</p>
          <a
            href="/resume.pdf"
            className="get-resume-button justify-self-center sm:justify-self-auto"
          >
            Get my resume
          </a>
        </div>
        <div className="flex-1/4 p-5 flex items-center my-10 md:my-0 justify-center relative">
          <div className="relative ml-0 flex items-center justify-center">
            <div className="-rotate-10 border-3 border-cyan-400 bg-[#171717] relative overflow-hidden">
              <Image src={db.profile.image} alt={db.profile.name} className=""  width={450} height={450} />
            </div>
            <div className="absolute h-full w-full bg-cyan-400 -rotate-10 translate-x-5 translate-y-4 -z-2"></div>
            <div className="absolute blur-[6rem] opacity-30 h-full w-full bg-cyan-400 -rotate-10 translate-x-3 translate-y-2 -z-2"></div>
          </div>
        </div>
      </div>
      <div className="bgr-circle bgr-circle-bl bg-cyan-400/60"></div>
      <Link to="about" smooth={true} duration={500} className="absolute hidden lg:flex items-center justify-center w-full bottom-[15%] cursor-pointer">
        <i className="fa-solid fa-mouse text-3xl text-cyan-400"></i>
      </Link>
    </div>
  );
};

export default Hero;
