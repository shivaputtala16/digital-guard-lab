import { ArrowRight, CheckCircle2 } from "lucide-react";

const MFASection = () => {
  const steps = [
    {
      step: 1,
      title: "User Login Attempt",
      description: "User enters their username and password",
      icon: "👤",
    },
    {
      step: 2,
      title: "Password Verification",
      description: "System validates the password (Something You Know)",
      icon: "🔑",
    },
    {
      step: 3,
      title: "Second Factor Request",
      description: "System requests additional verification",
      icon: "📱",
    },
    {
      step: 4,
      title: "Biometric Confirmation",
      description: "User provides fingerprint or face scan (Something You Are)",
      icon: "👆",
    },
    {
      step: 5,
      title: "Access Granted",
      description: "All factors verified - secure access provided",
      icon: "✅",
    },
  ];

  return (
    <section id="mfa" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Multi-Factor{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Authentication
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining multiple authentication factors provides significantly stronger security than single-factor authentication
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <h3 className="text-2xl font-bold mb-4 text-center">Why MFA Matters</h3>
            <p className="text-foreground/80 text-center mb-6">
              Even if one factor is compromised, attackers still need to bypass additional security layers. 
              This dramatically reduces the risk of unauthorized access.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-sm text-muted-foreground">Reduction in account compromise with MFA</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-accent mb-2">3+</div>
                <p className="text-sm text-muted-foreground">Authentication factors for maximum security</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-primary mb-2">Millions</div>
                <p className="text-sm text-muted-foreground">Organizations worldwide using MFA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">MFA Login Flow</h3>
          <div className="relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-primary opacity-30" />
            
            <div className="grid md:grid-cols-5 gap-8 relative">
              {steps.map((item, index) => (
                <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                  {/* Mobile arrow */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="h-6 w-6 text-primary rotate-90" />
                    </div>
                  )}
                  
                  <div className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-glow transition-all duration-300 h-full flex flex-col">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-3xl mb-4 mx-auto">
                      {item.icon}
                    </div>
                    <div className="text-center mb-3">
                      <div className="text-sm font-semibold text-primary mb-1">Step {item.step}</div>
                      <h4 className="text-lg font-bold">{item.title}</h4>
                    </div>
                    <p className="text-sm text-foreground/70 text-center flex-grow">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 bg-primary/10 border border-primary/30 rounded-2xl p-8 animate-fade-in">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-bold mb-2">Security Best Practice</h4>
              <p className="text-foreground/80">
                Always enable MFA when available, especially for critical accounts like email, banking, and work systems. 
                The extra few seconds during login provide exponentially greater protection against cyber threats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MFASection;
