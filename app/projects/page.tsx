import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Projects",
  description: "Explore the projects and applications built by Subham Singh, showcasing full-stack development skills.",
};

const projects = [
  {
    title: "Food Delivery App",
    description: "A comprehensive food delivery platform built with the MERN stack, featuring complete frontend and backend functionality with user authentication, restaurant management, and order processing.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    links: {
      frontend: "https://foodxieee-frontend.onrender.com",
      backend: "https://foodxieee-backend.onrender.com",
    },
    features: [
      "User authentication and authorization",
      "Restaurant and menu management",
      "Real-time order tracking",
      "Payment integration",
      "Admin dashboard",
    ],
  },
  {
    title: "GTA Image Website",
    description: "A visually appealing presentation site inspired by GTA-style imagery, showcasing frontend development skills with modern CSS techniques and responsive design.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    links: {
      live: "https://gta-imag.netlify.app/",
    },
    features: [
      "Responsive design across all devices",
      "Smooth animations and transitions",
      "Modern CSS Grid and Flexbox",
      "Optimized image loading",
      "Cross-browser compatibility",
    ],
  },
  {
  title: "Arcaya",
  description:
    "A mystical universe adventure platform where users choose one of three paths and complete challenging quests that test wit, courage, and ambition.",
  tech: ["Next.js", "Responsive Design", "Node.js", "Express", "MongoDB", "JWT"],
  links: {
    live: "https://glowing-haupia-bc4ffa.netlify.app/"
  },
  features: [
    "Responsive design across all devices",
    "Smooth animations and transitions",
    "Modern CSS Grid and Flexbox usage",
    "Optimized image loading for performance",
    "Cross-browser compatibility"
  ]
},
{
  title: "Converso",
  description:
    "A real-time AI Teaching Platform that delivers instant, smart learning responses with secure authentication, billing, and analytics.",
  tech: ["Next.js", "Supabase", "Vapi", "TailwindCSS", "Clerk", "Sentry"],
  links: {
    live: "https://saas-app-lake.vercel.app/",
    repo: "https://github.com/subham-cd/saas-app"
  },
  features: [
    "Real-time AI-powered teaching responses",
    "Secure Clerk-based authentication and billing",
    "Backend powered by Supabase",
    "Error tracking and monitoring with Sentry",
    "Fast and responsive UI",
    "Production-ready architecture"
  ]
},
{
  title: "EcoRise",
  description:
    "A gamified MERN platform designed to promote environmental awareness through interactive challenges, rewards, and educational activities.",
  tech: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCSS"],
  links: {
    live: "https://eco-rise.vercel.app/"
  },
  features: [
    "Gamified tasks for environmental awareness",
    "User rewards and progress tracking",
    "Interactive and responsive UI",
    "Real-time leaderboard features",
    "Smooth MERN stack integration"
  ]
},
{
  title: "ResumeMind",
  description:
    "An AI-powered resume analyzer that calculates ATS scores and provides actionable improvement suggestions to help users build job-ready resumes.",
  tech: [
    "React",
    "React Router",
    "Vite",
    "TailwindCSS",
    "Zustand",
    "PDF.js",
    "clsx"
  ],
  links: {
    live: "https://resume-analyzer-orpin-pi.vercel.app/"
  },
  features: [
    "AI-driven ATS score calculation",
    "Deep resume improvement suggestions",
    "Drag-and-drop PDF upload",
    "PDF parsing via PDF.js",
    "Fast navigation with React Router",
    "Minimal and responsive UI"
  ]
},
{
  title: "StudyWise Keeper",
  description:
    "A TypeScript-based study notes management app that helps students save, organize, and track their study material effortlessly.",
  tech: ["TypeScript", "React", "Vite", "TailwindCSS", "Zustand"],
  links: {
    live: "https://study-wise-keeper.vercel.app/"
  },
  features: [
    "Create, save, delete, and manage notes",
    "Minimal and distraction-free interface",
    "TypeScript-powered reliable architecture",
    "Extremely fast performance using Vite",
    "State management with Zustand",
    "Fully responsive layout"
  ]
},

  
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">My Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A collection of projects that showcase my skills in full-stack development
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <CardDescription className="text-base">
                {project.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex-1">
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-wrap gap-2">
              {project.links.live && (
                <Button asChild size="sm">
                  <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </Button>
              )}
              {project.links.frontend && (
                <Button asChild variant="outline" size="sm">
                  <Link href={project.links.frontend} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Frontend
                  </Link>
                </Button>
              )}
              {project.links.backend && (
                <Button asChild variant="outline" size="sm">
                  <Link href={project.links.backend} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Backend
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">
          Want to see more of my work?
        </p>
        <Button asChild variant="outline">
          <Link href="https://github.com/subham-cd" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2" />
            Visit My GitHub
          </Link>
        </Button>
      </div>
    </div>
  );
}
