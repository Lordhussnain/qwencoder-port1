"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  GitBranch, 
  Mail, 
  ExternalLink, 
  Code2, 
  BrainCircuit, 
  Blocks, 
  Share2,
  Sparkles,
  Cpu,
  Cloud,
  Database,
  Bot,
  Shield,
  Zap,
  Globe,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const profiles = [
  {
    name: "Shah Husain",
    title: "Software Engineer & AI Automation Specialist",
    subtitle: "Blockchain Developer | Generative AI Expert",
    bio: "Passionate software engineering student at UET with expertise in building cutting-edge solutions across AI automation, blockchain, and cloud technologies. Microsoft Certified Database Developer focused on creating intelligent agentic systems and scalable applications.",
    avatar: "/avatars/shah-husain.jpg",
    skills: [
      { name: "Software Engineering", icon: Code2, color: "text-blue-500" },
      { name: "AI Automation", icon: Bot, color: "text-purple-500" },
      { name: "Blockchain", icon: Blocks, color: "text-orange-500" },
      { name: "Generative AI", icon: Sparkles, color: "text-pink-500" },
      { name: "Agentic Systems", icon: BrainCircuit, color: "text-cyan-500" },
      { name: "Docker", icon: Cloud, color: "text-blue-600" },
      { name: "Kubernetes", icon: Cloud, color: "text-indigo-500" },
      { name: "Database Dev", icon: Database, color: "text-green-500" },
    ],
    socialLinks: {
      github: "https://github.com/Lordhussnain",
      linkedin: "https://www.linkedin.com/in/shah-hussain-b958b536b/",
      modelscope: "https://www.modelscope.ai/profile/HasnainAli866",
    },
    highlights: [
      { text: "Microsoft Certified Database Developer", icon: Database, gradient: "from-blue-500 to-cyan-500" },
      { text: "Software Engineering Student at UET", icon: Code2, gradient: "from-purple-500 to-pink-500" },
      { text: "Generative AI & Agentic Systems Developer", icon: BrainCircuit, gradient: "from-orange-500 to-red-500" },
      { text: "Cloud/DevOps: Docker & Kubernetes", icon: Cloud, gradient: "from-green-500 to-emerald-500" },
    ],
    stats: [
      { label: "Projects", value: "15+" },
      { label: "Certifications", value: "5+" },
      { label: "Technologies", value: "20+" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ x: [-50, 50, -50], y: [-30, 30, -30] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Header Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm border-primary/20 bg-primary/5">
            <Sparkles className="w-3 h-3 mr-2 text-primary" />
            Portfolio
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Visionary developers and innovators shaping the future of technology through 
            <span className="text-primary font-semibold"> AI</span>,
            <span className="text-purple-500 font-semibold"> Blockchain</span>, and
            <span className="text-cyan-500 font-semibold"> Cloud Solutions</span>
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
        >
          {profiles.map((profile, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="overflow-hidden border-2 hover:border-primary/30 transition-all duration-500 group bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-primary/10">
                {/* Gradient Border Top */}
                <div className="h-1.5 w-full bg-gradient-to-r from-primary via-purple-500 to-pink-500" />
                
                <CardHeader className="text-center pb-4 pt-8 relative">
                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="w-5 h-5 text-yellow-500/30" />
                  </motion.div>
                  
                  <div className="flex justify-center mb-6 relative">
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-xl"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    <Avatar className="w-40 h-40 border-4 border-border group-hover:border-primary transition-all duration-500 relative z-10 shadow-2xl">
                      <AvatarImage src={profile.avatar} alt={profile.name} />
                      <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary/30 via-purple-500/20 to-pink-500/30 text-primary">
                        {profile.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <CardTitle className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                      {profile.name}
                    </CardTitle>
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Code2 className="w-4 h-4 text-primary" />
                      <CardDescription className="text-base font-semibold text-primary">
                        {profile.title}
                      </CardDescription>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{profile.subtitle}</p>
                  </motion.div>
                </CardHeader>

                <CardContent className="space-y-6 px-6 pb-8">
                  <Separator className="bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="grid grid-cols-3 gap-4 py-4"
                  >
                    {profile.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center p-3 rounded-lg bg-gradient-to-br from-primary/5 to-purple-500/5 border border-primary/10">
                        <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>

                  <Separator className="bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                  {/* Highlights */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      Key Achievements
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {profile.highlights.map((highlight, hlIndex) => (
                        <motion.div
                          key={hlIndex}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-background to-muted/30 border border-primary/10 hover:border-primary/30 transition-all duration-300 group/item"
                        >
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${highlight.gradient} text-white shadow-lg`}>
                            <highlight.icon className="w-4 h-4" />
                          </div>
                          <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                            {highlight.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <Separator className="bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                  {/* Bio */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="p-4 rounded-lg bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 border border-primary/10"
                  >
                    <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      About Me
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {profile.bio}
                    </p>
                  </motion.div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-primary" />
                      Technical Expertise
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {profile.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          whileHover={{ scale: 1.05, x: 3 }}
                          className="flex items-center gap-2 p-2.5 rounded-lg bg-background/50 border border-primary/10 hover:border-primary/30 transition-all duration-300 group/skill"
                        >
                          <skill.icon className={`w-4 h-4 ${skill.color} group-hover/skill:scale-110 transition-transform`} />
                          <span className="text-xs font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      Connect With Me
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {profile.socialLinks.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="group/btn hover:bg-[#24292e] hover:text-white hover:border-[#24292e] transition-all duration-300"
                        >
                          <Link href={profile.socialLinks.github} target="_blank" rel="noopener noreferrer">
                            <GitBranch className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            GitHub
                          </Link>
                        </Button>
                      )}
                      {profile.socialLinks.linkedin && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="group/btn hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300"
                        >
                          <Link href={profile.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                            <Share2 className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            LinkedIn
                          </Link>
                        </Button>
                      )}
                      {profile.socialLinks.modelscope && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="group/btn hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-purple-600 transition-all duration-300"
                        >
                          <Link href={profile.socialLinks.modelscope} target="_blank" rel="noopener noreferrer">
                            <BrainCircuit className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            ModelScope
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="w-full group/btn bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-white border-0 shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
                    asChild
                  >
                    <Link href="/contact">
                      Let&apos;s Collaborate
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-20 relative z-10"
      >
        <Card className="max-w-5xl mx-auto bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 border-primary/20 backdrop-blur-sm overflow-hidden relative">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          <CardContent className="py-16 text-center relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-primary" />
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              We&apos;re passionate about turning innovative ideas into reality. Let&apos;s discuss your next project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group/btn bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-white shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300">
                <Link href="/contact">
                  Get In Touch
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:rotate-45 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="group/btn border-primary/30 hover:bg-primary/10 transition-all duration-300">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
