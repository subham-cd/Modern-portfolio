import { SkillsVisualization } from "@/components/skills-visualization";

export const metadata = {
  title: "Skills",
  description: "Technical skills and proficiencies of Subham Singh in full-stack development.",
};

export default function SkillsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Skills & Technologies</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Interactive showcase of my technical proficiencies and expertise
        </p>
      </div>

      <SkillsVisualization />
    </div>
  );
}