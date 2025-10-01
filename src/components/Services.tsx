import { Video, Megaphone, Sparkles, Film } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Commercial Production",
      description: "High-impact commercials that captivate audiences and drive conversions. From concept to final cut.",
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Social Media Content",
      description: "Viral-ready content optimized for every platform. Short-form videos that stop the scroll.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Brand Storytelling",
      description: "Cinematic narratives that connect emotionally and build lasting brand loyalty.",
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Full Film Production",
      description: "End-to-end production services with world-class equipment and award-winning crew.",
    },
  ];

  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            We offer comprehensive video production services tailored to your brand's unique needs.
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
