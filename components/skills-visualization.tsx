"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 90, color: "bg-blue-500" },
      { name: "JavaScript", level: 85, color: "bg-yellow-500" },
      { name: "HTML5", level: 95, color: "bg-orange-500" },
      { name: "CSS3", level: 90, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 88, color: "bg-teal-500" },
      { name: "TypeScript", level: 75, color: "bg-blue-700" },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85, color: "bg-green-600" },
      { name: "Express.js", level: 88, color: "bg-gray-600" },
      { name: "MongoDB", level: 82, color: "bg-green-500" },
      { name: "REST APIs", level: 90, color: "bg-purple-500" },
      { name: "JWT Auth", level: 85, color: "bg-red-500" },
      { name: "Mongoose", level: 80, color: "bg-green-700" },
    ],
  },
  {
    title: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Java", level: 80, color: "bg-red-600" },
      { name: "DSA", level: 78, color: "bg-indigo-500" },
      { name: "Git", level: 90, color: "bg-orange-600" },
      { name: "GitHub", level: 90, color: "bg-gray-800" },
      { name: "Postman", level: 85, color: "bg-orange-500" },
      { name: "VS Code", level: 95, color: "bg-blue-500" },
    ],
  },
];

export function SkillsVisualization() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const newLevels: { [key: string]: number } = {};
      skillCategories[activeCategory].skills.forEach(skill => {
        newLevels[skill.name] = skill.level;
      });
      setAnimatedLevels(newLevels);
    }, 100);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <div className="space-y-8">
      {/* Category Selector */}
      <div className="flex justify-center gap-4 flex-wrap">
        {skillCategories.map((category, index) => (
          <Button
            key={index}
            variant={activeCategory === index ? "default" : "outline"}
            onClick={() => setActiveCategory(index)}
            className="flex items-center gap-2"
          >
            <span className="text-lg">{category.icon}</span>
            {category.title}
          </Button>
        ))}
      </div>

      {/* Skills Display */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <span className="text-3xl">{skillCategories[activeCategory].icon}</span>
            {skillCategories[activeCategory].title} Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium flex items-center gap-2">
                    {skill.name}
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}%
                    </Badge>
                  </span>
                </div>
                
                {/* Animated Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${skill.color} relative`}
                      style={{ 
                        width: `${animatedLevels[skill.name] || 0}%`,
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Skill Level Indicator */}
                  <div 
                    className="absolute top-0 h-3 w-1 bg-white rounded-full shadow-lg transition-all duration-1000 ease-out"
                    style={{ 
                      left: `${(animatedLevels[skill.name] || 0)}%`,
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Overall Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="text-center p-6">
          <div className="text-3xl font-bold text-primary mb-2">90%+</div>
          <div className="text-sm text-muted-foreground">Frontend Proficiency</div>
        </Card>
        <Card className="text-center p-6">
          <div className="text-3xl font-bold text-primary mb-2">85%+</div>
          <div className="text-sm text-muted-foreground">Backend Expertise</div>
        </Card>
        <Card className="text-center p-6">
          <div className="text-3xl font-bold text-primary mb-2">80%+</div>
          <div className="text-sm text-muted-foreground">Problem Solving</div>
        </Card>
      </div>
    </div>
  );
}