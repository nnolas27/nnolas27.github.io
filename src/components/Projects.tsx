import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Lock, Database, Cloud, Monitor } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Secure Multi-Cloud Credential Management',
      description: 'Enterprise-grade SSH credential management system with automated rotation and secure deployment across AWS and Azure environments.',
      year: '2024',
      icon: <Lock className="h-6 w-6" />,
      color: 'primary',
      technologies: ['.NET 8', 'Keeper SDK', 'Terraform', 'AWS', 'Azure', 'SSH Automation'],
      highlights: [
        'Platform-agnostic credential abstraction layer',
        'Automated SSH key lifecycle management', 
        'Secure deployment to EC2 & Azure VMs',
        'Integration with CI/CD pipelines'
      ],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'EKS/AKS Observability Stack Deployment',
      description: 'Fully automated provisioning of Elasticsearch, Kibana, and Prometheus using Infrastructure as Code for comprehensive observability.',
      year: '2024',
      icon: <Monitor className="h-6 w-6" />,
      color: 'terminal-green',
      technologies: ['Terraform', 'Helmfile', 'Elasticsearch', 'Kibana', 'Prometheus', 'S3', 'IAM'],
      highlights: [
        'Multi-tier node pool architecture',
        'Environment-specific Helm configurations',
        'Wildcard DNS & certificate automation',
        'S3 snapshot retention policies'
      ],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Terraform RDS Modules',
      description: 'Reusable Infrastructure as Code modules for AWS RDS PostgreSQL and MSSQL with advanced security and automation features.',
      year: '2024',
      icon: <Database className="h-6 w-6" />,
      color: 'code-blue',
      technologies: ['Terraform', 'AWS RDS', 'PostgreSQL', 'MSSQL', 'KMS', 'IAM'],
      highlights: [
        'Optional KMS encryption configuration',
        'IAM database authentication support',
        'Dynamic naming & tagging system',
        'Control-plane compatibility layer'
      ],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'University Fitness Center Data Analysis',
      description: 'IoT sensor data analysis using machine learning for predictive analytics and anomaly detection in fitness center operations.',
      year: '2023',
      icon: <Cloud className="h-6 w-6" />,
      color: 'neon-pink',
      technologies: ['Python', 'XGBoost', 'AWS SageMaker', 'IoT Sensors', 'Machine Learning'],
      highlights: [
        'Predictive analytics implementation',
        'Real-time anomaly detection',
        '25% operational efficiency improvement',
        'Published research paper'
      ],
      links: {
        demo: 'https://turcomat.org/index.php/turkbilmat/article/view/7802/6162',
        github: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-glow mb-4">
            <span className="text-neon-pink">class</span>
            <span className="text-foreground"> </span>
            <span className="text-primary">Projects</span>
            <span className="text-terminal-green"> extends Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            // Building solutions that matter
          </p>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`bg-card/30 backdrop-blur-sm border-${project.color}/20 hover:border-${project.color}/40 transition-all duration-300 group hover:cyber-glow animate-slide-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg bg-${project.color}/10 border border-${project.color}/20 text-${project.color}`}>
                    {project.icon}
                  </div>
                  <Badge variant="outline" className={`border-${project.color}/30 text-${project.color} text-xs`}>
                    {project.year}
                  </Badge>
                </div>
                
                <CardTitle className={`text-xl font-mono text-${project.color} group-hover:text-glow transition-all duration-300 mt-4`}>
                  {project.title}
                </CardTitle>
                
                <CardDescription className="text-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Highlights */}
                <div>
                  <h4 className="text-sm font-mono text-accent mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start text-sm">
                        <span className={`text-${project.color} mr-2 mt-1 text-xs`}>▸</span>
                        <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-mono text-accent mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline" 
                        className={`text-xs border-${project.color}/20 text-${project.color} hover:bg-${project.color}/10 transition-colors`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`group hover:border-${project.color} hover:text-${project.color} flex-1`}
                    onClick={() => window.open(project.links.demo, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-3 w-3" />
                    View Project
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`group hover:border-terminal-green hover:text-terminal-green`}
                    onClick={() => window.open(project.links.github, '_blank')}
                  >
                    <Github className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
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
                <span className="text-muted-foreground font-mono text-sm ml-4">project-stats.py</span>
              </div>
            </CardHeader>
            <CardContent className="font-mono space-y-2">
              <div className="text-terminal-green">
                <span className="text-muted-foreground">$</span> python analyze_projects.py --portfolio
              </div>
              <div className="text-foreground pl-4 space-y-1">
                <div className="text-primary">Scanning repositories...</div>
                <div>├── Multi-cloud implementations: <span className="text-terminal-green">✓ Active</span></div>
                <div>├── Infrastructure automation: <span className="text-terminal-green">✓ Production</span></div>
                <div>├── Observability solutions: <span className="text-terminal-green">✓ Deployed</span></div>
                <div>└── Research publications: <span className="text-code-blue">✓ Published</span></div>
                <div className="text-neon-pink pt-2">Total impact: Enterprise-grade solutions ⚡</div>
              </div>
              <div className="text-terminal-green pt-2">
                <span className="text-muted-foreground">$</span> echo "Innovation never stops!" 
                <span className="animate-terminal-blink text-primary">|</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;