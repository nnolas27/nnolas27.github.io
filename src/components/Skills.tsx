import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      color: 'primary',
      skills: ['AWS EC2', 'EKS', 'RDS', 'VPC', 'IAM', 'Azure AKS', 'ACR', 'VNets', 'Managed Identity']
    },
    {
      title: 'Infrastructure & Automation',
      color: 'terminal-green', 
      skills: ['Terraform', 'Helmfile', 'Jenkins', 'GitHub Actions', 'GitLab CI/CD', 'Docker']
    },
    {
      title: 'Programming Languages',
      color: 'code-blue',
      skills: ['.NET 8', 'C#', 'Python', 'Bash', 'PowerShell', 'YAML', 'HCL']
    },
    {
      title: 'Networking & Security',
      color: 'neon-pink',
      skills: ['BGP', 'OSPF', 'IPSec VPN', 'MPLS', 'VPC Peering', 'Load Balancers', 'Fortinet', 'Cisco ASA']
    },
    {
      title: 'Observability & Monitoring',
      color: 'accent',
      skills: ['Elasticsearch', 'Kibana', 'Prometheus', 'Grafana', 'Fluent Bit', 'S3 Snapshots']
    },
    {
      title: 'Databases & Storage',
      color: 'primary',
      skills: ['PostgreSQL', 'DynamoDB', 'SQL Server', 'RDS', 'KMS Encryption']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-glow mb-4">
            <span className="text-terminal-green">{'{'}</span>
            <span className="text-primary">Skills</span>
            <span className="text-terminal-green">{'}'}</span>
          </h2>
          <p className="text-xl text-muted-foreground font-mono">
            const expertise = await loadTechStack();
          </p>
          <div className="w-24 h-1 bg-gradient-cyber mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex}
              className={`bg-card/30 backdrop-blur-sm border-${category.color}/20 hover:border-${category.color}/40 transition-all duration-300 animate-slide-up group hover:cyber-glow`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className={`font-mono text-lg text-${category.color} group-hover:text-glow transition-all duration-300`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className={`text-xs border-${category.color}/30 text-${category.color} hover:bg-${category.color}/10 hover:border-${category.color}/50 transition-all duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Terminal Command Simulation */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 cyber-glow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-muted-foreground font-mono text-sm ml-4">skills-terminal</span>
              </div>
            </CardHeader>
            <CardContent className="font-mono space-y-2">
              <div className="text-terminal-green">
                <span className="text-muted-foreground">$</span> grep -r "expertise" /dev/nihal/skills
              </div>
              <div className="text-foreground pl-4">
                <div className="text-primary">./cloud-platforms/aws: ████████████ 95%</div>
                <div className="text-terminal-green">./cloud-platforms/azure: ███████████░ 90%</div>
                <div className="text-code-blue">./automation/terraform: ████████████ 96%</div>
                <div className="text-neon-pink">./programming/dotnet: ███████████░ 88%</div>
                <div className="text-accent">./orchestration/k8s: ██████████░░ 85%</div>
              </div>
              <div className="text-terminal-green pt-2">
                <span className="text-muted-foreground">$</span> echo "Ready for your next challenge!" 
                <span className="animate-terminal-blink text-primary">|</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;