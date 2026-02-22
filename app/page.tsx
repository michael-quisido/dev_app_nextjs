"use client";

import Image from "next/image";
import Link from "next/link";
import TypewriterText from "@/components/TypewriterText";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const menuItems = ["Home", "Products", "Reviews", "Blog", "About Us"];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col pt-5 pl-5 pr-5 relative z-10">
      {/* Mobile Header */}
      <div className="md:hidden flex flex-col">
        {/* Social Icons - Top Right */}
        <div className="flex items-center justify-end gap-3 pr-[20px] mobile-fly-in-left" style={{ animationDelay: '0.2s' }}>
          <a href="#" className="transition-transform hover:scale-110">
            <FaLinkedin size={24} color="#939393" />
          </a>
          <a href="#" className="transition-transform hover:scale-110">
            <FaFacebook size={24} color="#939393" />
          </a>
          <a href="#" className="transition-transform hover:scale-110">
            <FaInstagram size={24} color="#939393" />
          </a>
          <a href="#" className="transition-transform hover:scale-110">
            <FaYoutube size={24} color="#939393" />
          </a>
        </div>
        {/* Logo + KMCQ GmbH - Left Side */}
        <div className="flex flex-col items-start pl-[5px]">
          <div className="flex items-center gap-2">
            <div className="fade-in-3s">
              <Image
                src="/kmcq-cloud-company-white-logo.png"
                alt="KMCQ Company Logo"
                width={150}
                height={58}
                unoptimized
                loading="eager"
                className="w-[90px]"
                style={{ height: 'auto' }}
              />
            </div>
            <TypewriterText 
              text="KMCQ GmbH" 
              className="font-ubuntu text-white text-[24px] font-bold tracking-wide"
              delay={2000}
            />
          </div>
          {/* Hamburger Icon - Below Logo and KMCQ GmbH */}
          <button 
            className="text-white p-2 mt-2 mobile-fly-in-right"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="flex flex-col items-start mt-4 space-y-4 z-50">
            {menuItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="font-ubuntu text-[20px] text-white hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex flex-col">
        <div className="flex flex-col md:flex-row items-start md:justify-between">
          <div className="flex items-center gap-2 pl-[5px] pt-[5px]">
            <div className="fade-in-3s">
              <Image
                src="/kmcq-cloud-company-white-logo.png"
                alt="KMCQ Company Logo"
                width={150}
                height={58}
                unoptimized
                loading="eager"
                className="w-[90px] sm:w-[110px] md:w-[120px]"
                style={{ height: 'auto' }}
              />
            </div>
            <TypewriterText 
              text="KMCQ GmbH" 
              className="font-ubuntu text-white text-[24px] sm:text-[30px] md:text-[40px] font-bold tracking-wide translate-x-[3px] md:translate-y-[35px]"
              delay={2000}
            />
          </div>
          <div className="flex flex-col items-end pt-[10px] md:pt-[50px] pr-[20px] mr-[-1px]">
            <div className="flex items-center gap-[55px] pb-[5px] md:pb-[10px] mt-[-17px] md:mt-[-17px]">
              <form action="https://www.google.com/search" method="get" target="_blank" className="hidden md:flex items-center slide-in-left-3s" style={{ width: 171, height: 30 }}>
                <input
                  type="text"
                  name="q"
                  placeholder="Search..."
                  className="w-full h-full px-3 rounded-l text-black text-sm bg-white"
                  style={{ width: 171, height: 30 }}
                />
                <button
                  type="submit"
                  className="flex items-center justify-center px-2 h-full rounded-r bg-gray-200"
                  style={{ height: 30 }}
                >
                  <FaSearch size={16} color="#666" />
                </button>
              </form>
              <div className="flex items-center gap-[17px] slide-in-left-4s">
                <a href="#" className="transition-transform hover:scale-110">
                  <FaLinkedin size={30} color="#939393" style={{ height: 30, width: 'auto' }} />
                </a>
                <a href="#" className="transition-transform hover:scale-110">
                  <FaFacebook size={30} color="#939393" style={{ height: 30, width: 'auto' }} />
                </a>
                <a href="#" className="transition-transform hover:scale-110">
                  <FaInstagram size={30} color="#939393" style={{ height: 30, width: 'auto' }} />
                </a>
                <a href="#" className="transition-transform hover:scale-110">
                  <FaYoutube size={30} color="#939393" style={{ height: 30, width: 'auto' }} />
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-[5px] md:gap-[45px] mt-[17px]">
              {menuItems.map((item, index) => (
                <div 
                  key={item} 
                  className="fade-in-4s px-2 py-1 rounded"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    backgroundColor: hoveredIndex === index ? 'white' : 'transparent'
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link
                    href="#"
                    className="font-ubuntu text-[17px] transition-colors"
                    style={{ color: hoveredIndex === index ? 'black' : 'white' }}
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <h1 className="font-ubuntu text-white text-[35px] sm:text-[50px] md:text-[70px] font-bold text-center tracking-wide">
          <TypewriterText 
            text="Unlock Your Digital Future." 
            delay={3000}
          />
        </h1>
      </div>
    </div>
  );
}
