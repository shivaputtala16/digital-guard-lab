import { Shield, Lock, Eye, Database, UserCheck, AlertCircle } from "lucide-react";

const practices = [
  {
    icon: Lock,
    title: "Strong Passwords",
    tips: [
      "Use at least 12 characters with mixed case, numbers, and symbols",
      "Avoid common words, names, or predictable patterns",
      "Use a unique password for each account",
      "Consider using a password manager for secure storage",
    ],
  },
  {
    icon: Database,
    title: "Secure Storage",
    tips: [
      "Never store passwords in plain text",
      "Use encryption for sensitive authentication data",
      "Implement secure key management practices",
      "Regularly audit and rotate credentials",
    ],
  },
  {
    icon: UserCheck,
    title: "Biometric Consent",
    tips: [
      "Always obtain explicit user consent before collecting biometric data",
      "Provide clear information about data usage and storage",
      "Allow users to opt-out and use alternative methods",
      "Comply with privacy regulations like GDPR and CCPA",
    ],
  },
  {
    icon: Shield,
    title: "Additional Security",
    tips: [
      "Enable MFA on all accounts that support it",
      "Keep software and systems updated with security patches",
      "Monitor account activity for suspicious behavior",
      "Use secure networks and avoid public Wi-Fi for sensitive logins",
    ],
  },
];

const BestPractices = () => {
  return (
    <section id="best-practices" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Best Practices &{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Privacy
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Essential guidelines for implementing and using authentication systems securely and ethically
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {practices.map((practice, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                  <practice.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{practice.title}</h3>
              </div>
              <ul className="space-y-3">
                {practice.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-destructive/10 border-2 border-destructive/50 rounded-2xl p-8 animate-fade-in">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Ethical & Legal Considerations</h3>
                <div className="space-y-4 text-foreground/80">
                  <p>
                    <strong>Privacy First:</strong> Biometric data is highly sensitive and personal. Organizations must 
                    implement robust privacy protections, transparent data handling policies, and comply with applicable 
                    data protection laws.
                  </p>
                  <p>
                    <strong>Legal Compliance:</strong> Authentication systems must adhere to regulations such as GDPR 
                    (Europe), CCPA (California), BIPA (Illinois), and other jurisdiction-specific laws governing biometric 
                    data collection and usage.
                  </p>
                  <p>
                    <strong>User Rights:</strong> Users have the right to access, correct, or delete their authentication 
                    data. Systems should provide clear mechanisms for exercising these rights and revoking consent.
                  </p>
                  <p>
                    <strong>Security by Design:</strong> Authentication systems should be built with security as a 
                    fundamental principle, not an afterthought. This includes encryption, secure transmission, 
                    access controls, and regular security audits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPractices;
