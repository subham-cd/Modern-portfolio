"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Github, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
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
    mockup: "/api/placeholder/600/400",
    color: "from-blue-500/20 to-purple-500/20",
    demo: "https://foodxieee-frontend.onrender.com"
  },
  {
    id: 2,
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
    mockup: "/api/placeholder/600/400",
    color: "from-green-500/20 to-teal-500/20",
    demo: "https://gta-imag.netlify.app/"
  },
];

export function ProjectShowcase() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [playingDemo, setPlayingDemo] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Featured Projects
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            A showcase of my latest work and technical capabilities
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] ${
                hoveredProject === project.id ? 'ring-2 ring-primary/50' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Mockup/Preview */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/20 group-hover:scale-110 transition-transform duration-300">
                    {project.title.split(' ')[0]}
                  </div>
                </div>
                
                {/* Demo Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="lg"
                    className="rounded-full w-16 h-16 bg-white/90 hover:bg-white text-black"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <Play className="w-6 h-6 ml-1" />
                  </Button>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    {project.links.live && (
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={project.links.live} target="_blank">
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-muted-foreground">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                {project.links.frontend && (
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <Link href={project.links.frontend} target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Frontend
                    </Link>
                  </Button>
                )}
                {project.links.backend && (
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <Link href={project.links.backend} target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Backend
                    </Link>
                  </Button>
                )}
                {project.links.live && !project.links.frontend && (
                  <Button asChild size="sm" className="flex-1">
                    <Link href={project.links.live} target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}