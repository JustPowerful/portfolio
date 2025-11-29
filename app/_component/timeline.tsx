"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquare, Search, PenTool, Code, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Consultation/ Service Request",
    description: "We discuss your needs and define the scope of the project.",
    icon: MessageSquare,
  },
  {
    title: "Needs Study",
    description: "In-depth analysis of requirements and technical feasibility.",
    icon: Search,
  },
  {
    title: "Design & Conception",
    description:
      "Creating the architecture, UI/UX design, and project roadmap.",
    icon: PenTool,
  },
  {
    title: "Project Execution",
    description: "Development and implementation of the solution.",
    icon: Code,
  },
  {
    title: "Deployment & CI/CD",
    description: "Launching the project and setting up continuous integration.",
    icon: Rocket,
  },
];

const TimelineItem = ({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        "flex justify-between items-center w-full mb-8 md:mb-12 transition-all duration-1000 ease-out relative",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      )}
    >
      {/* Desktop: Left Side (Content or Spacer) */}
      <div
        className={cn(
          "hidden md:block w-5/12",
          isLeft ? "text-right pr-8" : "pl-8"
        )}
      >
        {isLeft && (
          <div
            className={cn(
              "bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-700",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
          >
            <h3 className="text-xl font-bold text-[#3d352b] mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        )}
      </div>

      {/* Center Icon */}
      <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center bg-[#b58905] shadow-xl w-10 h-10 md:w-12 md:h-12 rounded-full z-10 border-4 border-[#fcfcfc]">
        <step.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>

      {/* Desktop: Right Side (Spacer or Content) */}
      <div
        className={cn(
          "hidden md:block w-5/12",
          !isLeft ? "text-left pl-8" : "pr-8"
        )}
      >
        {!isLeft && (
          <div
            className={cn(
              "bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-700",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            )}
          >
            <h3 className="text-xl font-bold text-[#3d352b] mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        )}
      </div>

      {/* Mobile Content (Always on right of icon) */}
      <div className="md:hidden w-full pl-16">
        <div
          className={cn(
            "bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all duration-700",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}
        >
          <h3 className="text-xl font-bold text-[#3d352b] mb-2">
            {step.title}
          </h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section className="w-full py-20 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 relative inline-block">
            My Process
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-[#c49b08] rounded-full"></span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From concept to deployment, I follow a structured approach to ensure
            success.
          </p>
        </div>

        <div className="relative wrap overflow-hidden p-4 h-full">
          {/* Vertical Line */}
          <div className="absolute border-l-2 border-gray-200 h-full left-4 md:left-1/2 transform md:-translate-x-1/2 top-0"></div>

          {steps.map((step, index) => (
            <TimelineItem key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
