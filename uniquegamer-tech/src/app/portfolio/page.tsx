import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { GitBranch, Mail, ExternalLink, Code2, BrainCircuit, Blocks, Link as LinkedinIcon } from "lucide-react";

const profiles = [
  {
    name: "Shah Husain",
    title: "Software Engineer & AI Automation Specialist",
    subtitle: "Blockchain Developer | Generative AI Expert",
    bio: "Software Engineering Student at UET | Microsoft Certified Database Developer | Aspiring Generative AI & Agentic Systems Developer | Cloud/DevOps: Docker, Kubernetes",
    avatar: "/avatars/shah-husain.jpg", // Replace with actual image path
    skills: [
      "Software Engineering",
      "AI Automation",
      "Blockchain Development",
      "Generative AI",
      "Agentic Systems",
      "Docker",
      "Kubernetes",
      "Database Development",
    ],
    socialLinks: {
      github: "https://github.com/Lordhussnain",
      linkedin: "#", // Add LinkedIn URL when available
      email: "mailto:contact@example.com", // Add email when available
    },
    highlight1: "Microsoft Certified Database Developer",
    highlight2: "Software Engineering Student at UET",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="secondary" className="mb-4">
            Portfolio
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg text-muted-foreground">
            Talented individuals driving innovation in software engineering, AI, and blockchain technology
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-32 h-32 border-4 border-border group-hover:border-primary transition-colors">
                    <AvatarImage src={profile.avatar} alt={profile.name} />
                    <AvatarFallback className="text-3xl bg-gradient-to-br from-primary/20 to-primary/10">
                      {profile.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-2xl font-bold">{profile.name}</CardTitle>
                <CardDescription className="text-base font-medium text-primary">
                  {profile.title}
                </CardDescription>
                <p className="text-sm text-muted-foreground">{profile.subtitle}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <Separator />

                {/* Highlights */}
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <Code2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{profile.highlight1}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <BrainCircuit className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{profile.highlight2}</span>
                  </div>
                </div>

                <Separator />

                {/* Bio */}
                <div>
                  <h3 className="text-sm font-semibold mb-2">About</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {profile.bio}
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-sm font-semibold mb-3">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline"
                        className="text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-sm font-semibold mb-3">Connect</h3>
                  <div className="flex gap-2">
                    {profile.socialLinks.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <Link href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer">
                          <GitBranch className="w-4 h-4 mr-2" />
                          GitHub
                        </Link>
                      </Button>
                    )}
                    {profile.socialLinks.linkedin && profile.socialLinks.linkedin !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <Link href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                          <LinkedinIcon className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Link>
                      </Button>
                    )}
                    {profile.socialLinks.email && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="flex-1"
                      >
                        <Link href={profile.socialLinks.email}>
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-primary/5 to-background border-primary/20">
          <CardContent className="py-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want to Work With Us?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We&apos;re always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get In Touch
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
