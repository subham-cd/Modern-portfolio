import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "About Me",
  description: "Learn more about Subham Singh, a passionate Full Stack Developer specializing in MERN stack development.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">About Me</h1>
        <p className="text-xl text-muted-foreground">
          Get to know the person behind the code
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 md:order-1">
          <Card className="overflow-hidden">
            <CardContent className="p-6">
              <div className="aspect-square relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground">
                  SS
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="order-1 md:order-2 space-y-6">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">
              I'm a passionate Full Stack Developer who enjoys building scalable web applications and solving real-world problems using the MERN stack. With strong fundamentals in Java and DSA, I strive to write clean, efficient, and maintainable code.
            </p>
            
            <p className="text-lg leading-relaxed">
              My journey in web development started with curiosity about how websites work, and it has evolved into a deep passion for creating digital experiences that make a difference. I believe in continuous learning and staying updated with the latest technologies and best practices.
            </p>
            
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">My Approach</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Write clean, maintainable, and well-documented code</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Focus on user experience and performance optimization</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Embrace modern development practices and tools</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Continuous learning and improvement</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">What Drives Me</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Solving complex problems with elegant solutions</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Building applications that impact users positively</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Collaborating with talented developers and designers</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Contributing to the open-source community</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}