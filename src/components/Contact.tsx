import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, Linkedin, Github, MapPin, Download, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'niihalsinghh@gmail.com',
      href: 'mailto:niihalsinghh@gmail.com',
      color: 'primary'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+1 (602) 785-2912',
      href: 'tel:+16027852912',
      color: 'terminal-green'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      value: '/nihaalsinghh',
      href: 'https://www.linkedin.com/in/nihaalsinghh',
      color: 'code-blue'
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      value: '/nnolas27',
      href: 'https://github.com/nnolas27',
      color: 'neon-pink'
    }
  ];

  const quickLinks = [
    {
      title: 'Resume/CV',
      description: 'Download full professional resume',
      icon: <Download className="h-5 w-5" />,
      action: 'Download PDF',
      color: 'primary'
    },
    {
      title: 'Research Publication',
      description: 'University Fitness Center Data Analysis',
      icon: <ExternalLink className="h-5 w-5" />,
      action: 'View Paper',
      href: 'https://turcomat.org/index.php/turkbilmat/article/view/7802/6162',
      color: 'terminal-green'
    },
    {
      title: 'Schedule Meeting',
      description: 'Let\'s discuss your next project',
      icon: <Mail className="h-5 w-5" />,
      action: 'Book Call',
      color: 'code-blue'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-glow mb-4">
            <span className="text-code-blue">const</span>
            <span className="text-foreground"> </span>
            <span className="text-primary">contact</span>
            <span className="text-foreground"> = </span>
            <span className="text-terminal-green">await fetch</span>
            <span className="text-foreground">(</span>
            <span className="text-neon-pink">'nihal'</span>
            <span className="text-foreground">)</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            // Let's build something amazing together
          </p>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 cyber-glow mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-mono text-primary text-glow">Get In Touch</CardTitle>
                <CardDescription className="text-lg text-foreground">
                  Ready to discuss your next cloud infrastructure project or exploring opportunities? 
                  I'm always interested in innovative challenges and collaborative solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {contactInfo.map((contact, index) => (
                    <Card 
                      key={index}
                      className={`bg-card/30 border-${contact.color}/20 hover:border-${contact.color}/40 transition-all duration-300 group cursor-pointer animate-slide-up`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => window.open(contact.href, '_blank')}
                    >
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-${contact.color}/10 border border-${contact.color}/20 text-${contact.color} group-hover:cyber-glow transition-all duration-300`}>
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-muted-foreground">{contact.label}</div>
                          <div className={`font-mono text-${contact.color} group-hover:text-glow transition-all duration-300`}>
                            {contact.value}
                          </div>
                        </div>
                        <ExternalLink className={`h-4 w-4 text-${contact.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Current Status */}
            <Card className="bg-card/50 backdrop-blur-sm border-terminal-green/20 terminal-glow">
              <CardHeader>
                <CardTitle className="text-xl font-mono text-terminal-green">Current Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-terminal-green animate-pulse"></div>
                  <span className="text-foreground">Available for new opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-code-blue" />
                  <span className="text-foreground">Dallas, TX (Open to relocation)</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="border-primary/30 text-primary">Platform Engineering</Badge>
                  <Badge variant="outline" className="border-terminal-green/30 text-terminal-green">Cloud Architecture</Badge>
                  <Badge variant="outline" className="border-code-blue/30 text-code-blue">DevOps Leadership</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <h3 className="text-xl font-mono text-accent mb-4">Quick Actions</h3>
            {quickLinks.map((link, index) => (
              <Card 
                key={index}
                className={`bg-card/30 border-${link.color}/20 hover:border-${link.color}/40 transition-all duration-300 group cursor-pointer animate-slide-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => link.href && window.open(link.href, '_blank')}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${link.color}/10 border border-${link.color}/20 text-${link.color}`}>
                      {link.icon}
                    </div>
                    <CardTitle className={`text-lg font-mono text-${link.color} group-hover:text-glow transition-all duration-300`}>
                      {link.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-muted-foreground mb-4">
                    {link.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`w-full group-hover:border-${link.color} group-hover:text-${link.color} transition-all duration-300`}
                  >
                    {link.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Terminal Command */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 cyber-glow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-muted-foreground font-mono text-sm ml-4">connect.sh</span>
              </div>
            </CardHeader>
            <CardContent className="font-mono space-y-2">
              <div className="text-terminal-green">
                <span className="text-muted-foreground">$</span> ./connect.sh --professional --collaborative
              </div>
              <div className="text-foreground pl-4 space-y-1">
                <div>Initializing connection...</div>
                <div className="text-primary">✓ Cloud engineering expertise: Ready</div>
                <div className="text-terminal-green">✓ Problem-solving mindset: Active</div>
                <div className="text-code-blue">✓ Team collaboration: Optimized</div>
                <div className="text-neon-pink">✓ Innovation pipeline: Full capacity</div>
                <div className="text-accent pt-2">Status: Ready to architect your next solution! 🚀</div>
              </div>
              <div className="text-terminal-green pt-2">
                <span className="text-muted-foreground">$</span> echo "Let's build the future together!" 
                <span className="animate-terminal-blink text-primary">|</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;