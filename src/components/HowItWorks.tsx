"use client";

import Reveal from "@/components/Reveal";
import Pill from "./custom/Pill";

const steps = [
  {
    number: "01",
    title: "Klistra in din länk",
    description:
      "Kopiera vilken lång URL som helst och klistra in den i Shurly. Inget konto behövs för att komma igång.",
  },
  {
    number: "02",
    title: "Få en kort länk",
    description:
      "Vi skapar en unik, kort .io-länk på bråkdelen av en sekund med våra optimerade servrar.",
  },
  {
    number: "03",
    title: "Dela och analysera",
    description:
      "Använd din nya länk överallt och följ prestanda i realtid med detaljerad statistik.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="hur-det-fungerar"
      className="py-20 sm:py-24 lg:py-32 container mx-auto gap-12 flex flex-col"
    >
      <div className="text-center max-w-3xl flex flex-col justify-center mx-auto items-center gap-8">
        <Reveal>
          <Pill title="Så enkelt är det" />
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mb--text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Från lång länk till kort affär på 10 sekunder
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-muted-foreground text-lg sm:text-xl">
            Ingen registrering krävs. Ingen komplexitet. Bara ren, snabb länkförkortning som
            fungerar direkt.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {steps.map((step, index) => (
          <Reveal key={step.number} delay={300 + index * 150}>
            <div className="text-center flex flex-col gap-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground mb-2">
                <span className="text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
