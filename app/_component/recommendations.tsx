"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import lotfiImg from "@/assets/pfp/lotfi.jpg";
import tahaImg from "@/assets/pfp/taha.jpg";

const recommendations = [
  {
    id: "lotfi",
    content: [
      "I am pleased to recommend Ahmed, who played a pivotal role in refining our product and elevating its overall quality. His contributions went far beyond development tasks, he consistently brought valuable ideas, thoughtful insights, and a product-oriented mindset that helped shape our direction.",
      "His work ethic was exceptional. Whether tackling complex challenges or iterating on key features, he approached every task with professionalism, focus, and remarkable speed. His ability to quickly identify effective solutions made a significant impact on our timelines and outcomes.",
      "Additionally, his expertise in Typescript proved fundamental to our success. He not only mastered the technical aspects but also leveraged that knowledge to guide architectural decisions and ensure long-term maintainability.",
      "I confidently recommend Ahmed to any team seeking a skilled, reliable, and forward-thinking developer.",
    ],
    author: "Lotfi Messaoudi",
    role: "CEO of Jetfi Systems GmBH",
    image: lotfiImg,
  },
  {
    id: "taha",
    content: [
      "The experience of working with Ahmed was exceptionally productive and highly rewarding for our entire development team. He possesses a rare combination of artistic talent and technical acumen that drove significant improvements in our solution.",
      "Ahmed was instrumental in translating complex requirements into elegant and intuitive UI/UX designs, always prioritizing the end-user experience. His deep technical mastery of Next.js ensured these sophisticated designs were flawlessly implemented as a high-performance, polished user interface.",
      "Moreover, his versatile skills allowed him to effectively contribute to the associated backend development, making him a powerful full-stack resource. Ahmed consistently demonstrated initiative, attention to detail, and a strong commitment to project success.",
      "I strongly endorse him for any position demanding expertise at the intersection of superior design and modern web technology.",
    ],
    author: "Taha Abidi",
    role: "CEO of Solugent",
    image: tahaImg,
  },
];

const Recommendations = () => {
  const [recIndex, setRecIndex] = useState(0);
  const [paraIndex, setParaIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentRec = recommendations[recIndex];
  const totalParas = currentRec.content.length;
  const DURATION = 8000; // 8 seconds per slide

  const next = useCallback(() => {
    if (paraIndex < totalParas - 1) {
      setParaIndex((p) => p + 1);
    } else {
      setRecIndex((r) => (r + 1) % recommendations.length);
      setParaIndex(0);
    }
  }, [paraIndex, totalParas]);

  const prev = useCallback(() => {
    if (paraIndex > 0) {
      setParaIndex((p) => p - 1);
    } else {
      const prevRecIndex =
        (recIndex - 1 + recommendations.length) % recommendations.length;
      setRecIndex(prevRecIndex);
      setParaIndex(recommendations[prevRecIndex].content.length - 1);
    }
  }, [paraIndex, recIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused || !isInView) return;
    const timer = setInterval(next, DURATION);
    return () => clearInterval(timer);
  }, [next, isPaused, isInView]);

  return (
    <section
      className="w-full py-24 bg-[#fcfcfc] overflow-hidden"
      ref={containerRef}
    >
      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3d352b] mb-4">
            What People Say
          </h2>
          <div className="w-20 h-1 bg-[#b58905] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Desktop Navigation Buttons */}
          <button
            onClick={prev}
            className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 p-3 rounded-full bg-white shadow-lg border border-gray-100 text-[#3d352b] hover:text-[#b58905] transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 p-3 rounded-full bg-white shadow-lg border border-gray-100 text-[#3d352b] hover:text-[#b58905] transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col min-h-[400px]">
            {/* Progress Bars */}
            <div className="flex gap-1.5 p-6 pb-0">
              {currentRec.content.map((_, idx) => (
                <div
                  key={idx}
                  className="h-1.5 flex-1 bg-gray-100 rounded-full overflow-hidden"
                >
                  <div
                    className={`h-full bg-[#b58905] rounded-full ${
                      idx < paraIndex ? "w-full" : "w-0"
                    }`}
                    style={{
                      width:
                        idx < paraIndex
                          ? "100%"
                          : idx === paraIndex
                          ? "100%"
                          : "0%",
                      animationName: idx === paraIndex ? "progress" : "none",
                      animationDuration: `${DURATION}ms`,
                      animationTimingFunction: "linear",
                      animationFillMode: "forwards",
                      animationPlayState:
                        isPaused || !isInView ? "paused" : "running",
                    }}
                  />
                </div>
              ))}
            </div>

            <div className="p-8 md:p-12 flex flex-col grow relative">
              <div className="absolute top-8 right-8 text-[#b58905]/20">
                <Quote className="w-12 h-12 md:w-16 md:h-16" />
              </div>

              {/* Content Area */}
              <div className="grow flex items-center justify-center my-6">
                <div className="relative w-full">
                  {currentRec.content.map((text, idx) => (
                    <div
                      key={`${currentRec.id}-${idx}`}
                      className={`transition-all duration-500 absolute top-0 left-0 w-full ${
                        idx === paraIndex
                          ? "opacity-100 translate-y-0 relative"
                          : "opacity-0 translate-y-4 pointer-events-none absolute"
                      }`}
                    >
                      {idx === paraIndex && (
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium text-center">
                          &quot;{text}&quot;
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Author Info */}
              <div className="mt-auto pt-8 border-t border-gray-100 flex items-center gap-4 justify-center md:justify-start">
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[#b58905]/20 shrink-0">
                  <Image
                    src={currentRec.image}
                    alt={currentRec.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-lg md:text-xl font-bold text-[#3d352b]">
                    {currentRec.author}
                  </h4>
                  <p className="text-[#b58905] font-medium text-sm md:text-base">
                    {currentRec.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile Tap Areas */}
            <div className="absolute inset-0 flex lg:hidden">
              <div className="w-1/2 h-full" onClick={prev} />
              <div className="w-1/2 h-full" onClick={next} />
            </div>

            {/* Play/Pause Indicator (Optional, for UX) */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-[#b58905] transition-colors z-20"
            >
              {isPaused ? (
                <Play className="w-4 h-4" />
              ) : (
                <Pause className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Mobile Hint */}
          <p className="text-center text-gray-400 text-sm mt-4 lg:hidden">
            Tap left or right to navigate
          </p>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
