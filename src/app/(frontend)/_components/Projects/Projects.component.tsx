import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/shared";
import { ArrowRight } from "lucide-react";

import { getProjects } from "@/lib/payload";
import { getPayloadImage } from "@/lib/helpers";

export const Projects = async () => {
  const projects = await getProjects();

  return (
    <Section id="projects" className="min-h-screen py-20 sm:py-32">
      <div className="space-y-12 sm:space-y-16">
        <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>

        <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg flex flex-col"
            >
              {project.featuredImage && (
                <div className="aspect-video bg-muted/20 relative overflow-hidden">
                  <Image
                    src={getPayloadImage(project.featuredImage)}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}

              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground font-light">
                    {project.year}
                  </span>
                  <div className="flex gap-2">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300 hover:bg-muted/50"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300 hover:bg-muted/50"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="space-y-2 flex-1">
                  <h3 className="text-base sm:text-lg font-medium group-hover:text-muted-foreground transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech.technology}
                        className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-md"
                      >
                        {tech.technology}
                      </span>
                    ))}
                  </div>
                </div>

                {project.content && (
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm text-white hover:text-white/50 transition-colors duration-300 flex items-center gap-2 mt-4 ml-auto"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};
