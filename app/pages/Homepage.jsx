"use client";

import Image from "next/image";
import React, { useState } from "react";
import Features from "./Features";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Footer from "./Footer";
import { Menu, X } from "lucide-react";

export default function Homepage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full bg-[#010101] relative overflow-x-hidden">
      <div className="flex w-full">
        <div
          className="relative w-full min-h-[60vh] lg:min-h-[755px]
          bg-[url('/left.png')] bg-cover bg-center bg-no-repeat"
        >
          <div
            className="absolute inset-x-0 bottom-0 h-[150px]
            bg-gradient-to-t from-black/80 to-transparent"
          />
        </div>

        <div
          className="w-full min-h-[60vh] lg:min-h-[755px]
          bg-[url('/right.png')] bg-cover bg-center bg-no-repeat"
        />
      </div>

      <div className="relative w-full min-h-[60vh] lg:min-h-[1000px] bg-black overflow-hidden">
        <Image
          src="/dots.png"
          alt="dots background"
          fill
          className="object-cover opacity-50"
        />
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto px-4 mt-6">
          <Image src="/Logo.png" width={54} height={40} alt="logo" />

          <div className="hidden md:flex gap-8 text-white text-[18px] lg:text-[22px]">
            <span className="font-bold">Home</span>
            <span>Services</span>
            <span>Contact us</span>
            <span>About us</span>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Menu */}
          {open && (
            <div className="absolute top-[70px] left-0 w-[50%] bg-black flex flex-col items-center gap-6 py-6 text-white text-[18px] md:hidden translate-x-[100%]">
              <span className="font-bold">Home</span>
              <span>Services</span>
              <span>Contact us</span>
              <span>About us</span>
              <span
                className="bg-[#FF541F] rounded-[10px] px-4 py-2
            text-white font-bold text-[18px]"
              >
                Login
              </span>
            </div>
          )}

          <button
            className="hidden md:block bg-[#FF541F] rounded-[10px] px-4 py-2
            text-white font-bold text-[18px]"
          >
            Login
          </button>
        </div>

        <div className="max-w-[1000px] mx-auto mt-16 px-4 text-center">
          <div className="flex justify-center mb-6">
            <div
              className="flex items-center gap-4 px-4 py-3
              rounded-full bg-gradient-to-r from-[#FF541F21] to-[#FF541F0A]
              border border-slate-700"
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
            className="font-bold text-white leading-tight
            text-[36px] sm:text-[48px] md:text-[64px] lg:text-[80px]"
          >
            Automate <span className="text-[#FF541F]">Intelligence</span>.<br />
            Accelerate Growth.
          </h1>

          <p
            className="max-w-[680px] mx-auto mt-4
            text-[16px] sm:text-[18px] md:text-[22px]
            text-[#FFFFFFB2]"
          >
            Our AI-powered SaaS platform empowers businesses to streamline
            operations, automate repetitive tasks, and make smarter, data-driven
            decisions—all from one intuitive dashboard.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button
              className="bg-[#FF541F] rounded-[10px]
              px-6 py-3 text-white font-bold text-[18px]"
            >
              Get Started
            </button>

            <button
              className="border border-[#FCFCFC3B] rounded-[10px]
              px-6 py-3 text-white text-[18px]"
            >
              See Details
            </button>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div
          className="mt-16 border-y border-[#FFFFFF1A]
          bg-gradient-to-b from-transparent to-black"
        >
          <div
            className="max-w-[1200px] mx-auto py-10
            flex flex-col md:flex-row justify-around items-center gap-8"
          >
            <div className="text-center">
              <p className="text-[#FF541F] text-[20px]">Clients</p>
              <p className="text-white font-bold text-[36px]">120K+</p>
            </div>

            <div className="text-center md:border-x md:px-12 border-[#FFFFFF1A]">
              <p className="text-[#FF541F] text-[20px]">Projects</p>
              <p className="text-white font-bold text-[36px]">150+</p>
            </div>

            <div className="text-center">
              <p className="text-[#FF541F] text-[20px]">5-Star Reviews</p>
              <p className="text-white font-bold text-[36px]">32K+</p>
            </div>
          </div>
        </div>

        <Features />
        <Stats />
        <Pricing />
        <Faq />
        <Footer />
      </div>
    </div>
  );
}
