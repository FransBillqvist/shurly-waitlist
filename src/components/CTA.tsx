"use client";

import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Script from "next/script";
import { ArrowRight, Check } from "lucide-react";

const CTA = () => {
  return (
    <section id="kom-igang" className="py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center justify-center bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-wider mb-8 shadow-sm hover:shadow-md transition-all">
              <span>Kommer snart</span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Skapa korta länkar på sekunder och få insikter som hjälper dig växa.
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mb-12 text-muted-foreground text-lg sm:text-xl">
              Shurly är till för att göra det enkelt, snabbare & smartare länkdelning.
              Skriv upp dig för att få tidig tillgång.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="max-w-md mx-auto space-y-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3"
              >
                <div className="waitlister-form container mx-auto px-6 sm:px-8 lg:px-12" data-waitlist-key="CEpUlUWNBAPt" data-height="200px"></div>
              </form>
              <Script
                src="https://waitlister.me/js/embed.js"
                strategy="lazyOnload"
                onLoad={() => (window as any).Waitlister?.init?.()}
              />

              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Helt gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Ingen spam</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Avsluta när du vill</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;
