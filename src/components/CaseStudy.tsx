import { ArrowRight, TrendingUp, Eye, MousePointer } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudy = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Wyróżnione Studium Przypadku
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Jak osiągnęliśmy <span className="text-gradient">300% ROI</span>
              <br />
              dla marki modowej
            </h2>
          </div>

          {/* Video Placeholder */}
          <div className="aspect-video bg-card/30 backdrop-blur-sm rounded-lg overflow-hidden mb-12 border border-primary/20">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-background/40 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
                </div>
                <p className="text-foreground/70">Podgląd Filmu Kampanii</p>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <TrendingUp />,
                metric: "300%",
                label: "Zwrot z Inwestycji",
              },
              {
                icon: <Eye />,
                metric: "5.2M",
                label: "Wyświetleń Wideo",
              },
              {
                icon: <MousePointer />,
                metric: "12%",
                label: "Wskaźnik Konwersji",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center bg-card/30 backdrop-blur-sm p-8 rounded-lg border border-border/50"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.metric}
                </div>
                <div className="text-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-foreground/70 leading-relaxed">
              Luksusowa marka modowa zwróciła się do nas o wsparcie w premierze nowej kolekcji. Stworzyliśmy multiplatformową kampanię wideo łączącą kinowe filmy brandowe z przyswajalnymi treściami social media. Rezultat? Rekordowe zaangażowanie i sprzedaż przewyższająca prognozy 3-krotnie.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg px-8"
            >
              Przeczytaj Pełne Studium
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
