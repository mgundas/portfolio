"use client";
import { useRef } from "react";
import db from "../../database/database";
import SocialButton from "./buttons/SocialButton";
import NavbarLink from "./buttons/NavbarLink";
import { Link } from 'react-scroll';

const Navbar = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  
  const handleClick = () => {
    menuRef.current?.classList.toggle("translate-x-full");
    overlayRef.current?.classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden")
  };

  return (
    <>
      <div className="sticky sm:relative top-0 z-50 h-16 flex items-center justify-between p-5 lg:p-10 bg-gradient-to-b from-[#171717] from-20% to-[#00000000]">
        <h1 className="text-white text-2xl ml-4">{db.profile.name}</h1>
        <div className="gap-4 text-xl items-center hidden lg:flex">
          <NavbarLink href="skills">Skills</NavbarLink>
          <NavbarLink href="projects">Projects</NavbarLink>
          <NavbarLink href="contact">Contact</NavbarLink>
          <NavbarLink href="resume">Resume</NavbarLink>
        </div>
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
          <SocialButton href={db.socials.email} icon="fa-envelope">Email</SocialButton>
          <SocialButton href={db.socials.linkedin} icon="fa-linkedin">LinkedIn</SocialButton>
          <SocialButton href={db.socials.github} icon="fa-github">GitHub</SocialButton>
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
