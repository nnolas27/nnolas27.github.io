import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'NIHAL SINGH';
  const subtitle = 'Cloud & Platform Engineer';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Cyberpunk technology background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 gradient-hero"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Terminal Window */}
        <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-8 cyber-glow">
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-muted-foreground font-mono text-sm ml-4">portfolio.sh</span>
          </div>

          {/* Terminal Content */}
          <div className="space-y-4 text-left font-mono">
            <div className="text-terminal-green">
              <span className="text-muted-foreground">$</span> whoami
            </div>
            <div className="text-4xl md:text-6xl font-bold text-glow">
              {displayText}
              <span className="animate-terminal-blink text-primary">|</span>
            </div>
            <div className="text-primary text-xl md:text-2xl mt-2">
              {subtitle}
            </div>
            <div className="text-muted-foreground mt-4">
              <span className="text-terminal-green">$</span> cat experience.txt
            </div>
            <div className="text-foreground">
              4+ years • AWS & Azure • Kubernetes • Terraform • Gold Medalist
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button variant="outline" size="lg" className="group hover:border-primary hover:text-primary">
              <Mail className="mr-2 h-4 w-4 group-hover:text-primary" />
              Contact
            </Button>
            <Button variant="outline" size="lg" className="group hover:border-terminal-green hover:text-terminal-green">
              <Linkedin className="mr-2 h-4 w-4 group-hover:text-terminal-green" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="group hover:border-code-blue hover:text-code-blue">
              <Github className="mr-2 h-4 w-4 group-hover:text-code-blue" />
              GitHub
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 text-primary/30 animate-float">
          <div className="font-mono text-sm">{'{ cloud: "architect" }'}</div>
        </div>
        <div className="absolute bottom-20 right-10 text-terminal-green/30 animate-float" style={{ animationDelay: '1s' }}>
          <div className="font-mono text-sm">terraform apply</div>
        </div>
        <div className="absolute top-1/3 right-20 text-code-blue/30 animate-float" style={{ animationDelay: '2s' }}>
          <div className="font-mono text-sm">kubectl get pods</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;