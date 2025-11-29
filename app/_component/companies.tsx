import React from "react";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import ddesign from "@/assets/companies/ddesign.jpg";
import flexacode from "@/assets/companies/flexacode.png";
import jetfi from "@/assets/companies/jetfi.png";
import solugent from "@/assets/companies/solugent.png";
import houtafresh from "@/assets/companies/houtafresh.png";

const companies = [
  { name: "DDesign", logo: ddesign },
  { name: "Flexacode", logo: flexacode },
  { name: "JetFi", logo: jetfi },
  { name: "Solugent", logo: solugent },
  { name: "Houtafresh", logo: houtafresh },
];

const Companies = () => {
  return (
    <section className="w-full py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
        <h3 className="text-xl font-semibold text-center text-gray-500 uppercase tracking-widest">
          My freelance services have been trusted by
        </h3>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {companies.map((company) => (
            <div
              key={company.name}
              className="mx-8 flex items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={company.name}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
};

export default Companies;
