"use client";

import { useState, useEffect } from "react";
import logoImg from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useContact } from "@/app/_context/contact-context";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openContact } = useContact();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About me", href: "/#about" },
    { name: "Experience", href: "/experience" },
    { name: "Showcase", href: "/showcase" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gray-200">
            <Image src={logoImg} alt="Logo" fill className="object-cover" />
          </div>
          <span
            className={cn(
              "text-xl font-bold tracking-tight",
              scrolled ? "text-black" : "text-black"
            )}
          >
            Ahmed Amine Doudech
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-[#b58905] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button
            onClick={openContact}
            className="bg-[#b58905] hover:bg-[#9a7504] text-white rounded-full px-6"
          >
            Contact me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg md:hidden flex flex-col p-4 gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-700 hover:text-[#b58905] py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button
            onClick={() => {
              setIsOpen(false);
              openContact();
            }}
            className="w-full bg-[#b58905] hover:bg-[#9a7504] text-white rounded-full"
          >
            Contact me
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
