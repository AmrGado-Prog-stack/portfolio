import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Amr Gado`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const previousProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <article className="space-y-12">
          <header>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full border border-border text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </header>

          {project.overview && (
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </section>
          )}

          {project.problem && (
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                The Problem
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </section>
          )}

          {project.solution && (
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                The Solution
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </section>
          )}

          {project.keyFeatures && (
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.keyFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.userRoles && (
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                User Roles
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.userRoles.map((role) => (
                  <span
                    key={role}
                    className="px-4 py-2 rounded-lg bg-card border border-border text-sm text-foreground"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </section>
          )}

          {project.impact && (
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Impact & Results
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.impact}
              </p>
            </section>
          )}

          {project.challenges && (
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Challenges
              </h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="border-t border-border pt-8">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Links
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-sm font-medium text-foreground hover:bg-white/5 transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Source
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
            </div>
          </section>

          <nav className="border-t border-border pt-8">
            <div className="flex flex-col sm:flex-row gap-4">
              {previousProject ? (
                <Link
                  href={`/projects/${previousProject.slug}`}
                  className="flex-1 p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors group"
                >
                  <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors">
                    Previous Project
                  </span>
                  <div className="flex items-center gap-2 mt-2 text-foreground group-hover:text-accent transition-colors">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="font-medium">{previousProject.title}</span>
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
              {nextProject ? (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="flex-1 p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors group text-right"
                >
                  <span className="text-xs text-muted-foreground group-hover:text-accent transition-colors">
                    Next Project
                  </span>
                  <div className="flex items-center justify-end gap-2 mt-2 text-foreground group-hover:text-accent transition-colors">
                    <span className="font-medium">{nextProject.title}</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </nav>
        </article>
      </div>
    </div>
  );
}
