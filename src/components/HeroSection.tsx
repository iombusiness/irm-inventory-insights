import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-center px-6" style={{ background: "var(--hero-gradient)" }}>
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground tracking-tight">
          iRM
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 font-light leading-relaxed">
          Inventory Risk Mitigation
        </p>
        <p className="text-base md:text-lg text-primary-foreground/70 max-w-xl mx-auto">
          An Odoo module to reduce inventory risk and improve cashflow for your business
        </p>
        <Button
          variant="secondary"
          size="lg"
          className="mt-4"
          onClick={scrollToAbout}
        >
          Learn More <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
