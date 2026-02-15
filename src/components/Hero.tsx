"use client";

import React, { useCallback, useState } from "react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import Pill from "./custom/Pill";

const HASH_OPTIONS = [
  "q7m4z1",
  "b9tr8k",
  "xv52nq",
  "f3w8y6",
  "kz1p7d",
  "t8g2l5",
  "r0c9mv",
  "u6ja3x",
  "n4ybq8",
  "s5v1zr",
  "p2k6hx",
  "m8c4tw",
  "d7n1vf",
  "w3z9lg",
  "h5t2qr",
  "g1v8kp",
  "c6x0uj",
  "e4m7ys",
  "l9r3bw",
  "z2q5ht",
  "v1k8dm",
  "y6p4jn",
  "a5x9qz",
  "j3n7vf",
  "o4c2mt",
  "r8s1lp",
  "k9f6zw",
  "t0y3gh",
  "m7d2rq",
  "p6b5vx",
];

const Hero = () => {
  const [hashIndex, setHashIndex] = useState(0);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHashIndex((prev) => (prev + 1) % HASH_OPTIONS.length);
  }, []);

  const shortHash = HASH_OPTIONS[hashIndex];

  return (
    <section className="relative overflow-hidden pt-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)]">
          <div className="flex flex-col gap-6">
            <Reveal delay={0}>
              <Pill title="Sveriges nyaste URL-förkortare" />
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none">
                Förvandla långa länkar till <span className="text-primary">korta affärer</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-balance text-lg lg:text-xl max-w-2xl leading-relaxed">
                Enkel, snabb och pålitlig länkförkortning byggd för den svenska marknaden. Skapa
                professionella .io-länkar på sekunder och få tillgång till kraftfulla verktyg för
                att spåra och optimera din länkdelning.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="space-y-8">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 max-w-2xl"
                >
                  <Input
                    type="url"
                    placeholder="https://din-långa-länk.com/någon/lång/sökväg"
                    className="flex-1 h-12 px-4 text-base"
                    required
                  />
                  <Button type="submit" className="h-12 px-8 whitespace-nowrap">
                    Förkorta nu
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 rounded-full text-primary-foreground">
                    <Check className="h-4 w-4" />
                    <span>Gratis att testa</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full text-primary-foreground">
                    <Check className="h-4 w-4" />
                    <span>Detaljerad statistik</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={400} animation="scale">
              <div className="relative max-w-2xl mx-auto lg:max-w-none">
                <div className="relative z-10 rounded-2xl border border-border bg-card p-8 lg:p-10 shadow-2xl">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-4 w-4 rounded-full bg-red-400"></div>
                    <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
                    <div className="h-4 w-4 rounded-full bg-green-400"></div>
                    <div className="ml-6 rounded bg-muted px-3 py-2 text-sm">Shurly.io</div>
                  </div>

                  <div className="space-y-2">
                    <div className="rounded-lg bg-muted/50 p-4 lg:p-5">
                      <div className="text-sm text-muted-foreground mb-2">Ursprungslänk</div>
                      <div className="text-base lg:text-lg font-mono break-all">
                        https://example.com/very/long/url/with/many/parameters?utm_source=...
                      </div>
                    </div>
                    <div className="flex items-center justify-center py-3">
                      <ArrowDown className="h-6 w-6" />
                    </div>
                    <div className="rounded-lg bg-primary/10 p-4 lg:p-5 border-2 border-primary/20">
                      <div className="text-sm text-muted-foreground mb-2">Kort länk</div>
                      <div className="text-base lg:text-lg font-mono font-semibold">
                        Shurly.io/{shortHash}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
                    <span>✓ Skapad på 0.1s</span>
                    <span>✓ Statistik aktiverad</span>
                    <span>✓ QR-kod inkluderad</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
