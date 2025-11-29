"use client";

import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Freelance Software Engineer",
    company: "Jetfi Systems GmbH",
    location: "Germany (Remote)",
    date: "Jul 2025 - Oct 2025",
    description: [
      "Contributed with a team for software engineering freelancers to accomplish tasks related to an internal project.",
      "This project helped me enhance my skills in collaborative development and agile methodologies.",
    ],
    technologies: ["Under NDA"],
  },
  {
    id: 2,
    role: "Software Engineer & Consultant",
    company: "D.Design",
    location: "Sousse, Tunisia (Hybrid)",
    date: "Oct 2020 - Present",
    description: [
      "Consulted with businesses to identify, scope, and implement web applications that aligned with their operational goals.",
      "Delivered specialized platforms for a Berlin-based car cleaning service chain to streamline multi-location task management.",
      "Built a task orchestration system tailored for hotel and gym cleaning services to improve cross-team coordination.",
      "Continue to partner with clients on pragmatic, scalable digital transformation initiatives that adapt quickly to new challenges.",
    ],
    technologies: [
      "JavaScript",
      "TypeScript",
      "Amazon S3",
      "MongoDB",
      "PostgreSQL",
      "Next.js",
      "React",
      "Fastify",
      "Express.js",
      "Hono",
      "Vue.js",
      "tRPC",
      "MySQL",
      "Redis",
    ],
  },
  {
    id: 3,
    role: "Software Developer Intern",
    company: "Proxym-IT",
    location: "Sousse, Tunisia",
    date: "Feb 2025 - Jun 2025",
    description: [
      "Delivered a connected restaurant platform that merged real-time chat messaging with an immersive VR dining experience to elevate guest engagement.",
      "Implemented a production-ready stack covering mobile, backend services, and supporting infrastructure for seamless deployment.",
    ],
    technologies: [
      "Flutter",
      "Spring Boot",
      "Hibernate ORM",
      "PostgreSQL",
      "AR Core",
      "OneSignal SDK",
      "Docker",
    ],
  },
  {
    id: 4,
    role: "Software Engineer",
    company: "Solugent",
    location: "Sousse, Tunisia (Remote)",
    date: "Nov 2024 - May 2025",
    description: [
      "Co-built an AI-powered tendering assistant that helps businesses streamline bidding workflows and secure their first tender opportunities.",
      "Focused on refining onboarding flows and simplifying setup to improve customer activation and time-to-value.",
    ],
    technologies: [
      "Node.js",
      "React",
      "Next.js",
      "Prisma ORM",
      "PostgreSQL",
      "Software Architecture",
      "Docker",
    ],
  },
  {
    id: 5,
    role: "Full-Stack Web Developer Intern",
    company: "Joodlab",
    location: "Sousse, Tunisia (Remote)",
    date: "Jun 2024 - Aug 2024",
    description: [
      "Developed and maintained client web platforms and companion mobile applications across multiple verticals.",
      "Delivered full-stack features while coordinating closely with product and design stakeholders to meet tight iterations.",
    ],
    technologies: [
      "Vue.js",
      "Turborepo",
      "TypeScript",
      "Fastify",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
    ],
  },
  {
    id: 6,
    role: "Freelance Software Engineer",
    company: "Self-Employed",
    location: "Remote",
    date: "2020 - Present",
    description: [
      "Design, build, and maintain bespoke web and mobile products for startups and SMEs with a focus on UX polish and scalability.",
      "Provide long-term support, rapid iteration, and technical consulting tailored to each client's roadmap and budget.",
    ],
    technologies: [
      "Flutter",
      "React",
      "Vue.js",
      "TypeScript",
      "Express.js",
      "Fastify",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
      "Spring Boot",
      "More on Request",
    ],
  },
];

const ExperienceCard = ({
  experience,
}: {
  experience: (typeof experiences)[0];
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-bold text-[#3d352b]">
              {experience.role}
            </h3>
            <div className="flex items-center gap-2 text-lg font-medium text-[#b58905] mt-1">
              <Briefcase className="w-5 h-5" />
              <span>{experience.company}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-gray-500 text-sm md:text-right">
            <div className="flex items-center gap-2 md:justify-end">
              <Calendar className="w-4 h-4" />
              <span>{experience.date}</span>
            </div>
            <div className="flex items-center gap-2 md:justify-end">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <ul className="space-y-3">
            {experience.description.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-600 leading-relaxed"
              >
                <span className="mt-2 w-1.5 h-1.5 bg-[#b58905] rounded-full shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technologies Marquee */}
      <div className="bg-gray-50 py-4 border-t border-gray-100">
        <div className="flex items-center gap-4 px-8 mb-3">
          <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Tech Stack
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:30s]">
            {experience.technologies.map((tech) => (
              <div
                key={tech}
                className="mx-4 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-gray-600 font-medium text-sm whitespace-nowrap hover:border-[#b58905] hover:text-[#b58905] transition-colors"
              >
                {tech}
              </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-gray-50 dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-gray-50 dark:from-background"></div>
        </div>
      </div>
    </div>
  );
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#fcfcfc]">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-linear-to-b from-[#f8f1e6] via-[#f2e3c8] to-[#fcfcfc] text-[#3d352b] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pattern-grid-lg text-[#e0cfa6]"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Professional <span className="text-[#b58905]">Experience</span>
          </h1>
          <p className="text-lg md:text-xl text-[#5f564b] max-w-2xl mx-auto leading-relaxed">
            A curated look at the roles, projects, and stacks that shaped my
            path across startups, product studios, and freelance collaborations.
          </p>
        </div>
      </section>

      {/* Experience List */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-12">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>
    </main>
  );
}
