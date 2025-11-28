"use client";

import React from "react";
import Image from "next/image";
import thumbnailImg from "@/assets/handshake.png";
import { Button } from "@/components/ui/button";
import { useContact } from "@/app/_context/contact-context";
import { ArrowRight } from "lucide-react";

const ContactCTA = () => {
  const { openContact } = useContact();

  return (
    <section className="w-full py-20 bg-[#3d352b] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-center">
            <div className="relative bg-white p-3 pb-12 shadow-xl -rotate-3 transform transition-transform hover:rotate-0 duration-500 ease-out border border-gray-100">
              <div className="relative w-[280px] h-[200px] md:w-[320px] md:h-[220px] overflow-hidden bg-gray-100">
                <Image
                  src={thumbnailImg}
                  alt="Software Engineer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to bring your ideas to life?
            </h2>
            <p className="text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
              Whether you need a custom software solution, AI integration, or
              expert consultation, I&apos;m here to help you achieve your goals.
              Let&apos;s build something amazing together.
            </p>
            <div className="pt-4">
              <Button
                onClick={openContact}
                className="bg-[#b58905] hover:bg-[#9a7504] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
