"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Funktioner", href: "#funktioner" },
  { label: "Hur det fungerar", href: "#hur-det-fungerar" },
  { label: "Kom igång", href: "#kom-igang" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // Small delay to allow menu to close
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="border-b border-neutral-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold text-neutral-900">
            Shurly
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              size="sm"
              className="bg-neutral-900 text-white hover:bg-neutral-800 text-sm px-4 h-9"
              onClick={() => handleNavClick("#kom-igang")}
            >
              Kom igång
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-600 hover:text-neutral-900 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              {isMenuOpen ? (
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200">
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block text-sm text-neutral-600 hover:text-neutral-900 cursor-pointer py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <Button
                  size="sm"
                  className="bg-neutral-900 text-white hover:bg-neutral-800 w-full"
                  onClick={() => handleNavClick("#kom-igang")}
                >
                  Kom igång
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;