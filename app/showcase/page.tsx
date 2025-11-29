"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Imports for assets
import solugentLogo from "./assets/solugent.png";
import dinesphereLogo from "./assets/dinesphere.png";

const projects = [
  {
    id: "solugent",
    title: "Solugent's Website",
    description:
      "An AI-powered tendering assistant helping businesses streamline bidding workflows and secure opportunities.",
    logo: solugentLogo,
    link: "/showcase/solugent",
    tags: ["Next.js", "Tailwind CSS", "Figma", "AI Integration"],
  },
  {
    id: "dinesphere",
    title: "DineSphere App",
    description:
      "A connected restaurant platform merging real-time engagement with immersive AR dining experiences.",
    logo: dinesphereLogo,
    link: "/showcase/dinesphere",
    tags: ["Flutter", "Spring Boot", "AR Core", "PostgreSQL"],
  },
];

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-linear-to-b from-[#f8f1e6] via-[#f2e3c8] to-[#fcfcfc] text-[#3d352b] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pattern-grid-lg text-[#e0cfa6]"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Project <span className="text-[#b58905]">Showcase</span>
          </h1>
          <p className="text-lg md:text-xl text-[#5f564b] max-w-2xl mx-auto leading-relaxed">
            A deep dive into some of the most impactful projects I&apos;ve
            built, featuring detailed case studies on design, development, and
            innovation.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                href={project.link}
                key={project.id}
                className="group relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-[#b58905] text-white p-2 rounded-full">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="flex flex-col h-full">
                  <div className="mb-8 flex items-center justify-center h-32 bg-gray-50 rounded-2xl p-6 group-hover:bg-[#f8f1e6] transition-colors duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.logo}
                        alt={`${project.title} Logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 flex-grow">
                    <h2 className="text-2xl font-bold text-[#3d352b] group-hover:text-[#b58905] transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full group-hover:bg-[#b58905]/10 group-hover:text-[#b58905] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
