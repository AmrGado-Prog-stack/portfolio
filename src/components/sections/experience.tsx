"use client";

import { FadeUp } from "@/components/sections/fade-up";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              Experience
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
        </FadeUp>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <FadeUp key={exp.id} delay={index * 0.1}>
                <div className="relative flex flex-col sm:flex-row gap-8">
                  <div className="sm:w-1/2 sm:pr-12 sm:text-right">
                    <div className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors">
                      <div className="flex items-center gap-2 mb-2 sm:justify-end">
                        <span className="text-xs text-accent font-medium px-2 py-1 rounded-full bg-accent/10">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-muted-foreground mb-4">{exp.company}</p>
                      <ul className="space-y-2">
                        {(exp.responsibilities || exp.achievements)?.map(
                          (item, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2 sm:flex-row-reverse sm:text-right"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                              {item}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="absolute left-4 sm:left-1/2 top-8 -translate-x-1/2">
                    <div className="w-4 h-4 rounded-full bg-accent border-4 border-background shadow-lg shadow-accent/20" />
                  </div>

                  <div className="sm:w-1/2 sm:pl-12" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
