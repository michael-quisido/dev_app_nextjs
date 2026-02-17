"use client";

import Image from "next/image";
import Link from "next/link";
import TypewriterText from "@/components/TypewriterText";
import { useState } from "react";

export default function Home() {
  const menuItems = ["Home", "Products", "Reviews", "Blog", "About Us"];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen flex-col pt-5 pl-5 pr-5 relative z-10">
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
              className="w-[90px] sm:w-[110px] md:w-[150px]"
              style={{ height: 'auto' }}
            />
          </div>
          <TypewriterText 
            text="KMCQ COMPANY" 
            className="font-ubuntu text-white text-[24px] sm:text-[30px] md:text-[40px] font-bold tracking-wide translate-x-[3px] md:translate-y-[35px]"
            delay={2000}
          />
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-[5px] md:gap-[45px] pt-[15px] md:pt-[120px] pr-[20px]">
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
                className="font-ubuntu text-[15px] transition-colors"
                style={{ color: hoveredIndex === index ? 'black' : 'white' }}
              >
                {item}
              </Link>
            </div>
          ))}
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
