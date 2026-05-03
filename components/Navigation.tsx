"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/schoonmaakdiensten", label: "SCHOONMAAKDIENSTEN" },
    { path: "/over-mij", label: "OVER MIJ" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/images/image.png" alt="D.T.G. Cleaning Logo" className="h-12 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-bold tracking-wide transition-colors ${
                  pathname === link.path ? "text-[#1a3a52]" : "text-gray-700 hover:text-[#1a3a52]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:0634683019" className="flex items-center space-x-2 text-[#1a3a52]">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">06-34683019</span>
            </a>
            <Link href="/contact" className="bg-[#1a3a52] hover:bg-[#2c4a66] text-white rounded-full px-6 py-2 font-semibold">
              Gratis offerte
            </Link>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} onClick={() => setIsMobileMenuOpen(false)} className="font-bold">
                  {link.label}
                </Link>
              ))}
              <a href="tel:0634683019" className="flex items-center text-[#1a3a52]">
                <Phone className="w-4 h-4 mr-2" /> 06-34683019
              </a>
              <Link href="/contact" className="bg-[#1a3a52] text-white rounded-full py-3 text-center font-semibold">
                Gratis offerte
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
