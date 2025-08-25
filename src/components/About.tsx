import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const highlights = [
    'AWS Certified Solutions Architect',
    'Azure Solutions Architect Expert',
    'HashiCorp Terraform Associate',
    'Gold Medalist - 4.0 GPA',
    '4+ Years Experience',
    'Multi-Cloud Expert'
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-glow mb-4">
            <span className="text-primary">{'<'}</span>
            About
            <span className="text-primary">{'/>'}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 animate-slide-up">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 cyber-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-mono text-primary">System.out.println("Hello, World!");</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg leading-relaxed text-foreground">
                  Cloud & Platform Engineer with <span className="text-primary font-semibold">4+ years</span> of hands-on experience 
                  across AWS, Azure, Kubernetes, and Terraform. I architect and deploy robust cloud infrastructure with a focus on 
                  automation, security, and scalability.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  Currently at <span className="text-terminal-green font-semibold">Moody's Corporation</span>, I design secure SSH 
                  credential management systems, automate observability stack deployments, and lead platform migration efforts using 
                  cutting-edge technologies like .NET 8, Terraform, and Kubernetes.
                </p>

                <div className="pt-4">
                  <h3 className="text-xl font-mono text-accent mb-3">Core Expertise:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="text-primary mr-2">▸</span>
                      Multi-cloud architecture & automation
                    </li>
                    <li className="flex items-center">
                      <span className="text-terminal-green mr-2">▸</span>
                      CI/CD pipelines & DevOps practices  
                    </li>
                    <li className="flex items-center">
                      <span className="text-code-blue mr-2">▸</span>
                      Kubernetes orchestration & observability
                    </li>
                    <li className="flex items-center">
                      <span className="text-neon-pink mr-2">▸</span>
                      Infrastructure as Code (Terraform)
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Achievements & Stats */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-card/50 backdrop-blur-sm border-terminal-green/20 terminal-glow">
              <CardHeader>
                <CardTitle className="font-mono text-terminal-green">Achievements.json</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-secondary/20 rounded-lg border border-primary/10">
                    <div className="text-3xl font-bold text-primary">4+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded-lg border border-terminal-green/10">
                    <div className="text-3xl font-bold text-terminal-green">4.0</div>
                    <div className="text-sm text-muted-foreground">GPA Gold Medal</div>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded-lg border border-code-blue/10">
                    <div className="text-3xl font-bold text-code-blue">5</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </div>
                  <div className="p-4 bg-secondary/20 rounded-lg border border-neon-pink/10">
                    <div className="text-3xl font-bold text-neon-pink">∞</div>
                    <div className="text-sm text-muted-foreground">Lines of Code</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-code-blue/20">
              <CardHeader>
                <CardTitle className="font-mono text-code-blue">Professional Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((highlight, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;