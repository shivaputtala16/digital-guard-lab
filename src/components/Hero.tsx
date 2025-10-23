import heroImage from "@/assets/hero-security.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Secure Authentication{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Demonstrator
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Understanding How Digital Identity Protection Works
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Authentication is the cornerstone of cybersecurity, verifying user identity before granting access to systems and data. 
              In our increasingly digital world, robust authentication methods protect sensitive information from unauthorized access, 
              ensuring that only legitimate users can access critical resources.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#about"
                className="px-6 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-glow transition-all duration-300"
              >
                Learn More
              </a>
              <a
                href="#mfa"
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Explore MFA
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in-slow">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img
              src={heroImage}
              alt="Secure Authentication Visualization"
              className="relative rounded-2xl shadow-card w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
