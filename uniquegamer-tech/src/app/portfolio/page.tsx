"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { ArrowRight, Code2, BrainCircuit, Sparkles, Zap, Globe } from "lucide-react";
import { profiles } from "@/data/portfolio";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "code":
      return Code2;
    case "bot":
    case "brain":
      return BrainCircuit;
    default:
      return Code2;
  }
};

export default function PortfolioPage() {
  const gradientMap: Record<string, string> = {
    "shah-husain": "from-blue-500 via-purple-500 to-pink-500",
    "hasnain-ali": "from-emerald-500 via-teal-500 to-cyan-500",
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black" />
      
      {/* Floating Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Meet Our Team</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            The Minds Behind
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the talented individuals driving Uniquegamer Tech forward with cutting-edge solutions
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-4xl mx-auto"
        >
          {[
            { icon: Code2, label: "Projects", value: "50+", color: "text-blue-400" },
            { icon: BrainCircuit, label: "AI Models", value: "12+", color: "text-purple-400" },
            { icon: Zap, label: "Technologies", value: "20+", color: "text-pink-400" },
            { icon: Globe, label: "Clients", value: "30+", color: "text-emerald-400" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center group hover:border-white/20 transition-all"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {profiles.map((profile, index) => {
            const IconComponent = getIcon(profile.skills[0].icon);
            const gradient = gradientMap[profile.slug];
            
            return (
              <motion.div
                key={profile.slug}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Link href={`/portfolio/${profile.slug}`}>
                  <Card className="relative overflow-hidden bg-white/5 backdrop-blur-md border-white/10 hover:border-white/20 transition-all duration-500 h-full group/card">
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover/card:opacity-10 transition-opacity duration-500`} />

                    <CardContent className="relative p-8 flex flex-col items-center text-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg shadow-purple-500/25`}
                      >
                        <IconComponent className="w-10 h-10 text-white" />
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="mb-6 relative"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full blur-xl opacity-50 group-hover/card:opacity-75 transition-opacity`} />
                        <Avatar className="w-32 h-32 ring-4 ring-white/10 group-hover/card:ring-white/30 transition-all relative">
                          <AvatarFallback className={`text-4xl font-bold bg-gradient-to-br ${gradient} text-white`}>
                            {profile.avatarText}
                          </AvatarFallback>
                        </Avatar>
                      </motion.div>

                      <h2 className="text-2xl font-bold text-white mb-2 group-hover/card:bg-gradient-to-r group-hover/card:from-white group-hover/card:to-gray-300 group-hover/card:bg-clip-text group-hover/card:text-transparent transition-all duration-300">
                        {profile.name}
                      </h2>

                      <p className="text-lg text-gray-300 mb-1">{profile.role}</p>
                      <p className="text-sm text-gray-500 mb-6">{profile.tagline}</p>

                      <div className="flex gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-xl font-bold text-white">{profile.stats[0].value}</div>
                          <div className="text-xs text-gray-500">{profile.stats[0].label}</div>
                        </div>
                        <div className="w-px bg-gray-700" />
                        <div className="text-center">
                          <div className="text-xl font-bold text-white">{profile.stats[1].value}</div>
                          <div className="text-xs text-gray-500">{profile.stats[1].label}</div>
                        </div>
                      </div>

                      <motion.div initial={{ x: 0 }} whileHover={{ x: 5 }} className="mt-auto">
                        <span className={`inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r ${gradient} text-white font-medium text-sm shadow-lg group-hover/card:shadow-xl transition-all duration-300`}>
                          View Profile
                          <ArrowRight className="w-4 h-4 group-hover/card:translate-x-1 transition-transform" />
                        </span>
                      </motion.div>
                    </CardContent>

                    <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-white/5 to-transparent rounded-tl-2xl" />
                    <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-tl from-white/5 to-transparent rounded-br-2xl" />
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-8 h-8 text-purple-400" />
            <h3 className="text-xl font-semibold text-white">Want to join our team?</h3>
            <p className="text-gray-400 max-w-md">
              We&apos;re always looking for talented individuals passionate about technology and innovation.
            </p>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
