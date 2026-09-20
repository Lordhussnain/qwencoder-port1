// Centralized data for portfolio profiles
// Easy to add more people by adding to this array

export interface ProfileData {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  bio: string;
  avatarText: string;
  stats: { label: string; value: string }[];
  achievements: string[];
  skills: { name: string; icon: string; color: string }[];
  socials: { platform: string; url: string; icon: string }[];
}

export const profiles: ProfileData[] = [
  {
    slug: "shah-husain",
    name: "Shah Husain",
    role: "Software Engineer & AI Specialist",
    tagline: "Blockchain Developer | Generative AI Expert",
    bio: "Software Engineering Student at UET | Microsoft Certified Database Developer | Aspiring Generative AI & Agentic Systems Developer. Specializing in Cloud/DevOps with Docker and Kubernetes.",
    avatarText: "SH",
    stats: [
      { label: "Projects", value: "15+" },
      { label: "Certifications", value: "5+" },
      { label: "Technologies", value: "20+" },
    ],
    achievements: [
      "Microsoft Certified Database Developer",
      "Generative AI & Agentic Systems Specialist",
      "Cloud Native Architecture Expert",
    ],
    skills: [
      { name: "Software Eng", icon: "code", color: "text-blue-400" },
      { name: "AI Automation", icon: "bot", color: "text-purple-400" },
      { name: "Blockchain", icon: "link", color: "text-orange-400" },
      { name: "Generative AI", icon: "sparkles", color: "text-pink-400" },
      { name: "Docker/K8s", icon: "container", color: "text-cyan-400" },
      { name: "Database", icon: "database", color: "text-green-400" },
    ],
    socials: [
      { platform: "GitHub", url: "https://github.com/Lordhussnain", icon: "github" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/shah-hussain-b958b536b/", icon: "linkedin" },
      { platform: "ModelScope", url: "https://www.modelscope.ai/profile/HasnainAli866", icon: "globe" },
    ],
  },
  {
    slug: "hasnain-ali",
    name: "Hasnain Ali",
    role: "AI Researcher & Developer",
    tagline: "Machine Learning | Data Science | Tech Innovator",
    bio: "Passionate about pushing the boundaries of AI and Machine Learning. Focused on developing intelligent systems and data-driven solutions to solve real-world problems.",
    avatarText: "HA",
    stats: [
      { label: "Models Trained", value: "30+" },
      { label: "Research Papers", value: "5+" },
      { label: "Datasets", value: "50+" },
    ],
    achievements: [
      "AI Model Optimization Expert",
      "Data Science Competition Winner",
      "Open Source Contributor",
    ],
    skills: [
      { name: "Machine Learning", icon: "brain", color: "text-indigo-400" },
      { name: "Data Science", icon: "chart", color: "text-emerald-400" },
      { name: "Python", icon: "code", color: "text-yellow-400" },
      { name: "Deep Learning", icon: "network", color: "text-red-400" },
      { name: "NLP", icon: "message", color: "text-blue-400" },
      { name: "Computer Vision", icon: "eye", color: "text-violet-400" },
    ],
    socials: [
      { platform: "GitHub", url: "https://github.com", icon: "github" },
      { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { platform: "ModelScope", url: "https://modelscope.ai", icon: "globe" },
    ],
  },
];

export function getProfileBySlug(slug: string): ProfileData | undefined {
  return profiles.find((p) => p.slug === slug);
}
