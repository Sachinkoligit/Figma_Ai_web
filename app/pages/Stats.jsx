import Image from "next/image";
import React from "react";

export default function Stats() {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-8 overflow-hidden">

      
      <div className="relative z-10 max-w-[1245px] mx-auto pt-16 lg:pt-24">
        
        <div className="flex max-w-[910px] w-full justify-between mx-auto">
          <h2 className="h-[40px] max-w-[37px] w-full text-[16px] text-[#FFFFFF]">
            2025
          </h2>
          <p
            className="
              max-w-[850px] text-white font-bold
              text-lg sm:text-xl md:text-2xl lg:text-[28px]
              text-center lg:text-left
            "
          >
            Whether you're designing for personal projects, creative teams, or
            large-scale campaigns, our AI-powered platform is built to bring
            your ideas to life—quickly, beautifully, and intelligently. And the
            results? The numbers speak for themselves:
          </p>
        </div>

        {/* Stats Grid */}
        <div
          className="
            mt-16
            grid gap-10
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            place-items-center
          "
        >
          {[
            {
              number: "2014",
              title: "Year of establishment",
              desc: "More than 10 years in the field",
              mt: "lg:mt-[-50px]",
              img: "/photo11.png",
              img_pad: "mt-0",
            },
            {
              number: "304",
              title: "Projects are launched",
              desc: "A lot of projects are done",
              mt: "lg:mt-[120px]",
              img: "/images.png",
              img_pad: "mt-[10px]",
            },
            {
              number: "189",
              title: "Clients are satisfied",
              desc: "These people love us",
              mt: "lg:mt-[-50px]",
              img: "/photo11.png",
              img_pad: "mt-0",
            },
            {
              number: "12",
              title: "Projects in work",
              desc: "What we do right now",
              mt: "lg:mt-[120px]",
              img: "/images.png",
              img_pad: "mt-[10px]",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex flex-col gap-3 items-start text-center ${item.mt}`}
            >
              <h2 className="text-white font-bold text-5xl sm:text-6xl">
                {item.number}
              </h2>

              <div className="max-w-[240px]">
                <h3 className="text-white font-normal text-lg sm:text-xl">
                  {item.title}
                </h3>
                <p className="text-[#8F8E8E] text-sm">{item.desc}</p>
              </div>

              <Image
                src={item.img}
                alt="decor"
                width={290}
                height={91}
                className={item.img_pad}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col sm:flex-row justify-center items-center gap-6">
          <button className="w-full sm:w-auto bg-[#FF541F] rounded-[10px] px-6 py-3">
            <span className="text-white font-bold text-lg">
              Get Started &nbsp; →
            </span>
          </button>

          <div className="max-w-[145px] w-full flex justify-between items-center">
            <p className="text-white text-base">Slots are available</p>
            <div className="w-[7.5px] h-[7.5px] rounded-full bg-[#0AC300]" />
          </div>
        </div>
      </div>
    </section>
  );
}
