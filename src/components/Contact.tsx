import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Wiadomość wysłana!",
      description: "Odezwiemy się w ciągu 24 godzin.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Stwórzmy coś
              <br />
              <span className="text-gradient glow-text">niesamowitego razem</span>
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Gotowy na podniesienie marki z treściami wideo, które konwertują? Skontaktuj się z nami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Skontaktuj się</h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Mail />,
                      label: "Email",
                      value: "hello@kodamedia.com",
                    },
                    {
                      icon: <Phone />,
                      label: "Telefon",
                      value: "+1 (555) 123-4567",
                    },
                    {
                      icon: <MapPin />,
                      label: "Lokalizacja",
                      value: "Warszawa, Polska",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-foreground/60 mb-1">
                          {item.label}
                        </div>
                        <div className="text-foreground">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Obserwuj Nas</h3>
                <div className="flex gap-4">
                  {["Instagram", "LinkedIn", "Vimeo", "YouTube"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-smooth text-sm font-medium"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Twoje Imię"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-secondary border-border/50 text-foreground"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Twój Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-secondary border-border/50 text-foreground"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Opowiedz nam o swoim projekcie..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="bg-secondary border-border/50 text-foreground resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              >
                Wyślij Wiadomość
                <Send className="ml-2" size={18} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
