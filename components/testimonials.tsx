"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Subham delivered an exceptional full-stack solution for our food delivery platform. His attention to detail and technical expertise made the project a huge success.",
    rating: 5,
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "CTO",
    company: "StartupXYZ",
    content: "Working with Subham was a pleasure. He not only built a beautiful frontend but also architected a robust backend system. Highly recommended!",
    rating: 5,
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Design Lead",
    company: "Creative Agency",
    content: "Subham's ability to translate designs into pixel-perfect, responsive websites is impressive. The GTA-inspired site exceeded our expectations.",
    rating: 5,
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Kumar",
    role: "Founder",
    company: "FoodieApp",
    content: "The MERN stack application Subham built for us handles thousands of orders daily. His code is clean, scalable, and well-documented.",
    rating: 5,
    avatar: "DK"
  }
];

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            What Clients Say
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Testimonials from satisfied clients and collaborators
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <Quote className="w-12 h-12 text-primary/20 mb-6" />
                
                <blockquote className="text-xl md:text-2xl font-medium leading-8 text-foreground mb-8">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonials[currentTestimonial].avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}