export const Work = () => {
  return (
    <section id="work" className="min-h-screen py-20 sm:py-32">
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-light">Selected Work</h2>
          <div className="text-sm text-muted-foreground font-mono">
            2020 — 2025
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {[
            {
              year: "2024",
              role: "Frontend Engineer",
              company: "Freelance",
              description:
                "Building modern web applications with React, TypeScript, and Next.js for various clients.",
              tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
            },
            {
              year: "2023",
              role: "UX Designer",
              company: "Local Projects",
              description:
                "Designing user-centered interfaces and experiences for mobile and web applications.",
              tech: ["Figma", "Adobe XD", "User Research", "Prototyping"],
            },
            {
              year: "2022",
              role: "Frontend Developer",
              company: "Startup Projects",
              description:
                "Developed responsive web applications and contributed to product design decisions.",
              tech: ["JavaScript", "CSS", "HTML", "Git"],
            },
            {
              year: "2020",
              role: "Web Developer",
              company: "Personal Projects",
              description:
                "Started journey in web development, building personal projects and learning modern technologies.",
              tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
            },
          ].map((job, index) => (
            <div
              key={index}
              className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
            >
              <div className="lg:col-span-2">
                <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  {job.year}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">
                    {job.role}
                  </h3>
                  <div className="text-muted-foreground">{job.company}</div>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  {job.description}
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                {job.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
