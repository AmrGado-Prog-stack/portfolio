import { Metadata } from "next";
import { experiences } from "@/data/experience";
import { education, certifications } from "@/data/education";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Resume | Amr Gado",
  description: "Resume of Amr Gado, Front-End Engineer",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Amr Gado</h1>
          <p className="text-xl text-accent mb-4">Front-End Engineer</p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>Cairo, Egypt</span>
            <span>•</span>
            <a href="mailto:amrgado126@gmail.com" className="hover:text-foreground transition-colors">
              amrgado126@gmail.com
            </a>
            <span>•</span>
            <a href="https://linkedin.com/in/amr-mohammed-gado" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
            Professional Summary
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Detail-oriented and collaborative Front-End Engineer with 3+ years of experience
            building production web and cross-platform mobile applications across e-commerce,
            dashboard, and SaaS products. Specialized in React.js, Next.js, TypeScript,
            Flutter, and React Native with a focus on performant, accessible interfaces,
            reusable component systems, and clean architecture.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((category) => (
              <div key={category.title}>
                <h3 className="text-sm font-semibold text-accent mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground">{category.skills.join(" • ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id}>
                <div className="flex items-start justify-between flex-wrap gap-1 mb-1">
                  <h3 className="font-semibold text-foreground">{exp.role}</h3>
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-sm text-accent mb-2">{exp.company}</p>
                <ul className="list-disc list-inside space-y-1">
                  {(exp.responsibilities || exp.achievements)?.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
            Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.slug}>
                <h3 className="font-semibold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{project.description}</p>
                <p className="text-xs text-muted-foreground">{project.technologies.join(" • ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.institution}>
                <div className="flex items-start justify-between flex-wrap gap-1 mb-1">
                  <h3 className="font-semibold text-foreground">{edu.institution}</h3>
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">{edu.degree}</p>
                {edu.details && <p className="text-sm text-muted-foreground">{edu.details}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4 pb-2 border-b border-border">
            Certifications
          </h2>
          <ul className="space-y-2">
            {certifications.map((cert) => (
              <li key={cert.title} className="text-sm text-muted-foreground">
                {cert.title} — {cert.year}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
