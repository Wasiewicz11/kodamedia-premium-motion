import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up opacity-0 [animation-delay:200ms]">
          Tworzymy filmy
          <br />
          <span className="text-gradient glow-text">które sprzedają</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto animate-fade-in-up opacity-0 [animation-delay:400ms]">
          Premium wideo marketing dla marek wymagających doskonałości.
          <br />
          Od koncepcji do konwersji.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 [animation-delay:600ms]">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8 py-6 animate-glow"
            onClick={scrollToContact}
          >
            Rozpocznij Projekt
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 text-foreground hover:bg-primary/10 font-semibold text-lg px-8 py-6"
            onClick={() => {
              const element = document.getElementById("work");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Zobacz Nasze Prace
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto animate-fade-in opacity-0 [animation-delay:800ms]">
          {[
            { number: "500+", label: "Zrealizowanych Projektów" },
            { number: "50M+", label: "Wygenerowanych Wyświetleń" },
            { number: "200+", label: "Zadowolonych Klientów" },
            { number: "15+", label: "Zdobytych Nagród" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
