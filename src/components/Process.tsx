import { Clapperboard, Pencil, Video, TrendingUp } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <Pencil className="w-8 h-8" />,
      title: "Scenariusz",
      description: "Tworzymy koncepcję i scenariusz, który opowiada historię Twojej marki",
    },
    {
      icon: <Clapperboard className="w-8 h-8" />,
      title: "Nagranie",
      description: "Profesjonalny sprzęt, doświadczona ekipa i perfekcyjna realizacja",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Montaż",
      description: "Obróbka, efekty, korekta kolorów – każdy detal ma znaczenie",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Publikacja & Analiza",
      description: "Publikujemy materiały i analizujemy wyniki, aby maksymalizować efekty",
    },
  ];

  return (
    <section id="process" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Nasz <span className="text-gradient">Proces</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Od pomysłu do publikacji – kompleksowa obsługa produkcji wideo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-card/20 backdrop-blur-sm p-8 rounded-lg border border-border/30 hover:border-primary/50 transition-smooth h-full">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                  {index + 1}
                </div>
                <div className="text-primary mb-4 mt-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
