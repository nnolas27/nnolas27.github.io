import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="certifications">
          <Certifications />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-sm border-t border-primary/20 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="font-mono text-sm text-muted-foreground">
            <div className="text-primary mb-2">
              {'>'} Built with passion, powered by innovation_
            </div>
            <div>
              © 2024 Nihal Singh. All rights reserved.
            </div>
            <div className="mt-2 text-xs">
              <span className="text-terminal-green">React</span>
              <span className="text-muted-foreground"> • </span>
              <span className="text-code-blue">TypeScript</span>
              <span className="text-muted-foreground"> • </span>
              <span className="text-neon-pink">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
