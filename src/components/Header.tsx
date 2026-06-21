"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const navLinks = [
    { label: "PERSONAL TRAINING", href: "/services" },
    { label: "WHY QUATRE", href: "/about" },
    { label: "CLIENT RESULTS", href: "/results" },
    { label: "TRAINERS", href: "/trainers" },
    { label: "QUATRE MERCH", href: "/merch" },
    { label: "FITLINE", href: "/fitline" },
    { label: "GALLERY", href: "/gallery" },
    { label: "CALCULATORS", href: "/calculator" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileMenu
          ? "bg-transparent border-transparent"
          : "bg-white/80 backdrop-blur-md border-b border-gray-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group relative z-50" onClick={() => setMobileMenu(false)}>
          <Image
            src="/logoquatre.png"
            alt="Quatre Logo"
            width={32}
            height={32}
            className={`object-contain transition-all duration-300 ${mobileMenu ? "brightness-0 invert" : ""}`}
          />
          <span
            className={`font-sans font-black text-xl tracking-[0.2em] transition-colors duration-300 ${
              mobileMenu ? "text-white" : "text-black"
            }`}
          >
            QUATRE<span className="text-maroon">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-[10.5px] font-extrabold tracking-[0.15em]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative py-1.5 transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-maroon after:w-full"
                  : "text-black/70 hover:text-maroon after:w-0"
              } after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-maroon hover:after:w-full after:transition-all after:duration-300`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="bg-maroon border border-maroon text-white hover:bg-black hover:border-black transition-all text-[10.5px] tracking-[0.2em] font-extrabold px-6 py-2.5 duration-300 uppercase rounded-none"
          >
            ENQUIRE NOW
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 transition-colors duration-300 relative z-50 ${
            mobileMenu ? "text-white hover:text-maroon" : "text-black hover:text-maroon"
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle Menu"
        >
          {mobileMenu ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-black text-white z-40 flex flex-col justify-between p-8 pt-24 pb-8 animate-in fade-in slide-in-from-right duration-300">
          <div className="absolute top-0 right-0 w-64 h-64 bg-maroon/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col space-y-2 overflow-y-auto mt-4">
            {navLinks.map((link, idx) => (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-baseline gap-4 py-2 border-b border-white/5 hover:text-maroon transition-colors group ${
                  isActive(link.href) ? "text-maroon" : "text-white/80"
                }`}
                onClick={() => setMobileMenu(false)}
              >
                <span className="text-[10px] text-maroon font-mono tracking-widest uppercase">
                  0{idx + 1}.
                </span>
                <span className="text-[14.5px] font-black tracking-[0.2em] uppercase group-hover:translate-x-1.5 transition-transform duration-200">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-4">
            <Link
              href="/contact"
              className="bg-maroon text-white text-center py-3.5 text-[11px] font-extrabold tracking-[0.2em] hover:bg-white hover:text-black transition-all uppercase rounded-none"
              onClick={() => setMobileMenu(false)}
            >
              ENQUIRE NOW
            </Link>
            <div className="flex flex-col gap-1 text-center text-xs text-gray-400">
              <p className="font-black text-white tracking-widest text-[9px] uppercase">
                QUATRE FITNESS
              </p>
              <a href="https://wa.me/6581379850" className="hover:text-maroon transition-colors font-semibold text-[10px]">
                WhatsApp: +65 8137 9850
              </a>
              <p className="text-[9px] text-gray-600">© 2026 D'Quatre Fitness Group Pte Ltd.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
