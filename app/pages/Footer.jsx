import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-[#010101] pt-[100px] px-4 md:px-6 lg:px-8">
      <div className="max-w-[1180px] border rounded-[50px] border-[#ffffff30] mx-auto px-[23px] md:px-[181px] py-[56px]">
        <div className="w-full flex flex-col gap-[30px]">
          <div className=" w-full">
            <span className="text-4xl md:text-[64px] font-bold text-white w-full">
              Ready to Design Smarter?
            </span>
          </div>
          <p className="max-w-[618px] w-full text-[20px] mx-auto text-center text-[#FFFFFFCC]">
            Whether you're a freelancer, a team, or a growing agency—our tools
            adapt to your workflow. Design faster. Deliver better.
          </p>
          <div className="max-w-[211px] mx-auto w-full bg-[#FF541F] px-[34px] py-[15px] rounded-[10px]">
            <span className="text-white text-[20px] font-bold">
              Get Started -&gt;
            </span>
          </div>
        </div>
      </div>

      <div className="w-full px-[23px] md:px-[101px] py-[66px] mt-[80px] bg-[#FFFFFF0F]">
        <div className="max-w-[1237px] w-full mx-auto flex flex-col gap-[50px]">
          <div className="w-full flex md:flex-row flex-col md:gap-0 gap-2 justify-between">
            <div className="md:max-w-[307px] flex flex-col gap-[10px] w-full">
              <h1 className="max-w-[133px] text-[32px] text-white w-full">
                About Us
              </h1>
              <p className="w-full text-[18px] text-[#BCBCBC]">
                We’re a team of designers, engineers, and innovators building AI
                tools that empower anyone to turn imagination into stunning
                visuals—faster, smarter, and effortlessly.
              </p>
            </div>

            <div className="md:max-w-[150px] w-full flex flex-col gap-[15px]">
              <h1 className="text-[24px] font-bold text-[#FF541F]">
                Useful Links
              </h1>
              <div className="flex flex-col gap-[8px] text-[#BCBCBC] text-[18px]">
                <p>About</p>
                <p>Services</p>
                <p>Team</p>
                <p>Prices</p>
              </div>
            </div>

            <div className="md:max-w-[155px] w-full flex flex-col gap-[15px]">
              <h1 className="text-[24px] font-bold text-[#FF541F]">Help</h1>
              <div className="flex flex-col gap-[8px] text-[#BCBCBC] text-[18px]">
                <p>Customer Support</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                <p>Contact us</p>
              </div>
            </div>

            <div className="md:max-w-[195px] w-full flex flex-col gap-[15px]">
              <h1 className="text-[24px] font-bold text-[#FF541F]">
                Contact with us
              </h1>
              <div className="flex flex-col gap-[8px] text-[#BCBCBC] text-[18px]">
                <p>27 Division St, New York,NY 10002, USA</p>
                <p>+123 324 2653</p>
                <p>username@mail.com</p>
              </div>
            </div>
          </div>

          <div className="w-full p-[0.5px] bg-[#FF541F]"></div>

          <div className="w-full flex md:flex-row flex-col gap-2  justify-between items-center">
            <h1 className="text-[18px] text-[#FFFFFF]">
              © 2024 All Right Reserved.
            </h1>
            <div className="max-w-[145px] flex justify-between items-center">
              <div className="h-[30px] w-[30px] rounded-[95px] border border-[#FF541F] flex justify-center items-center">
                <Image src="/fb.png" width={13} height={13} alt="facebook" />
              </div>
              <div className="h-[30px] w-[30px] rounded-[95px] border border-[#FF541F] flex justify-center items-center">
                <Image src="/git.png" width={18} height={18} alt="facebook" />
              </div>
              <div className="h-[30px] w-[30px] rounded-[95px] border border-[#FF541F] flex justify-center items-center">
                <Image src="/twt.png" width={18} height={18} alt="facebook" />
              </div>
              <div className="h-[30px] w-[30px] rounded-[95px] border border-[#FF541F] flex justify-center items-center">
                <Image
                  src="/google.png"
                  width={18}
                  height={18}
                  alt="facebook"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
