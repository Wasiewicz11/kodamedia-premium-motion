import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Services", "Work", "About", "Contact"];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="fixed top-6 left-6 right-6 z-50">
      <nav
        className={`transition-smooth backdrop-blur-2xl bg-background/30 border border-border/20 rounded-2xl ${
          isScrolled ? "py-4 shadow-2xl" : "py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold tracking-tight text-gradient glow-text">
          KODAMEDIA
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <Button
            variant="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            onClick={() => scrollToSection("contact")}
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-6 px-6 space-y-4 animate-fade-in backdrop-blur-2xl bg-background/40 rounded-xl border border-border/20">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-foreground/80 hover:text-foreground py-2 transition-smooth"
              >
                {item}
              </button>
            ))}
            <Button
              variant="default"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              Let's Talk
            </Button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
