"use client";

import Reveal from "@/components/Reveal";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const productLinks = [
  { label: "Funktioner", href: "#funktioner" },
  { label: "Hur det fungerar", href: "#hur-det-fungerar" },
  { label: "Priser", href: "#" },
  { label: "API", href: "#" },
];

const legalLinks = [
  { label: "Integritetspolicy", href: "#" },
  { label: "Användarvillkor", href: "#" },
  { label: "Cookiepolicy", href: "#" },
];

const Footer = () => {
  return (
    <Reveal animation="fade">
      <footer className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="text-xl font-bold tracking-tight">
                Shurly
              </Link>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                Sveriges smartaste URL-förkortare. Vi har som mål att hjälpa svenska företag och kreatörer att nå
                längre med kortare länkar.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold">Produkt</h3>
              <ul className="mt-3 space-y-2">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold">Juridiskt</h3>
              <ul className="mt-3 space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Shurly. Alla rättigheter förbehållna.
          </p>
        </div>
      </footer>
    </Reveal>
  );
};

export default Footer;
