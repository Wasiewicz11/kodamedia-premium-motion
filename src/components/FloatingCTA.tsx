import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
      <Button
        onClick={scrollToContact}
        className="backdrop-blur-2xl bg-background/30 hover:bg-background/40 text-foreground border border-border/20 rounded-2xl px-6 py-4 font-semibold transition-smooth hover:scale-105 shadow-2xl"
      >
        <Calendar className="w-5 h-5 mr-2" />
        Umów bezpłatną konsultację
      </Button>
    </div>
  );
};

export default FloatingCTA;
