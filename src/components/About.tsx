import { Award, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Crafting stories that
                <br />
                <span className="text-gradient glow-text">move markets</span>
              </h2>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                We're a collective of filmmakers, storytellers, and strategists obsessed with creating videos that don't just look beautiful—they perform.
              </p>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Every frame is intentional. Every cut drives action. We combine cinematic artistry with data-driven strategy to deliver content that converts.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: <Award />, text: "Award-winning creative team" },
                  { icon: <Users />, text: "200+ brands trust us" },
                  { icon: <Zap />, text: "Fast turnaround, premium quality" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Creative Visual */}
            <div className="relative">
              <div className="aspect-square rounded-lg bg-card/30 backdrop-blur-sm border border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-background/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-bold text-gradient mb-4">500+</div>
                    <div className="text-xl text-foreground/70">Projects That Performed</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/20 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-primary/10 animate-pulse [animation-delay:1s]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
