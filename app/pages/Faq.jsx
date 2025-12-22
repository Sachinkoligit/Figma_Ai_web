import Image from 'next/image';

export default function Faq() {
  return (
    <div className="w-full bg-[#010101] pt-[100px]  px-4  md:px-6  lg:px-8">
      <div className="max-w-[891px] w-full mx-auto  flex flex-col gap-[20px] md:gap-[50px] lg:gap-[76px]">
        <div className="max-w-[830px] w-full mx-auto">
          <h1 className="max-w-[555px] w-full font-bold text-4xl md:text-[64px] mx-auto text-white text-center">
            Frequently Asked Questions
          </h1>
          <p className="w-full text-[#D9D9D9] pt-[20px] px-[23px] text-[20px] text-center">
            Got questions? We've got answers. Find everything you need to know
            about using our platform, plans, and features.
          </p>
        </div>

        <div className="w-full flex flex-col gap-[22.66px]">
          <div className="w-full flex p-[23.85px] border-b">
            <div className="w-[815px] mx-auto  flex flex-col gap-[10px]">
              <h1 className="max-w-[275px] w-full text-[20px] text-white">
                What is this platform used for?
              </h1>
              <p className="w-full text-[#919191] text-[18px]">
                It’s an AI-powered design assistant that helps you generate,
                customize, and export creative assets in seconds—whether for
                personal projects, brand work, or commercial use.
              </p>
            </div>
            <div className="max-w-[28px]">
              <Image src="/arrow-down.png" alt="down" height={28} width={28} />
            </div>
          </div>

          <div className="w-full flex p-[23.85px] border-b">
            <div className="w-[815px] mx-auto  flex flex-col gap-[10px]">
              <h1 className=" w-full text-[20px] text-white">
                What happens if I hit my free generation limit?
              </h1>
            </div>
            <div className="max-w-[28px]">
              <Image src="/arrow-down.png" alt="down" height={28} width={28} />
            </div>
          </div>

          <div className="w-full flex p-[23.85px] border-b">
            <div className="w-[815px] mx-auto  flex flex-col gap-[10px]">
              <h1 className=" w-full text-[20px] text-white">
                Do I need design experience to use it?
              </h1>
            </div>
            <div className="max-w-[28px]">
              <Image src="/arrow-down.png" alt="down" height={28} width={28} />
            </div>
          </div>

          <div className="w-full flex p-[23.85px] border-b">
            <div className="w-[815px] mx-auto  flex flex-col gap-[10px]">
              <h1 className=" w-full text-[20px] text-white">
                Can I collaborate with my team?
              </h1>
            </div>
            <div className="max-w-[28px]">
              <Image src="/arrow-down.png" alt="down" height={28} width={28} />
            </div>
          </div>

          <div className="w-full flex p-[23.85px] border-b">
            <div className="w-[815px] mx-auto  flex flex-col gap-[10px]">
              <h1 className=" w-full text-[20px] text-white">
                Is it really free to use?
              </h1>
            </div>
            <div className="max-w-[28px]">
              <Image src="/arrow-down.png" alt="down" height={28} width={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
