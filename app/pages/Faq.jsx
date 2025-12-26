import Image from "next/image";
import { useState } from "react";

export default function Faq() {
  const [openIndex,setOpenIndex]=useState(null);
  return (
    <section className="relative w-full bg-[#010101] pt-25 md:px-0 overflow-hidden">
      {/* BACKGROUND RECT */}
      <div
        className="
  absolute z-0
  w-25 h-37.5
  sm:w-30 sm:h-50
  md:w-45 md:h-75
  top-0 left-0
  translate-y-16 sm:translate-y-24 md:translate-y-10
  -translate-x-6 sm:-translate-x-12 md:-translate-x-12
"
      >
        <Image
          src="/rect.png"
          alt="background"
          fill
          className="object-contain"
        />
      </div>

      <div
        className="
  absolute z-0
  w-[100px] h-[130px]
  sm:w-[180px] sm:h-[340px]
  md:w-[223px] md:h-[426px]
  top-0 right-0
  translate-y-10 sm:translate-y-16 md:translate-y-80
  translate-x-4 sm:translate-x-8 md:translate-x-16
"
      >
        <Image
          src="/Circle.png"
          alt="background"
          fill
          className="object-contain"
        />
      </div>

      <div
        className="absolute top-0 left-0 w-[40px] h-[130px] sm:w-[80px] sm:h-[200px]
  md:w-[150px] md:h-[326px] z-0 translate-y-185"
      >
        <Image
          src="/round_rect.png"
          alt="background"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute top-[644px] right-0 w-[940px] h-[983px] z-0 translate-x-[644px] md:translate-y-[100]">
        <Image
          src="/ellipse.png"
          alt="background"
          fill
          className="object-cover blur-[120px]"
        />
      </div>

      <div className="absolute right-0 w-[1000px] h-[1000px] translate-x-120 translate-y-190 z-0">
        <Image src="/line.png" alt="background" fill className="object-cover" />
      </div>

      <div className="absolute right-0 w-[1000px] h-[1000px] translate-x-110 translate-y-210 z-0">
        <Image src="/line.png" alt="background" fill className="object-cover" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[891px] w-full mx-auto flex pb-10 md:pb-30 flex-col gap-[20px] md:gap-[50px] lg:gap-[76px]">
        <div className="max-w-[830px] w-full mx-auto text-center">
          <h2 className="max-w-[555px] mx-auto font-bold text-4xl md:text-[64px] text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-5 text-[#D9D9D9] text-[20px] px-5">
            Got questions? We've got answers. Find everything you need to know
            about using our platform, plans, and features.
          </p>
        </div>

        {/* FAQ ITEMS */}
        <div className="w-full flex flex-col gap-[22.66px]">
          {[
            {
              q: "What is this platform used for?",
              a: "It’s an AI-powered design assistant that helps you generate, customize, and export creative assets in seconds—whether for personal projects, brand work, or commercial use.",
            },
            {
              q: "What happens if I hit my free generation limit?",
              a: "It’s an AI-powered design assistant that helps you generate, customize, and export creative assets in seconds—whether for personal projects, brand work, or commercial use.",
            },
            {
              q: "Do I need design experience to use it?",
              a: "It’s an AI-powered design assistant that helps you generate, customize, and export creative assets in seconds—whether for personal projects, brand work, or commercial use.",
            },
            {
              q: "Can I collaborate with my team?",
              a: "It’s an AI-powered design assistant that helps you generate, customize, and export creative assets in seconds—whether for personal projects, brand work, or commercial use.",
            },
            {
              q: "Is it really free to use?",
              a: "It’s an AI-powered design assistant that helps you generate, customize, and export creative assets in seconds—whether for personal projects, brand work, or commercial use.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="w-full items-start flex p-[23.85px] border-b border-[#ffffff1a]"
            >
              <div className="flex-1 flex flex-col gap-[10px]">
                <p className="text-[20px] text-white">{item.q}</p>
                {i === openIndex && (
                  <p className="text-[#919191] text-[18px]">{item.a}</p>
                )}
              </div>
              <button onClick={() => setOpenIndex(i === openIndex ? null : i)}>
                <Image
                  src="/arrow-down.png"
                  alt="down"
                  width={30}
                  height={30}
                  className={`${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-[500px] md:max-w-[980px] lg:max-w-[1120px] w-full pb-[56px] border rounded-[50px] border-[#ffffff30] mx-auto px-[23px] md:px-[181px]  overflow-hidden">
        {/* Background Image */}

        <div className="absolute inset-0 z-0">
          <Image
            src="/cross.png"
            alt="background"
            fill
            className="object-contain w-full"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full flex flex-col pt-[56px] gap-[30px] text-center">
          <div className="absolute top-0 inset-0 z-0">
            <Image
              src="/frame1.png"
              alt="background"
              fill
              className="object-cover object-top blur-2xl"
            />
          </div>
          <span className="text-4xl md:text-[64px] font-bold text-white">
            Ready to Design Smarter?
          </span>

          <p className="max-w-[618px] mx-auto text-[20px] text-[#FFFFFFCC]">
            Whether you're a freelancer, a team, or a growing agency—our tools
            adapt to your workflow. Design faster. Deliver better.
          </p>

          <div className="max-w-[211px] mx-auto bg-[#FF541F] px-[34px] py-[15px] rounded-[10px]">
            <span className="text-white text-[20px] font-bold">
              Get Started →
            </span>
          </div>
        </div>
      </div>

      <footer className="w-full px-[23px] md:px-[101px] py-[66px] mt-[80px] bg-[#FFFFFF0F]">
        <div className="max-w-[1237px] w-full mx-auto flex flex-col gap-[50px]">
          <div className="w-full flex md:flex-row flex-col md:gap-0 gap-2 justify-between">
            <div className="md:max-w-[307px] flex flex-col gap-[10px] w-full">
              <h2 className="max-w-[133px] text-[32px] text-white w-full">
                About Us
              </h2>
              <p className="w-full text-[18px] text-[#BCBCBC]">
                We’re a team of designers, engineers, and innovators building AI
                tools that empower anyone to turn imagination into stunning
                visuals—faster, smarter, and effortlessly.
              </p>
            </div>

            <div className="md:max-w-[150px] w-full flex flex-col gap-[15px]">
              <h2 className="text-[24px] font-bold text-[#FF541F]">
                Useful Links
              </h2>
              <div className="flex flex-col gap-[8px] text-[#BCBCBC] text-[18px]">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Team</a>
                <a href="#">Prices</a>
              </div>
            </div>

            <div className="md:max-w-[155px] w-full flex flex-col gap-[15px]">
              <span className="text-[24px] font-bold text-[#FF541F]">Help</span>
              <div className="flex flex-col gap-[8px] text-[#BCBCBC] text-[18px]">
                <a href="#">Customer Support</a>
                <a href="#">Terms & Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Contact us</a>
              </div>
            </div>

            <div className="md:max-w-[195px] w-full flex flex-col gap-[15px]">
              <a href="#" className="text-[24px] font-bold text-[#FF541F]">
                Contact with us
              </a>
              <div className="flex flex-col gap-[8px] text-[#BCBCBC] text-[18px]">
                <p>27 Division St, New York,NY 10002, USA</p>
                <p>+123 324 2653</p>
                <p>username@mail.com</p>
              </div>
            </div>
          </div>

          <div className="w-full p-[0.5px] bg-[#FF541F]"></div>

          <div className="w-full flex md:flex-row flex-col gap-2  justify-between items-center">
            <h2 className="text-[18px] text-[#FFFFFF]">
              © 2024 All Right Reserved.
            </h2>
            <div className="max-w-[145px] w-full flex justify-between items-center">
              <div className="h-[30.54px] w-[30.54px] rounded-[95px] border border-[#FF541F] flex justify-center items-center">
                <Image
                  src="/fb.png"
                  width={8.53}
                  height={13.9}
                  alt="facebook"
                />
              </div>
              <div className="h-[30.54px] w-[30.54px] rounded-[95px] border border-[#FF541F] flex justify-center items-center">
                <Image
                  src="/git.png"
                  width={17.06}
                  height={16.3}
                  alt="facebook"
                />
              </div>
              <div className="h-[30.54px] w-[30.54px] rounded-[95px] border border-[#FF541F] flex justify-center items-center">
                <Image
                  src="/twt.png"
                  width={13.97}
                  height={12.41}
                  alt="facebook"
                />
              </div>
              <div className="h-[30.54px] w-[30.54px] rounded-[95px] border border-[#FF541F] flex justify-center items-center">
                <Image
                  src="/google.png"
                  width={15.51}
                  height={15.53}
                  alt="facebook"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
