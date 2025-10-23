import { Shield, AlertTriangle, CheckCircle2, Eye } from "lucide-react";
import biometricImage from "@/assets/biometric-concept.jpg";

const BiometricSection = () => {
  return (
    <section id="biometric" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Biometric Security
            </span>{" "}
            Explained
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A conceptual overview of how biometric authentication systems work and their role in modern security
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">How It Works</h3>
                <p className="text-foreground/80">
                  Biometric systems capture unique physical or behavioral characteristics, convert them into digital 
                  templates, and compare them against stored data for authentication. Common methods include fingerprint 
                  scanning, facial recognition, iris scanning, and voice analysis.
                </p>
              </div>
            </div>

            <div className="p-6 bg-accent/10 border border-accent/30 rounded-xl">
              <p className="text-sm text-foreground/90 flex items-start gap-2">
                <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Educational Purpose:</strong> This demonstration uses no real biometric data. 
                  All information is conceptual and designed for learning about authentication security principles.
                </span>
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in-slow">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img
              src={biometricImage}
              alt="Biometric Authentication Concept"
              className="relative rounded-2xl shadow-card w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold">Advantages</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-foreground/80"><strong>Unique Identity:</strong> Biometric traits are unique to each individual</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-foreground/80"><strong>Convenience:</strong> No need to remember passwords or carry tokens</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-foreground/80"><strong>Non-transferable:</strong> Cannot be easily shared or stolen like passwords</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                <span className="text-foreground/80"><strong>Fast Authentication:</strong> Quick verification process for users</span>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card border border-border animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <h3 className="text-2xl font-bold">Limitations & Risks</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-foreground/80"><strong>Spoofing:</strong> Advanced techniques can replicate biometric data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-foreground/80"><strong>Privacy Concerns:</strong> Sensitive data requires secure storage and handling</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-foreground/80"><strong>Permanent Compromise:</strong> Unlike passwords, biometrics cannot be changed</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <span className="text-foreground/80"><strong>False Positives/Negatives:</strong> System accuracy can vary</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiometricSection;
