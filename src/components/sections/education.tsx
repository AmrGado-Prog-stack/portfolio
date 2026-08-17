"use client";

import { FadeUp } from "@/components/sections/fade-up";
import { education, certifications } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-32 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Education & Certifications
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
        </FadeUp>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <FadeUp key={edu.institution} delay={index * 0.1}>
              <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {edu.institution}
                  </h3>
                  <span className="text-sm text-accent font-medium px-3 py-1 rounded-full bg-accent/10">
                    {edu.period}
                  </span>
                </div>
                <p className="text-muted-foreground mb-1">{edu.degree}</p>
                {edu.details && (
                  <p className="text-sm text-muted-foreground">{edu.details}</p>
                )}
              </div>
            </FadeUp>
          ))}

          {certifications.map((cert, index) => (
            <FadeUp key={cert.title} delay={(education.length + index) * 0.1}>
              <div className="p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {cert.title}
                    </h3>
                  </div>
                  <span className="text-sm text-accent font-medium px-3 py-1 rounded-full bg-accent/10">
                    {cert.year}
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
