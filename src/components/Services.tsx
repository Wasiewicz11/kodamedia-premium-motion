import { Video, Megaphone, Sparkles, Film } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Produkcja Reklamowa",
      description: "Efektowne reklamy, które przyciągają uwagę i zwiększają konwersje. Od koncepcji do finalnego montażu.",
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Treści Social Media",
      description: "Wirusowe treści zoptymalizowane pod każdą platformę. Krótkie filmy, które zatrzymują wzrok.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Brand Storytelling",
      description: "Kinowe narracje, które łączą emocjonalnie i budują trwałą lojalność marki.",
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Pełna Produkcja Filmowa",
      description: "Kompleksowe usługi produkcyjne ze sprzętem światowej klasy i nagradzaną ekipą.",
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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
