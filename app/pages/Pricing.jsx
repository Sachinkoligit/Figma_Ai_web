import Image from "next/image";
import React from "react";

export default function Pricing() {
  return (
    <section className="w-full bg-[#010101] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto py-16">
        {/* Heading */}
        <div className="max-w-[780px] mx-auto text-center mb-12">
          <h1
            className="font-bold text-white
            text-3xl sm:text-4xl lg:text-[64px] leading-tight"
          >
            Choose the Plan That’s Right for You
          </h1>

          <p
            className="mt-4 text-[#D9D9D9]
            text-base sm:text-lg"
          >
            Giving you access to essential features and over 1,000 creative
            tools. Upgrade to the Pro Plan to unlock powerful AI capabilities,
            cloud syncing, and a whole new level of creative freedom.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-[#FFFFFF1A] border border-white rounded-full p-1">
            <button className="px-6 py-1 rounded-full bg-[#FFFFFF33] text-white text-sm">
              Monthly
            </button>
            <button className="px-6 py-1 text-[#919191] text-sm">Yearly</button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          className="grid gap-8
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3"
        >
          {/* FREE */}
          <PricingCard
            title="Free"
            price="$0"
            desc="Everything you need to supercharge your productivity."
            features={[
              "20 design generations/month",
              "Low-res downloads",
              "Basic style presets",
              "Limited customization options",
            ]}
            tick="/tick.png"
          />

          {/* PRO (Highlighted) */}
          <div
            className="p-[3px] rounded-[20px]
            bg-gradient-to-b from-[#FF7044] to-[#641800]"
          >
            <PricingCard
              title={<span className="text-[#FF541F]">Pro</span>}
              price="$17"
              badge="-20%"
              desc="Unlock a new level of your personal productivity."
              features={[
                "Everything in Free",
                "Enigma AI",
                "Unlimited design generations",
                "Custom Themes",
                "High-resolution exports",
                "Custom Extensions",
                "Developer Tools",
              ]}
              tick="/tick2.png"
            />
          </div>

          {/* TEAM */}
          <PricingCard
            title="Team"
            price="$37"
            badge="-20%"
            desc="Everything you need to supercharge your productivity."
            features={[
              "Everything in Free",
              "Unlimited Shared Commands",
              "Unlimited Shared Quicklinks",
              "Priority support",
            ]}
            tick="/tick.png"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARD COMPONENT ---------------- */

function PricingCard({ title, price, desc, features, tick, badge }) {
  return (
    <div
      className="rounded-[20px] bg-[#1B1B1C] border border-[#FFFFFF1A]
      p-6 flex flex-col gap-8 h-full"
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-white text-lg">{title}</h3>
        <p className="text-[#FFFFFFBF] text-sm">{desc}</p>

        <div className="flex items-center gap-3">
          <h2 className="text-white font-bold text-4xl">{price}</h2>
          <span className="text-[#FFFFFFBF] text-sm">/ month</span>

          {badge && (
            <span
              className="bg-[#FF541F] text-white text-xs font-bold
              px-2 py-1 rounded-full"
            >
              {badge}
            </span>
          )}
        </div>
      </div>

      <div className="h-px bg-[#FFFFFF33]" />

      <div className="flex flex-col gap-3">
        <p className="text-[#FFFFFFBF] text-sm">What’s included</p>

        {features.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="relative w-5 h-5">
              <Image src={tick} fill alt="tick" />
            </div>
            <span className="text-[#FFFFFFBF] text-sm">{item}</span>
          </div>
        ))}
      </div>

      <button
        className="mt-auto mx-auto flex items-center gap-3
        px-5 py-2 rounded-[10px]
        bg-[#00000080] border border-[#FFFFFF12] text-white"
      >
        Subscribe
        <Image src="/arrow11.png" width={8} height={16} alt="arrow" />
      </button>
    </div>
  );
}
