import { Key, Smartphone, Fingerprint } from "lucide-react";

const factors = [
  {
    icon: Key,
    title: "Something You Know",
    description: "Knowledge-based authentication",
    examples: ["Passwords", "PINs", "Security questions", "Passphrases"],
    color: "text-primary",
  },
  {
    icon: Smartphone,
    title: "Something You Have",
    description: "Possession-based authentication",
    examples: ["Security tokens", "Smart cards", "Mobile devices", "OTP generators"],
    color: "text-accent",
  },
  {
    icon: Fingerprint,
    title: "Something You Are",
    description: "Biometric authentication",
    examples: ["Fingerprints", "Facial recognition", "Iris scans", "Voice recognition"],
    color: "text-primary",
  },
];

const AuthFactors = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What is{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Authentication?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Authentication in cybersecurity is the process of verifying the identity of a user, device, 
            or system before granting access to protected resources. It ensures that only authorized 
            entities can access sensitive information and systems.
          </p>
        </div>

        <div className="mb-16 p-8 bg-card rounded-2xl shadow-card border border-border">
          <h3 className="text-2xl font-bold mb-4 text-center">The Three Authentication Factors</h3>
          <p className="text-center text-muted-foreground mb-8">
            Modern authentication systems rely on three fundamental types of credentials
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {factors.map((factor, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <factor.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{factor.title}</h3>
              <p className="text-muted-foreground mb-4">{factor.description}</p>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary">Examples:</p>
                <ul className="space-y-1">
                  {factor.examples.map((example, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthFactors;
