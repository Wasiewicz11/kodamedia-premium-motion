import { Play } from "lucide-react";

const Portfolio = () => {
  const verticalProjects = [
    {
      title: "Kampania Social Media",
      category: "Instagram Reels",
      challenge: "Klient chciał zwiększyć zasięgi w social media",
      solution: "Stworzyliśmy serię dynamicznych materiałów w pionie",
      result: "500% wzrost zasięgów w 2 miesiące",
    },
    {
      title: "TikTok Marketing",
      category: "TikTok",
      challenge: "Start marki na nowej platformie",
      solution: "Opracowaliśmy strategię content i nagraliśmy serię viralowych filmów",
      result: "100K obserwujących w pierwszy miesiąc",
    },
    {
      title: "Stories dla E-commerce",
      category: "Stories",
      challenge: "Niska konwersja z social media",
      solution: "Codzienne stories produktowe z linkami do sklepu",
      result: "200% wzrost sprzedaży z Instagram",
    },
  ];

  const horizontalProjects = [
    {
      title: "Film Brandowy Premium",
      category: "Brand Story",
      challenge: "Firma potrzebowała nowoczesnej prezentacji marki",
      solution: "Nakręciliśmy kinowy film opowiadający historię marki i jej wartości",
      result: "Film obejrzany 2.5M razy, wzrost rozpoznawalności o 300%",
    },
    {
      title: "Kampania Reklamowa TV",
      category: "Reklama",
      challenge: "Klient chciał wejść do telewizji z produktem premium",
      solution: "Pełna produkcja – od scenariusza po finalne efekty specjalne",
      result: "Kampania w prime time, 5M wyświetleń, ROI 450%",
    },
  ];

  return (
    <section id="work" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Wybrane <span className="text-gradient">Projekty</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Prezentacja naszych najbardziej efektownych projektów, które przyniosły realne wyniki dla naszych klientów.
          </p>
        </div>

        {/* Vertical Videos */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {verticalProjects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-[9/16] bg-card/30 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer border border-border/30"
            >
              {/* Placeholder for video thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/40" />
              
              {/* Overlay with play button */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-smooth">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-sm text-primary font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-lg font-bold mb-3">{project.title}</h3>
                <div className="text-sm text-foreground/80 space-y-1">
                  <p><span className="text-primary">•</span> {project.challenge}</p>
                  <p><span className="text-primary">•</span> {project.solution}</p>
                  <p className="font-semibold text-foreground"><span className="text-primary">✓</span> {project.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal Videos */}
        <div className="grid md:grid-cols-2 gap-6">
          {horizontalProjects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-video bg-card/30 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer border border-border/30"
            >
              {/* Placeholder for video thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-background/50" />
              
              {/* Overlay with play button */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-smooth">
                  <Play className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                <div className="text-sm text-primary font-semibold mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <div className="text-sm text-foreground/80 space-y-2">
                  <p><span className="text-primary font-bold">Co chcieli:</span> {project.challenge}</p>
                  <p><span className="text-primary font-bold">Co zrobiliśmy:</span> {project.solution}</p>
                  <p className="font-semibold text-foreground text-base"><span className="text-primary">✓</span> {project.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
