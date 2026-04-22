"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Zap, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  {
    label: "What we do",
    href: "/what-we-do",
    children: [
      { label: "Services", href: "/what-we-do?tab=services" },
      { label: "Testing & Commissioning", href: "/what-we-do?tab=tc" },
      { label: "Installation", href: "/what-we-do?tab=installation" },
    ],
  },
  { label: "Contact us", href: "/contact" },
  { label: "Our Works", href: "/our-works" },
  { label: "Careers", href: "/careers" },
];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/95 backdrop-blur-sm shadow-sm"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 bg-[#00286D] rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-[#9DEF06]" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[#00286D] font-black text-sm md:text-base tracking-tight">SP POWER</span>
              <span className="text-[#00286D] font-semibold text-[10px] md:text-xs tracking-widest -mt-0.5">ENGINEERS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                      ? "bg-[#00286D] text-white"
                      : "text-gray-600 hover:text-[#00286D]"
                    }`}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#00286D] hover:bg-blue-50 font-medium transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden lg:flex items-center gap-2 bg-[#00286D] text-white pl-1.5 pr-6 py-1.5 rounded-full font-medium transition-all hover:bg-[#001a4a]"
            >
              <div className="w-8 h-8 rounded-full bg-[#9DEF06] flex items-center justify-center text-[#00286D]">
                <ChevronRight className="w-5 h-5" />
              </div>
              <span className="text-sm">Get Quote</span>
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg text-[#00286D]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-[#00286D] hover:bg-blue-50 rounded-lg"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 border-l-2 border-gray-100 pl-3">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-xs font-medium text-gray-500 hover:text-[#00286D]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <Link href="/contact" className="flex items-center justify-center gap-2 bg-[#00286D] text-white pl-2 pr-6 py-2 rounded-full font-medium transition-all hover:bg-[#001a4a] w-full">
                <div className="w-8 h-8 rounded-full bg-[#9DEF06] flex items-center justify-center text-[#00286D]">
                  <ChevronRight className="w-5 h-5" />
                </div>
                <span className="text-sm">Get Quote</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
