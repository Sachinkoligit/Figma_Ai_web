"use client";

import Image from "next/image";
import React, { useState } from "react";
import Features from "./Features";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Faq from "./Faq";
import { Menu, X } from "lucide-react";

export default function Homepage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full mx-auto relative font-sans">
      <div className="relative flex w-full">
        {/* Left Image */}
        <div
          className="relative flex-1 w-170 min-h-249
    sm:w-230 sm:min-h-150
    md:w-305.75 md:min-h-238.75"
        >
          <Image
            src="/left.png"
            alt="Left background"
            fill
            priority
            className="object-cover blur-[2px]"
          />
        </div>

        {/* Right Image */}
        <div
          className="relative w-170 min-h-249 flex-1
    sm:w-230 sm:min-h-150
    md:w-305.75 md:min-h-480.26"
        >
          <Image
            src="/right.png"
            alt="Right background"
            fill
            priority
            className="object-cover blur-[2px]"
          />
        </div>
      </div>

      <div className="absolute top-[-16px]  h-[812px] w-full max-w-[1259px] inset-0 z-0">
        <Image
          src="/stars1.png"
          alt="background"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full">
        <header className="flex justify-between items-center max-w-300 mx-auto px-4 mt-12.5">
          <Image src="/Logo.png" width={54} height={40} alt="logo" />

          <nav className="hidden md:flex justify-between items-center max-w-135 w-full font-sans text-white [&_span]:cursor-pointer text-[18px] lg:text-[22px]">
            <a
              className="font-sans font-bold border-b-2 border-transparent hover:border-[#FF541F]
 rounded-[1.5px] "
            >
              Home
            </a>
            <a className="border-b-2 border-transparent hover:border-[#FF541F]">
              Services
            </a>
            <a className="border-b-2 border-transparent hover:border-[#FF541F]">
              Contact us
            </a>
            <a className="border-b-2 border-transparent hover:border-[#FF541F]">
              About us
            </a>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {open && (
            <div className="absolute top-[70px] left-0 max-w-[50%] bg-black flex flex-col items-center gap-6 py-6 text-white text-[18px] md:hidden right-0">
              <a className="font-bold">Home</a>
              <a>Services</a>
              <a>Contact us</a>
              <a>About us</a>
              <button
                className="bg-[#FF541F] rounded-[10px] px-4 py-2
            text-white font-bold font-sans text-[18px]"
              >
                Login
              </button>
            </div>
          )}

          <button
            className="hidden justify-center items-center md:flex h-[50px] max-w-[120px] w-full bg-[#FF541F] rounded-[10px] px-[35px] py-[15px]
            text-white font-bold text-[18px]"
          >
            <h1 className="text-white font-bold text-[18px] w-[50px] h-[20px] leading-[19.2px] flex justify-center items-center">
              Login
            </h1>
          </button>
        </header>

        <div className="max-w-[1000px] mx-auto mt-16 px-4 text-center">
          <div className="flex justify-center mb-6">
            <div
              className="flex items-center gap-4 px-4 py-3
              rounded-full bg-gradient-to-r from-[#FF541F21] to-[#FF541F0A]
              border border-[#FFFFFF26]"
            >
              <Image src="/photos.png" width={140} height={40} alt="photos" />
              <div>
                <Image src="/stars.png" width={84} height={40} alt="stars" />
                <p className="text-[14px] text-[#FFFFFFA6]">
                  115+ happy clients
                </p>
              </div>
            </div>
          </div>

          <h1
            className="font-bold text-white leading-[88px] font-sans
            text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px]"
          >
            Automate <span className="text-[#FF541F]">Intelligence</span>.<br />
            Accelerate Growth.
          </h1>

          <p
            className="max-w-[680px] mx-auto mt-4
            text-[16px] sm:text-[18px] md:text-[22px]
            text-[#FFFFFFB2] font-sans"
          >
            Our AI-powered SaaS platform empowers businesses to streamline
            operations, automate repetitive tasks, and make smarter, data-driven
            decisions—all from one intuitive dashboard.
          </p>

          <div className="flex flex-col items-center sm:flex-row gap-4 justify-center mt-6 font-sans">
            <button
              className="bg-[#FF541F] rounded-[10px] max-w-[178px] w-full
              px-[35px] py-[15px] text-white font-bold text-[18px]"
            >
              Get Started
            </button>

            <button
              className="border border-[#FCFCFC3B] rounded-[10px] max-w-[172px] w-full
              px-[35px] py-[15px] text-white text-[18px]"
            >
              See Details
            </button>
          </div>
        </div>

        <div
          className="mt-16 w-full border-y  border-[#FFFFFF1A]
          bg-gradient-to-b from-[#00000000] to-[#000000]"
        >
          <div
            className=" w-full h-auto mx-auto py-10 px-4
            flex "
          >
            <div className="w-full h-auto flex flex-col md:flex-row justify-around items-center gap-8 font-sans">
              <div className="text-center mx-auto">
                <p className="text-[#FF541F] text-[20px]">Clients</p>
                <h2 className="text-white font-bold text-[36px]">120K+</h2>
              </div>

              <div className="text-center md:border-x md:px-[100px] lg:px-[200px] mx-auto border-[#FFFFFF1A]">
                <p className="text-[#FF541F] text-[20px]">Projects</p>
                <h2 className="text-white font-bold text-[36px]">150+</h2>
              </div>

              <div className="text-center mx-auto ">
                <p className="text-[#FF541F] text-[20px]">5-Star Reviews</p>
                <h2 className="text-white font-bold text-[36px]">32K+</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          {/* Decorative dots */}
          <div
            className="
      absolute
      left-1/2 top-[45%]
      -translate-x-1/2
      w-[120%] max-w-[900px]
      hidden md:block
      z-0
    "
          >
            <Image
              src="/dots.png"
              alt="dots img"
              width={900}
              height={1400}
              className="pointer-events-none object-contain rotate-[-9.69deg] opacity-50"
            />
          </div>

          {/* Content */}
          <Features />
          <Stats />
        </div>

        <Pricing />
        <Faq />
      </div>
    </div>
  );
}
