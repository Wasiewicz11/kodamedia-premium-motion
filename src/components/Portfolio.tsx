import { Play } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Kampania Luksusowej Marki",
      category: "Reklama",
      views: "2.5M",
    },
    {
      title: "Premiera Produktu Tech",
      category: "Social Media",
      views: "5M",
    },
    {
      title: "Moda Editorial",
      category: "Film Brandowy",
      views: "1.8M",
    },
    {
      title: "Doskonałość Motoryzacji",
      category: "Reklama",
      views: "3.2M",
    },
    {
      title: "Jedzenie i Styl Życia",
      category: "Social Media",
      views: "4.5M",
    },
    {
      title: "Historia Korporacyjna",
      category: "Film Brandowy",
      views: "900K",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative aspect-video surface-darker rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Placeholder for video thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/40" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-smooth">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-smooth">
                <div className="text-sm text-primary font-semibold mb-1">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="text-sm text-foreground/60">{project.views} wyświetleń</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
