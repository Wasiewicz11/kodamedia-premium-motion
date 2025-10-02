import { Video, Globe, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Marketing",
      description: "Kompleksowa produkcja wideo – od scenariusza, przez nagranie i montaż, po publikację i analizę wyników. Reklamy, social media, brand storytelling i filmy korporacyjne.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Strony WWW",
      description: "Nowoczesne, szybkie strony internetowe, które konwertują. Pełne strony firmowe i dedykowane landing pages zoptymalizowane pod kątem sprzedaży.",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Strategia Marketingowa",
      description: "Kompleksowe podejście do budowania obecności online. Analiza, strategia komunikacji i optymalizacja działań marketingowych.",
    },
  ];

  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Nasze <span className="text-gradient">Usługi</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Oferujemy kompleksowe usługi produkcji wideo dostosowane do unikalnych potrzeb Twojej marki.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-border/50 hover:border-primary/50 transition-smooth hover:transform hover:scale-105"
            >
              <div className="text-primary mb-4 transform group-hover:scale-110 transition-smooth">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-smooth">
                {service.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
