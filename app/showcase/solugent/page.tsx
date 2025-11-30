"use client";

import React from "react";
import Image from "next/image";
import { Figma, Code, Sparkles, Layout } from "lucide-react";

// Imports for assets
import cardsImg from "./assets/cards.png";
import pcMockup1 from "./assets/pcmockup1.png";
import pcMockup2 from "./assets/pcmockup2.png";
import phoneMockup1 from "./assets/phonemockup1.png";

export default function SolugentShowcase() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 bg-linear-to-b from-[#f8f1e6] via-[#f2e3c8] to-[#fcfcfc] text-[#3d352b] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pattern-grid-lg text-[#e0cfa6]"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Solugent
            </h1>
            <p className="text-xl md:text-2xl text-[#5f564b] leading-relaxed mb-8">
              Streamlining the tendering process with AI-powered solutions and
              engaging user experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Next.js", "Tailwind CSS", "Figma", "Interactive UI"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/50 rounded-full text-sm font-medium backdrop-blur-sm border border-[#b58905]/20 text-[#3d352b]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Design */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#b58905] font-semibold">
                <Figma className="w-6 h-6" />
                <span>UI/UX Design</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3d352b]">
                Crafting the Vision
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                I started by designing comprehensive mockups in Figma, focusing
                on a clean, professional aesthetic that builds trust with
                business clients. The goal was to simplify complex tendering
                workflows into intuitive interfaces.
              </p>
            </div>
            <div className="relative">
              <Image
                placeholder="blur"
                width={500}
                height={500}
                src={pcMockup1}
                alt="Solugent Landing Page Design"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Development */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1 relative">
              <Image
                placeholder="blur"
                width={500}
                height={500}
                src={pcMockup2}
                alt="Solugent Dashboard Interface"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center gap-3 text-[#b58905] font-semibold">
                <Code className="w-6 h-6" />
                <span>Development</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3d352b]">
                Pixel-Perfect Implementation
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Translating designs into code using Next.js and Tailwind CSS. I
                ensured the application was responsive, performant, and
                maintained visual fidelity across all devices, from large
                desktops to mobile screens.
              </p>
            </div>
          </div>

          {/* Mobile View */}
          <div className="flex flex-col items-center mb-24">
            <div className="text-center max-w-2xl mb-12">
              <div className="flex items-center justify-center gap-3 text-[#b58905] font-semibold mb-4">
                <Layout className="w-6 h-6" />
                <span>Responsive Design</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3d352b] mb-4">
                Seamless on Any Device
              </h2>
            </div>
            <div className="relative max-w-sm mx-auto">
              <div className="relative">
                <Image
                  placeholder="blur"
                  height={1000}
                  width={1000}
                  src={phoneMockup1}
                  alt="Mobile Responsive View"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Gamification */}
          <div className="bg-[#f8f1e6] rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[#b58905] font-semibold">
                  <Sparkles className="w-6 h-6" />
                  <span>Interactive Features</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#3d352b]">
                  Engaging Micro-Interactions
                </h2>
                <p className="text-[#5f564b] text-lg leading-relaxed">
                  To add a touch of delight, I implemented a card-flipping
                  mini-game within the website. Users can interact with the
                  cards to reveal surprises, adding a layer of engagement and
                  personality to the brand experience.
                </p>
              </div>
              <div className="relative">
                <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image
                    placeholder="blur"
                    height={500}
                    width={500}
                    src={cardsImg}
                    alt="Card Flip Game"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
