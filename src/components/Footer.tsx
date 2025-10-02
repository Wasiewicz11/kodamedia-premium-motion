const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-gradient glow-text mb-2">
              KODAMEDIA
            </div>
            <p className="text-foreground/60 text-sm">
              Premium wideo marketing, który działa
            </p>
          </div>

          <div className="flex gap-8 text-sm text-foreground/60">
            <a href="#" className="hover:text-primary transition-smooth">
              Polityka Prywatności
            </a>
            <a href="#" className="hover:text-primary transition-smooth">
              Regulamin
            </a>
            <a href="#" className="hover:text-primary transition-smooth">
              Kariera
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-foreground/50">
          © {currentYear} KODAMEDIA. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
