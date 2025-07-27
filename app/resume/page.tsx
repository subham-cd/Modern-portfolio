import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Resume",
  description: "Download the resume of Subham Singh, Full Stack Developer with expertise in MERN stack.",
};

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Developing end-to-end web applications using MERN stack, focusing on scalable architecture and user experience.",
    achievements: [
      "Built multiple full-stack applications with React and Node.js",
      "Implemented secure authentication and authorization systems",
      "Optimized application performance and database queries",
    ],
  },
];

const education = [
  {
    degree: "Bachelor's in Computer Science",
    institution: "University Name",
    period: "2020 - 2024",
    description: "Focused on software engineering, data structures, and algorithms.",
  },
];

const certifications = [
  "Full Stack Web Development",
  "JavaScript Algorithms and Data Structures",
  "React Developer Certification",
  "Node.js Backend Development",
];

export default function ResumePage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Resume</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Download my resume or view my experience below
        </p>
        <Button size="lg" className="mb-8">
          <Download className="w-4 h-4 mr-2" />
          Download Resume
        </Button>
      </div>

      <div className="space-y-8">
        {/* Experience Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Professional Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <Badge variant="outline">{exp.period}</Badge>
                </div>
                <p className="text-muted-foreground mb-2">{exp.company}</p>
                <p className="mb-3">{exp.description}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-primary pl-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <Badge variant="outline">{edu.period}</Badge>
                </div>
                <p className="text-muted-foreground mb-2">{edu.institution}</p>
                <p>{edu.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skills Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <p className="text-sm text-muted-foreground">
                  React, JavaScript, HTML5, CSS3, Tailwind CSS
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend</h4>
                <p className="text-sm text-muted-foreground">
                  Node.js, Express, MongoDB, REST APIs
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Other</h4>
                <p className="text-sm text-muted-foreground">
                  Git, GitHub, Postman, Java, DSA
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 md:grid-cols-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-4">
          Want to know more about my background?
        </p>
        <Button variant="outline" asChild>
          <a href="/contact">
            <ExternalLink className="w-4 h-4 mr-2" />
            Get In Touch
          </a>
        </Button>
      </div>
    </div>
  );
}