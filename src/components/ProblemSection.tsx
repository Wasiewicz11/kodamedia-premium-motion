const ProblemSection = () => {
  return (
    <section className="py-20 border-t border-border/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Twoi klienci są w internecie.
            <br />
            Ale czy <span className="text-gradient">trafiają do Ciebie?</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-card/20 backdrop-blur-sm rounded-lg border border-border/30">
              <p className="text-foreground/70">
                Stara, nieaktualna strona, która nie buduje zaufania
              </p>
            </div>
            <div className="p-6 bg-card/20 backdrop-blur-sm rounded-lg border border-border/30">
              <p className="text-foreground/70">
                Brak profesjonalnych materiałów wideo, które przyciągają uwagę
              </p>
            </div>
            <div className="p-6 bg-card/20 backdrop-blur-sm rounded-lg border border-border/30">
              <p className="text-foreground/70">
                Chaos w komunikacji i obsłudze zapytań klientów
              </p>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
            Dlatego stworzyliśmy <span className="font-bold text-gradient">KodaMedia</span> – łączymy design, wideo i technologię, żeby Twój biznes był widoczny i skuteczny online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
