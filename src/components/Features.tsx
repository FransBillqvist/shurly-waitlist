"use client";

import Reveal from "@/components/Reveal";
import { BarChart3, Globe, Paintbrush, QrCode, Shield, Zap } from "lucide-react";
import Pill from "./custom/Pill";

const features: {
  icon: typeof Zap;
  title: string;
  description: string;
  comingSoon?: boolean;
}[] = [
  {
    icon: Zap,
    title: "Blixtsnabba länkar",
    description: "Våra länkar laddas på millisekunder, oavsett trafikvolym.",
  },
  {
    icon: BarChart3,
    title: "Kraftfull analys",
    description: "Detaljerad statistik i realtid - klick, enheter, platser och referrers.",
  },
  {
    icon: Shield,
    title: "Säker & pålitlig",
    description: "HTTPS överallt, GDPR-anpassad och 99.9% upptid garanterad.",
  },
  {
    icon: QrCode,
    title: "QR-koder inkluderat",
    description: "Automatiska QR-koder för varje länk - perfekt för print och events.",
    comingSoon: true,
  },
];

const Features = () => {
  return (
    <section id="funktioner" className="py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl flex flex-col justify-center mx-auto items-center gap-4">
          <Reveal>
            <Pill title="Varför välja Shurly?" />
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Allt du behöver för professionell länkförkortning
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-muted-foreground text-lg sm:text-xl">
              Kraftfulla funktioner som är byggda för den svenska marknaden. Enkelt att komma igång,
              kraftfullt nog för företag.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={300 + index * 100}>
              <div className="relative bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                {feature.comingSoon && (
                  <span className="absolute top-4 right-4 text-xs font-semibold bg-amber-500/15 text-amber-500 px-2.5 py-1 rounded-full border border-amber-500/20">
                    Kommer snart
                  </span>
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-6">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
