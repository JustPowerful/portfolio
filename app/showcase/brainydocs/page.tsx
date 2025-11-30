"use client";

import React from "react";
import Image from "next/image";
import { Brain, FileText, Users, Trophy, Layout } from "lucide-react";

// Imports for assets
import aiQuizImg from "./assets/aiquizgenerator.png";
import classMgmtImg from "./assets/classmanagement.png";
import docUploadImg from "./assets/documentupload.png";
import landingImg from "./assets/landingpage.png";
import leaderboardImg from "./assets/schoolleaderboard.png";

export default function BrainyDocsShowcase() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 bg-linear-to-b from-[#f8f1e6] via-[#f2e3c8] to-[#fcfcfc] text-[#3d352b] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pattern-grid-lg text-[#e0cfa6]"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              BrainyDocs
            </h1>
            <p className="text-xl md:text-2xl text-[#5f564b] leading-relaxed mb-8">
              An intelligent educational platform transforming documents into
              interactive learning experiences with the power of AI.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Next.js",
                "OpenAI API",
                "Tailwind CSS",
                "Prisma",
                "Education Tech",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/50 rounded-full text-sm font-medium backdrop-blur-sm border border-[#b58905]/20 text-[#3d352b]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* AI Quiz Generation */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#b58905] font-semibold">
                <Brain className="w-6 h-6" />
                <span>AI-Powered Learning</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3d352b]">
                Instant Quiz Generation
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Upload any document and let our AI instantly analyze the content
                to generate comprehensive quizzes. This feature allows students
                to test their knowledge immediately after studying material,
                reinforcing learning outcomes.
              </p>
            </div>
            <div className="relative">
              <Image
                width={800}
                height={800}
                placeholder="blur"
                src={aiQuizImg}
                alt="AI Quiz Generator"
                className="w-full h-auto rounded-xl "
              />
            </div>
          </div>

          {/* Document Management */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1 relative">
              <Image
                width={800}
                height={800}
                placeholder="blur"
                src={docUploadImg}
                alt="Document Upload"
                className="w-full h-auto rounded-xl "
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <div className="flex items-center gap-3 text-[#b58905] font-semibold">
                <FileText className="w-6 h-6" />
                <span>Resource Management</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3d352b]">
                Seamless Document Handling
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Professors and teachers can easily upload and organize course
                files for their students to access. The interface supports
                various document formats and provides quick retrieval, ensuring
                that learning materials are always at {"students'"} fingertips.
              </p>
            </div>
          </div>

          {/* Classroom Management */}
          <div className="bg-[#f8f1e6] rounded-3xl p-8 md:p-16 overflow-hidden relative mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[#b58905] font-semibold">
                  <Users className="w-6 h-6" />
                  <span>For Educators</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#3d352b]">
                  Classroom Management
                </h2>
                <p className="text-[#5f564b] text-lg leading-relaxed">
                  Teachers can create classes, invite students, and manage
                  course materials efficiently. The platform provides tools to
                  track student engagement and distribute assignments
                  seamlessly.
                </p>
              </div>
              <div className="relative">
                <Image
                  width={800}
                  height={800}
                  placeholder="blur"
                  src={classMgmtImg}
                  alt="Class Management"
                  className="w-full h-auto rounded-lg "
                />
              </div>
            </div>
          </div>

          {/* Gamification & Leaderboard */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[#b58905] font-semibold">
                <Trophy className="w-6 h-6" />
                <span>Gamification</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3d352b]">
                Compete & Excel
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Foster healthy competition and motivation with school-wide
                leaderboards. Students can track their progress, earn
                achievements, and see how they stack up against their peers,
                making learning fun and engaging.
              </p>
            </div>
            <div className="relative">
              <Image
                height={800}
                width={800}
                placeholder="blur"
                src={leaderboardImg}
                alt="School Leaderboard"
                className="w-full h-auto rounded-xl "
              />
            </div>
          </div>

          {/* Landing / Overview */}
          <div className="flex flex-col items-center">
            <div className="text-center max-w-2xl mb-12">
              <div className="flex items-center justify-center gap-3 text-[#b58905] font-semibold mb-4">
                <Layout className="w-6 h-6" />
                <span>User Experience</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3d352b] mb-4">
                Intuitive Dashboard
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A clean, modern interface designed to put learning front and
                center. Navigate through your courses, quizzes, and documents
                with ease.
              </p>
            </div>
            <div className="relative w-full max-w-4xl mx-auto">
              <Image
                height={800}
                width={800}
                placeholder="blur"
                src={landingImg}
                alt="BrainyDocs Dashboard"
                className="w-full h-auto rounded-xl  border border-gray-100"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
