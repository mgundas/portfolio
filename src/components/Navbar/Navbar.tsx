"use client";
import { useRef } from "react";
import db from "../../database/database";

const Navbar = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  const handleClick = () => {
    menuRef.current?.classList.toggle("translate-x-full");
    overlayRef.current?.classList.toggle("hidden");
  };

  return (
    <>
      <div className="sticky sm:relative top-0 z-50 h-16 flex items-center justify-between p-5 bg-gradient-to-b from-[#171717] from-20% to-[#00000000]">
        <h1 className="text-white text-2xl ml-4">{db.profile.name}</h1>
        <ul className="gap-4 text-xl items-center hidden lg:flex">
          <li className="inline-block text-white mr-4">About</li>
          <li className="inline-block text-white mr-4">Skills</li>
          <li className="inline-block text-white mr-4">Projects</li>
          <li className="inline-block text-white mr-4">Contact</li>
          <li className="inline-block text-white mr-4">Resume</li>
        </ul>
        <button
          ref={buttonRef}
          onClick={handleClick}
          className="flex items-center justify-center p-4 lg:hidden cursor-pointer"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div
        ref={menuRef}
        className="h-dvh w-3/5 md:w-2/5 transition-transform translate-x-full bg-black/20 border-l-2 border-black/30 backdrop-blur-sm fixed z-52 top-0 right-0"
      >
        <div className="flex flex-col justify-center gap-2 py-5">
          <h3 className="text-xl p-2 px-4 border-y-2 border-black/30">Social Links</h3>
          <a
            href={db.socials.email}
            target="blank"
            className="sidebar-link"
          >
            <i className="fa-regular fa-envelope icon"></i>&nbsp;&nbsp;Email
          </a>
          <a
            href={db.socials.linkedin}
            target="blank"
            className="sidebar-link"
          >
            <i className="fa-brands fa-linkedin icon"></i>&nbsp;&nbsp;LinkedIn
          </a>
          <a
            href={db.socials.github}
            target="blank"
            className="sidebar-link"
          >
            <i className="fa-brands fa-github icon"></i>&nbsp;&nbsp;GitHub
          </a>
        </div>
      </div>
      <div
        ref={overlayRef}
        onClick={handleClick}
        className="h-dvh w-dvw fixed top-0 left-0 bg-black/25 z-51 hidden"
      ></div>
    </>
  );
};

export default Navbar;
