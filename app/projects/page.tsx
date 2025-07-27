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