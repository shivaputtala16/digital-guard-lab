import { ExternalLink, BookOpen, Shield } from "lucide-react";

const resources = [
  {
    title: "OWASP Authentication Cheat Sheet",
    description: "Comprehensive guide to authentication best practices",
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
  },
  {
    title: "NIST Digital Identity Guidelines",
    description: "Official standards for digital identity and authentication",
    url: "https://pages.nist.gov/800-63-3/",
  },
  {
    title: "Microsoft Security Documentation",
    description: "Enterprise authentication and security guidance",
    url: "https://docs.microsoft.com/en-us/security/",
  },
];

const Footer = () => {
  return (
    <footer className="py-24 bg-gradient-subtle border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Continue Your{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Learning Journey
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore these trusted resources to deepen your understanding of authentication and cybersecurity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-foreground/70">{resource.description}</p>
              </a>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card border border-border mb-12 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-center">Key Takeaways</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">
                    Authentication verifies identity before granting access to systems
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">
                    Three factors: knowledge, possession, and inherence (biometrics)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">
                    Multi-factor authentication provides significantly stronger security
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">
                    Biometric systems offer convenience but require careful privacy protection
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">
                    Strong passwords and secure storage are fundamental best practices
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-foreground/80">
                    Ethical implementation respects user privacy and complies with regulations
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center py-8 border-t border-border">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AuthSecure
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Educational demonstrator for understanding authentication security
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              No actual authentication data is collected or stored by this demonstration
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
