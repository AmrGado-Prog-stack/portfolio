"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/sections/fade-up";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "40+", label: "Reusable Components" },
  { value: "20+", label: "REST API Endpoints" },
  { value: "12+", label: "Dashboard Views" },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeUp delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a detail-oriented and collaborative Front-End Engineer
                with 3+ years of experience building production web and
                cross-platform mobile applications across e-commerce, dashboard,
                and SaaS products.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My main technologies include React.js, Next.js, TypeScript,
                Flutter, and React Native. I focus on building performant,
                accessible interfaces with reusable component systems, REST API
                integration, clean architecture, and responsive design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I also have a biomedical engineering background that I apply to
                health-tech development, bringing a unique perspective to
                building solutions that serve real-world needs.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary">React.js</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Flutter</Badge>
                <Badge variant="secondary">React Native</Badge>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors group"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
