"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Code, Database, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const roles = [
  "Full Stack Developer",
  "MERN Stack Expert", 
  "Problem Solver",
  "Code Architect"
];

const floatingElements = [
  { icon: Code, delay: 0, x: "10%", y: "20%" },
  { icon: Database, delay: 2, x: "80%", y: "30%" },
  { icon: Globe, delay: 4, x: "15%", y: "70%" },
  { icon: Sparkles, delay: 1, x: "85%", y: "60%" },
];

export function InteractiveHero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: "20%",
            top: "10%",
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-secondary/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            right: "20%",
            bottom: "20%",
          }}
        />
      </div>

      {/* Floating Icons */}
      {floatingElements.map((element, index) => {
        const Icon = element.icon;
        return (
          <div
            key={index}
            className="absolute opacity-20 animate-bounce"
            style={{
              left: element.x,
              top: element.y,
              animationDelay: `${element.delay}s`,
              animationDuration: "3s",
            }}
          >
            <Icon className="w-8 h-8 text-primary" />
          </div>
        );
      })}

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8 z-10">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8">
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 mb-4">
              <div className="bg-background rounded-full px-4 py-2">
                <span className="text-sm font-medium text-primary">👋 Welcome to my portfolio</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Subham Singh
            </span>
          </h1>
          
          <div className="h-16 flex items-center justify-center mb-6">
            <span className="text-2xl font-semibold text-muted-foreground">
              {roles[currentRole]}
            </span>
          </div>
          
          <p className="text-lg leading-8 text-muted-foreground mb-10 max-w-xl mx-auto">
            Building scalable web applications with passion and precision. 
            Transforming ideas into digital experiences that make a difference.
          </p>
          
          <div className="flex items-center justify-center gap-x-6 flex-wrap">
            <Button asChild size="lg" className="group">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="group">
              <Link href="/contact">
                <span className="group-hover:scale-110 transition-transform inline-block mr-2">💬</span>
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}