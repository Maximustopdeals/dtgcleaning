"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/schoonmaakdiensten", label: "SCHOONMAAKDIENSTEN" },
    { path: "/over-mij", label: "OVER MIJ" },
    { path: "/contact", label: "CONTACT" },
    { 
      label: "WERKGEBIED", 
      isDropdown: true,
      subpages: [
        { path: "/werkgebied/nijkerk", label: "Nijkerk" },
        { path: "/werkgebied/putten", label: "Putten" },
        { path: "/werkgebied/harderwijk", label: "Harderwijk" },
        { path: "/werkgebied/barneveld", label: "Barneveld" },
        { path: "/werkgebied/ermelo", label: "Ermelo" },
        { path: "/werkgebied/voorthuizen", label: "Voorthuizen" },
      ]
    },
  ];

  // Controleer of een subpagina actief is
  const isActiveSubpage = (subpages: { path: string }[]) => {
    return subpages.some(sub => pathname === sub.path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/images/image.png" alt="D.T.G. Cleaning Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.path || link.label} className="relative group">
                {link.isDropdown ? (
                  <>
                    <button 
                      className={`flex items-center text-sm font-bold tracking-wide transition-colors ${
                        isActiveSubpage(link.subpages!) ? "text-[#1a3a52]" : "text-gray-700 hover:text-[#1a3a52]"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {link.subpages?.map((sub) => (
                        <Link
                          key={sub.path}
                          href={sub.path}
                          className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                            pathname === sub.path ? "text-[#1a3a52] font-semibold bg-gray-50" : "text-gray-700"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.path!}
                    className={`text-sm font-bold tracking-wide transition-colors ${
                      pathname === link.path ? "text-[#1a3a52]" : "text-gray-700 hover:text-[#1a3a52]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:0634683019" className="flex items-center space-x-2 text-[#1a3a52]">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">06-34683019</span>
            </a>
            <Link href="/contact" className="bg-[#1a3a52] hover:bg-[#2c4a66] text-white rounded-full px-6 py-2 font-semibold">
              Gratis offerte
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <div key={link.path || link.label}>
                  {link.isDropdown ? (
                    <>
                      <button 
                        onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                        className="w-full text-left font-bold flex items-center justify-between text-gray-800"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                      </button>
                      {openDropdown === link.label && (
                        <div className="pl-4 mt-2 space-y-2">
                          {link.subpages?.map((sub) => (
                            <Link 
                              key={sub.path} 
                              href={sub.path} 
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`block text-sm ${
                                pathname === sub.path ? "text-[#1a3a52] font-semibold" : "text-gray-600 hover:text-[#1a3a52]"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link 
                      href={link.path!} 
                      onClick={() => setIsMobileMenuOpen(false)} 
                      className={`font-bold block ${
                        pathname === link.path ? "text-[#1a3a52]" : "text-gray-800"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
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
