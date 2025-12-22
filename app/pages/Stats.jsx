import Image from "next/image";
import React from "react";

export default function Stats() {
  return (
    <section className="w-full px-4 bg-[#010101] sm:px-6 lg:px-8">
      <div className="max-w-[1245px] mx-auto pt-16 lg:pt-24">
        {/* Heading */}
        <div className="flex justify-center">
          <h1
            className="max-w-[850px] text-white font-bold
            text-lg sm:text-xl md:text-2xl lg:text-[28px]"
          >
            Whether you're designing for personal projects, creative teams, or
            large-scale campaigns, our AI-powered platform is built to bring
            your ideas to life—quickly, beautifully, and intelligently. And the
            results? The numbers speak for themselves:
          </h1>
        </div>

        {/* Stats Grid */}
        <div
          className="mt-12 grid gap-10
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4"
        >
          {[
            {
              number: "2014",
              title: "Year of establishment",
              desc: "More than 10 years in the field",
            },
            {
              number: "304",
              title: "Projects are launched",
              desc: "A lot of projects are done",
            },
            {
              number: "189",
              title: "Clients are satisfied",
              desc: "These people love us",
            },
            {
              number: "12",
              title: "Projects in work",
              desc: "What we do right now",
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-3">
              <h2
                className="text-white font-bold
                text-5xl sm:text-6xl"
              >
                {item.number}
              </h2>

              <div className="max-w-[240px]">
                <h3
                  className="text-white font-normal
                  text-lg sm:text-xl"
                >
                  {item.title}
                </h3>
                <p className="text-[#8F8E8E] text-sm">{item.desc}</p>
              </div>

              <Image
                src="/photo11.png"
                alt="decor"
                width={290}
                height={91}
                className="w-full max-w-[290px]"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-14 flex flex-col sm:flex-row
          justify-center items-center gap-6"
        >
          <button
            className="w-full sm:w-auto bg-[#FF541F]
            rounded-[10px] px-6 py-3"
          >
            <span className="text-white font-bold text-lg">
              Get Started &nbsp; →
            </span>
          </button>

          <p className="text-white text-base">Slots are available</p>
        </div>
      </div>
    </section>
  );
}
