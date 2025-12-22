import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <section className="bg-[#010101] w-full py-12 px-4">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-[690px] w-full">
            <h1
              className="text-white font-normal leading-tight
              text-[36px] sm:text-[44px] md:text-[54px] lg:text-[64px]"
            >
              Designed for Designers. <br />
              Powered by <span className="text-[#FF541F]">AI</span>.
            </h1>

            <p
              className="mt-3 text-[#FFFFFFD9]
              text-[16px] sm:text-[17px] md:text-[18px]"
            >
              Unlock the full potential of your creativity with our AI-powered
              design assistant. Explore new dimensions of design.
            </p>
          </div>

          <div className="flex justify-start md:justify-center">
            <Image
              src="/logo2.png"
              alt="Features"
              height={112}
              width={120}
              className="w-[80px] sm:w-[100px] md:w-[120px]"
            />
          </div>
        </div>

        {/* ================= FEATURE CARDS ================= */}
        <div className="mt-10 space-y-6">
          {/* ROW 1 */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* CARD 1 */}
            <div
              className="w-full lg:max-w-[468px]
              bg-gradient-to-br from-transparent to-[#FF3C00]
              rounded-[20px] p-5"
            >
              <div className="flex justify-between items-start gap-4">
                <p
                  className="text-[#D9D9D9D9]
                  text-[15px] sm:text-[16px] md:text-[18px]"
                >
                  Skip the blank canvas and spark creativity instantly. Our AI
                  generates high-quality, on-brand design concepts within
                  seconds.
                </p>

                <Image src="/arrow.png" alt="arrow" height={60} width={60} />
              </div>

              <h3
                className="mt-6 text-white font-normal
                text-[24px] sm:text-[28px] md:text-[34px]"
              >
                Instant Ideation
              </h3>
            </div>

            {/* CARD 2 */}
            <div
              className="w-full lg:max-w-[712px]
              bg-[#272829B2] rounded-[20px] p-5"
            >
              <div className="flex justify-between items-start gap-4">
                <p
                  className="text-[#D9D9D9D9]
                  text-[15px] sm:text-[16px] md:text-[18px]"
                >
                  No two creators are the same. Our AI learns from your inputs,
                  understands your aesthetic preferences, and fine-tunes every
                  design.
                </p>

                <Image src="/arrow.png" alt="arrow" height={60} width={60} />
              </div>

              <h3
                className="mt-6 text-white font-normal
                text-[24px] sm:text-[28px] md:text-[34px]"
              >
                Smart Adaptability
              </h3>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* CARD 3 */}
            <div
              className="w-full lg:max-w-[712px]
              bg-[#272829B2] rounded-[20px] p-5"
            >
              <div className="flex justify-between items-start gap-4">
                <p
                  className="text-[#D9D9D9D9]
                  text-[15px] sm:text-[16px] md:text-[18px]"
                >
                  Design once, export anywhere. Whether you need high-res
                  graphics for print, responsive visuals for the web, or
                  mobile-optimized assets.
                </p>

                <Image src="/arrow.png" alt="arrow" height={60} width={60} />
              </div>

              <h3
                className="mt-6 text-white font-normal
                text-[24px] sm:text-[28px] md:text-[34px]"
              >
                Multi-Format Export
              </h3>
            </div>

            {/* CARD 4 */}
            <div
              className="w-full lg:max-w-[468px]
              bg-gradient-to-br from-transparent to-[#FF3C00]
              rounded-[20px] p-5"
            >
              <div className="flex justify-between items-start gap-4">
                <p
                  className="text-[#D9D9D9D9]
                  text-[15px] sm:text-[16px] md:text-[18px]"
                >
                  Say goodbye to repetitive tweaks and endless back-and-forths.
                  With intuitive prompt-based editing.
                </p>

                <Image src="/arrow.png" alt="arrow" height={60} width={60} />
              </div>

              <h3
                className="mt-6 text-white font-normal
                text-[24px] sm:text-[28px] md:text-[34px]"
              >
                Seamless Revisions
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
