"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Code2, 
  BrainCircuit, 
  Blocks, 
  Sparkles, 
  Cpu, 
  Cloud, 
  Database, 
  Bot,
  GitBranch,
  Share2,
  Globe,
  Award,
  Rocket,
  Users,
  Zap,
  ChartBar,
  MessageSquare,
  Eye,
} from "lucide-react";
import { profiles, getProfileBySlug } from "@/data/portfolio";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "code": return Code2;
    case "bot": return Bot;
    case "brain": return BrainCircuit;
    case "link": return Blocks;
    case "sparkles": return Sparkles;
    case "container": return Cpu;
    case "database": return Database;
    case "chart": return ChartBar;
    case "network": return Cpu;
    case "message": return MessageSquare;
    case "eye": return Eye;
    default: return Code2;
  }
};

export default function ProfilePage({ params }: { params: { id: string } }) {
  const profile = getProfileBySlug(params.id);

  if (!profile) {
    notFound();
  }

  const gradientMap: Record<string, string> = {
    "shah-husain": "from-blue-500 via-purple-500 to-pink-500",
    "hasnain-ali": "from-emerald-500 via-teal-500 to-cyan-500",
  };
  
  const gradient = gradientMap[profile.slug] || "from-blue-500 via-purple-500 to-pink-500";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link href="/portfolio">
            <Button
              variant="ghost"
              className="text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Team
            </Button>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full opacity-50 animate-pulse" />
          
          <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800">
            <Avatar className="w-32 h-32 ring-4 ring-slate-800 shadow-2xl">
              <AvatarFallback className={`text-4xl font-bold bg-gradient-to-br ${gradient} text-white`}>
                {profile.avatarText}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center md:text-left">
              <h1 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${gradient.replace('via-', 'from-').replace(' to-', ' via-')} bg-clip-text text-transparent mb-2`}>
                {profile.name}
              </h1>
              <p className="text-xl text-slate-300 mb-1">{profile.role}</p>
              <p className="text-slate-400 mb-4">{profile.tagline}</p>
              <p className="text-slate-500 max-w-2xl">{profile.bio}</p>

              <div className="flex justify-center md:justify-start gap-4 mt-6">
                {profile.socials.map((social) => {
                  const Icon = social.icon === "github" ? GitBranch : social.icon === "linkedin" ? Share2 : Globe;
                  const hoverColor = social.icon === "linkedin" ? "hover:bg-[#0A66C2]/20 group-hover:text-[#0A66C2]" : social.icon === "modelscope" ? "hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 group-hover:text-purple-400" : "hover:bg-slate-700 group-hover:text-white";
                  
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-slate-800 transition-colors group ${hoverColor}`}
                    >
                      <Icon className="w-5 h-5 text-slate-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {profile.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 text-center hover:border-slate-700 transition-colors"
            >
              <div className={`text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 text-purple-400" />
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {profile.achievements.map((achievement, i) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 transition-all hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">{achievement}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technical Expertise */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Code2 className="w-6 h-6 text-cyan-400" />
            Technical Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {profile.skills.map((skill, i) => {
              const Icon = getIcon(skill.icon);
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 rounded-xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 transition-all hover:scale-105 flex flex-col items-center gap-3"
                >
                  <Icon className={`w-8 h-8 ${skill.color}`} />
                  <span className="text-sm text-slate-300 text-center">{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-slate-800 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Interested in collaborating?
          </h2>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Let&apos;s build something extraordinary together. Reach out for partnerships, projects, or opportunities.
          </p>
          <Button
            size="lg"
            className={`bg-gradient-to-r ${gradient} hover:opacity-90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all`}
            asChild
          >
            <Link href="/contact">
              Get in Touch
              <Rocket className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
