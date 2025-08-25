import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      year: '2024',
      color: 'primary',
      category: 'Cloud Architecture',
      description: 'Expertise in designing distributed systems and applications on AWS',
      skills: ['EC2', 'S3', 'VPC', 'IAM', 'RDS', 'CloudFormation']
    },
    {
      title: 'Microsoft Certified: Azure Solutions Architect Expert',
      issuer: 'Microsoft',
      year: '2023',
      color: 'code-blue',
      category: 'Cloud Architecture',
      description: 'Advanced skills in Azure infrastructure, security, and governance',
      skills: ['Azure VNets', 'AKS', 'ARM Templates', 'Azure AD', 'Storage']
    },
    {
      title: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      year: '2023',
      color: 'neon-pink',
      category: 'Infrastructure as Code',
      description: 'Infrastructure automation and provisioning expertise',
      skills: ['HCL', 'State Management', 'Modules', 'Providers', 'Workspaces']
    },
    {
      title: 'AWS AI Practitioner (AIF-C01)',
      issuer: 'Amazon Web Services',
      year: '2023',
      color: 'terminal-green',
      category: 'Artificial Intelligence',
      description: 'AI/ML services implementation and best practices',
      skills: ['SageMaker', 'Bedrock', 'Comprehend', 'Rekognition', 'ML Ops']
    },
    {
      title: 'Cisco Certified Network Associate – CCNA',
      issuer: 'Cisco Systems',
      year: '2023',
      color: 'accent',
      category: 'Networking',
      description: 'Network fundamentals, routing, and switching expertise',
      skills: ['BGP', 'OSPF', 'VLANs', 'Switch Configuration', 'IP Routing']
    }
  ];

  const education = [
    {
      degree: 'M.S. in Software Engineering (Computer Engineering)',
      institution: 'Arizona State University',
      location: 'Tempe, AZ',
      year: '2023',
      gpa: '4.0',
      honor: 'Gold Medalist',
      color: 'primary'
    },
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Institute of Aeronautical Engineering',
      location: 'Hyderabad, India',
      year: '2021',
      gpa: '3.6',
      honor: '',
      color: 'terminal-green'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-glow mb-4">
            <span className="text-accent">import</span>
            <span className="text-foreground"> </span>
            <span className="text-primary">credentials</span>
            <span className="text-foreground"> from </span>
            <span className="text-terminal-green">'./achievements'</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            // Validated expertise & continuous learning
          </p>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto rounded-full mt-4"></div>
        </div>

        {/* Certifications Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-mono text-primary mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className={`bg-card/30 backdrop-blur-sm border-${cert.color}/20 hover:border-${cert.color}/40 transition-all duration-300 group hover:cyber-glow animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className={`p-2 rounded-lg bg-${cert.color}/10 border border-${cert.color}/20 text-${cert.color}`}>
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className={`border-${cert.color}/30 text-${cert.color} text-xs mb-1`}>
                        {cert.year}
                      </Badge>
                      <div className="text-xs text-muted-foreground">{cert.category}</div>
                    </div>
                  </div>
                  
                  <CardTitle className={`text-lg font-mono text-${cert.color} group-hover:text-glow transition-all duration-300 leading-tight`}>
                    {cert.title}
                  </CardTitle>
                  
                  <CardDescription className="text-foreground font-medium">
                    {cert.issuer}
                  </CardDescription>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline" 
                        className={`text-xs border-${cert.color}/20 text-${cert.color} hover:bg-${cert.color}/10 transition-colors`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-mono text-terminal-green mb-8 text-center">Academic Excellence</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className={`bg-card/50 backdrop-blur-sm border-${edu.color}/20 hover:border-${edu.color}/40 transition-all duration-300 group hover:cyber-glow animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-lg bg-${edu.color}/10 border border-${edu.color}/20 text-${edu.color}`}>
                      <Award className="h-6 w-6" />
                    </div>
                    <div className="text-right">
                      <Badge variant="outline" className={`border-${edu.color}/30 text-${edu.color} text-xs mb-1`}>
                        {edu.year}
                      </Badge>
                      {edu.honor && (
                        <div className="text-xs text-neon-pink font-semibold">{edu.honor}</div>
                      )}
                    </div>
                  </div>
                  
                  <CardTitle className={`text-xl font-mono text-${edu.color} group-hover:text-glow transition-all duration-300 mt-4`}>
                    {edu.degree}
                  </CardTitle>
                  
                  <CardDescription className="text-foreground font-medium">
                    {edu.institution}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between mt-3 text-sm text-muted-foreground">
                    <span>{edu.location}</span>
                    <span className="font-mono">GPA: <span className={`text-${edu.color} font-semibold`}>{edu.gpa}</span></span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievement Stats Terminal */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 cyber-glow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-muted-foreground font-mono text-sm ml-4">achievements.json</span>
              </div>
            </CardHeader>
            <CardContent className="font-mono space-y-2">
              <div className="text-terminal-green">
                <span className="text-muted-foreground">$</span> cat achievements.json | jq '.summary'
              </div>
              <div className="text-foreground pl-4 space-y-1">
                <div>{'{'}</div>
                <div className="pl-4 space-y-1">
                  <div>"certifications": <span className="text-primary">5</span>,</div>
                  <div>"degrees": <span className="text-terminal-green">2</span>,</div>
                  <div>"gpa_masters": <span className="text-neon-pink">4.0</span>,</div>
                  <div>"awards": [<span className="text-code-blue">"Gold Medal"</span>],</div>
                  <div>"learning_status": <span className="text-accent">"continuous"</span></div>
                </div>
                <div>{'}'}</div>
              </div>
              <div className="text-terminal-green pt-2">
                <span className="text-muted-foreground">$</span> echo "Excellence is a habit!" 
                <span className="animate-terminal-blink text-primary">|</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;