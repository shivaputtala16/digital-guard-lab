import { Shield } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AuthSecure
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("biometric")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Biometric
            </button>
            <button
              onClick={() => scrollToSection("mfa")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              MFA
            </button>
            <button
              onClick={() => scrollToSection("best-practices")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Best Practices
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
