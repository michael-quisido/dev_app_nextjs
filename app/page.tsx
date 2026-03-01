"use client";

import Image from "next/image";
import Link from "next/link";
import TypewriterText from "@/components/TypewriterText";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { useState } from "react";

export default function Home() {
  const menuItems = ["Home", "Products", "Reviews", "Blog", "About Us"];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <div className="flex flex-col pt-5 pl-5 pr-5 relative z-10" style={{ marginBottom: '200px' }}>
      {/* Mobile Header */}
      <div className="md:hidden flex flex-col">
        {/* Social Icons - Top Right */}
        <div className="flex items-center justify-end gap-3 pr-[20px] mobile-fly-in-left" style={{ animationDelay: '0.2s' }}>
          <a href="#" className="transition-transform hover:scale-110" style={{ display: 'flex' }}>
            <FaLinkedin size={24} color="#939393" className="social-icon" />
          </a>
          <a href="#" className="transition-transform hover:scale-110" style={{ display: 'flex' }}>
            <FaFacebook size={24} color="#939393" className="social-icon" />
          </a>
          <a href="#" className="transition-transform hover:scale-110" style={{ display: 'flex' }}>
            <FaInstagram size={24} color="#939393" className="social-icon" />
          </a>
          <a href="#" className="transition-transform hover:scale-110" style={{ display: 'flex' }}>
            <FaYoutube size={24} color="#939393" className="social-icon" />
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
                <a href="#" className="transition-transform hover:scale-110" style={{ display: 'flex' }}>
                  <FaLinkedin size={30} color="#939393" style={{ height: 30, width: 'auto' }} className="social-icon" />
                </a>
                <a href="#" className="transition-transform hover:scale-110" style={{ display: 'flex' }}>
                  <FaFacebook size={30} color="#939393" style={{ height: 30, width: 'auto' }} className="social-icon" />
                </a>
                <a href="#" className="transition-transform hover:scale-110" style={{ display: 'flex' }}>
                  <FaInstagram size={30} color="#939393" style={{ height: 30, width: 'auto' }} className="social-icon" />
                </a>
                <a href="#" className="transition-transform hover:scale-110" style={{ display: 'flex' }}>
                  <FaYoutube size={30} color="#939393" style={{ height: 30, width: 'auto' }} className="social-icon" />
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
      <div className="flex flex-1 flex-col items-center justify-center" style={{ marginTop: '340px' }}>
        <h1 className="font-ubuntu text-white text-[35px] sm:text-[50px] md:text-[70px] font-bold text-center tracking-wide">
          <TypewriterText 
            text="Unlock Your Digital Future." 
            delay={3000}
          />
        </h1>
        <p className="font-ubuntu text-white text-[21px] text-center mt-4">
          <TypewriterText 
            text="Seamless, Secure, Scalable Cloud Solutions." 
            delay={5160}
          />
        </p>
      </div>
    </div>

    {/* Footer Grid Container - Full Width */}
    <div 
      className="w-full p-0 relative z-50" 
      style={{ 
        marginTop: '340px', 
        marginBottom: '0px', 
        paddingTop: '20px', 
        paddingBottom: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
        borderTop: '20px solid #040f2d',
        backgroundColor: '#ffffff',
        opacity: 0,
        animation: 'fadeIn 2s ease-in-out forwards',
        animationDelay: '5.2s'
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: '15px' }}>
          {/* First Row */}
          <div className="p-4 flex flex-col items-center justify-center" style={{ backgroundColor: '#c5c5c5', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)', border: '1px solid black' }}>
            <svg width="70" height="70" viewBox="0 0 24 24" fill="#040f2d"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
            <span style={{ color: '#191919', marginTop: '10px', textAlign: 'center', fontWeight: 'bold' }}>Security & Compliance</span>
          </div>
          <div className="p-4 flex flex-col items-center justify-center" style={{ backgroundColor: '#c5c5c5', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)', border: '1px solid black' }}>
            <MdSettings size={70} color="#040f2d" />
            <span style={{ color: '#191919', marginTop: '10px', textAlign: 'center', fontWeight: 'bold' }}>Innovation & Performance</span>
          </div>
          <div className="p-4 flex flex-col items-center justify-center" style={{ backgroundColor: '#c5c5c5', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)', border: '1px solid black' }}>
            <svg width="70" height="70" viewBox="0 0 24 24" fill="#040f2d"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            <span style={{ color: '#191919', marginTop: '10px', textAlign: 'center', fontWeight: 'bold' }}>Global Reach</span>
          </div>
          {/* Second Row */}
          <div className="p-4 flex flex-col items-center justify-center" style={{ backgroundColor: '#c5c5c5', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)', border: '1px solid black' }}>
            <svg width="70" height="70" viewBox="0 0 24 24" fill="#040f2d"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-2 .9-2 2v3.8h1.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7s2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>
            <span style={{ color: '#191919', marginTop: '10px', textAlign: 'center', fontWeight: 'bold' }}>AI Powered</span>
          </div>
          <div className="p-4 flex flex-col items-center justify-center" style={{ backgroundColor: '#c5c5c5', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)', border: '1px solid black' }}>
            <svg width="70" height="70" viewBox="0 0 24 24" fill="#040f2d"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            <span style={{ color: '#191919', marginTop: '10px', textAlign: 'center', fontWeight: 'bold' }}>Transparency</span>
          </div>
          <div className="p-4 flex flex-col items-center justify-center" style={{ backgroundColor: '#c5c5c5', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)', border: '1px solid black' }}>
            <svg width="70" height="70" viewBox="0 0 24 24" fill="#040f2d"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
            <span style={{ color: '#191919', marginTop: '10px', textAlign: 'center', fontWeight: 'bold' }}>Cost Savings</span>
          </div>
      </div>
    </div>
    </>
  );
}
