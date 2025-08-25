import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer – Platform Engineering',
      company: "Moody's Corporation",
      location: 'Dallas, TX',
      period: 'Aug 2024 – Present',
      type: 'current',
      achievements: [
        'Designed secure SSH credential management system using .NET 8, Keeper SDK, and Terraform across AWS and Azure',
        'Automated SSH key creation, rotation, and deployment into EC2 and Azure VMs using platform-agnostic abstractions',
        'Developed Terraform modules for EKS, PostgreSQL, MSSQL, and Jump Host with KMS encryption, IAM, and dynamic AMI retrieval',
        'Automated provisioning of Elasticsearch observability stack (multi-tier) on EKS/AKS using Helmfile with S3 snapshot support'
      ],
      technologies: ['.NET 8', 'Terraform', 'AWS EKS', 'Azure AKS', 'Keeper SDK', 'Elasticsearch', 'Helmfile']
    },
    {
      title: 'Cloud Network Engineer',
      company: 'LTIMindtree',
      location: 'Remote',
      period: 'Jan 2024 – Aug 2024',
      type: 'previous',
      achievements: [
        'Provisioned secure cloud network architectures using Azure VNETs, private endpoints, and ExpressRoute with Terraform',
        'Deployed scalable infrastructure via IaC and configured Azure Load Balancers, NSGs, and VPN gateways for hybrid cloud',
        'Built CI/CD pipelines for network config testing and resource provisioning using GitHub Actions'
      ],
      technologies: ['Azure', 'Terraform', 'GitHub Actions', 'VNETs', 'ExpressRoute', 'NSGs']
    },
    {
      title: 'Cloud Network Engineering Intern',
      company: 'MTA Solutions',
      location: 'Palmer, AK',
      period: 'Jul 2023 – Dec 2023',
      type: 'internship',
      achievements: [
        'Built and monitored hybrid network solutions connecting on-prem and cloud via Direct Connect and VPNs',
        'Analyzed routing issues using BGP and OSPF and optimized traffic flow for multi-site data centers',
        'Configured Fortinet firewall policies and managed SolarWinds network alerting dashboards'
      ],
      technologies: ['AWS Direct Connect', 'BGP', 'OSPF', 'Fortinet', 'SolarWinds', 'VPN']
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'current': return 'primary';
      case 'previous': return 'terminal-green';
      case 'internship': return 'code-blue';
      default: return 'muted';
    }
  };

  const getTypeBorder = (type: string) => {
    switch (type) {
      case 'current': return 'border-primary/20';
      case 'previous': return 'border-terminal-green/20';
      case 'internship': return 'border-code-blue/20';
      default: return 'border-muted/20';
    }
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-glow mb-4">
            <span className="text-code-blue">while</span>
            <span className="text-foreground">(</span>
            <span className="text-primary">building</span>
            <span className="text-foreground">)</span>
            <span className="text-terminal-green">{'{'}</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            // Professional Journey & Impact
          </p>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto rounded-full mt-4"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-cyber"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-${getTypeColor(exp.type)} border-4 border-background z-10 glow-pulse`}></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <Card className={`bg-card/50 backdrop-blur-sm ${getTypeBorder(exp.type)} hover:border-${getTypeColor(exp.type)}/40 transition-all duration-300 group hover:cyber-glow`}>
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <CardTitle className={`text-xl font-mono text-${getTypeColor(exp.type)} group-hover:text-glow transition-all duration-300`}>
                            {exp.title}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-2 text-foreground">
                            <Building className="h-4 w-4" />
                            {exp.company}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className={`border-${getTypeColor(exp.type)}/30 text-${getTypeColor(exp.type)} text-xs`}>
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm">
                            <span className={`text-${getTypeColor(exp.type)} mr-2 mt-1 text-xs`}>▸</span>
                            <span className="text-foreground leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex flex-wrap gap-1 mt-4">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex}
                            variant="outline" 
                            className={`text-xs border-${getTypeColor(exp.type)}/20 text-${getTypeColor(exp.type)} hover:bg-${getTypeColor(exp.type)}/10 transition-colors`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Summary */}
        <div className="mt-16">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 cyber-glow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-muted-foreground font-mono text-sm ml-4">career-impact.sh</span>
              </div>
            </CardHeader>
            <CardContent className="font-mono space-y-2">
              <div className="text-terminal-green">
                <span className="text-muted-foreground">$</span> calculate_impact --years=4 --projects=10+
              </div>
              <div className="text-foreground pl-4 space-y-1">
                <div>✓ Automated infrastructure deployments across AWS & Azure</div>
                <div>✓ Implemented secure multi-cloud credential management</div>
                <div>✓ Built observability stacks for enterprise applications</div>
                <div>✓ Optimized CI/CD pipelines & network architectures</div>
                <div className="text-primary">→ Result: Enhanced platform reliability & security</div>
              </div>
              <div className="text-terminal-green pt-2">
                <span className="text-muted-foreground">$</span> echo "Continuous learning & innovation!" 
                <span className="animate-terminal-blink text-primary">|</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;