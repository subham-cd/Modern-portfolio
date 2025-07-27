import { InteractiveHero } from "@/components/interactive-hero";
import { ProjectShowcase } from "@/components/project-showcase";
import { StatsCounter } from "@/components/stats-counter";
import { Testimonials } from "@/components/testimonials";
import { Code, Database, Globe } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Interactive Hero Section */}
      <InteractiveHero />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Project Showcase */}
      <ProjectShowcase />

      {/* Testimonials */}
      <Testimonials />

      {/* What I Do Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What I Do
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I specialize in creating end-to-end web solutions using modern technologies
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Globe className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  Frontend Development
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  Creating responsive and interactive user interfaces with React, HTML, CSS, and JavaScript
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Database className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  Backend Development
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  Building robust server-side applications with Node.js, Express, and MongoDB
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <Code className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  Problem Solving
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">
                  Strong fundamentals in Data Structures and Algorithms using Java
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}