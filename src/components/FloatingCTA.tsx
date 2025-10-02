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
        className="backdrop-blur-2xl bg-primary/90 hover:bg-primary text-primary-foreground shadow-2xl border border-primary/20 rounded-full px-6 py-6 font-semibold transition-smooth hover:scale-105"
      >
        <Calendar className="w-5 h-5 mr-2" />
        Bezpłatna Konsultacja
      </Button>
    </div>
  );
};

export default FloatingCTA;
