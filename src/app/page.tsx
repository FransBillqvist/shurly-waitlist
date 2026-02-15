import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-background">
        <Features />
        <div className="bg-muted/20">
          <HowItWorks />
        </div>
        <CTA />
      </div>
    </>
  );
}
