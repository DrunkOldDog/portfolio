import { workExperience } from "@/app/_constants";

export const Work = () => {
  return (
    <section id="work" className="min-h-screen py-20 sm:py-32">
      <div className="space-y-12 sm:space-y-16">
        <h2 className="text-3xl sm:text-4xl font-light">Experience</h2>

        <div className="space-y-8 sm:space-y-12">
          {workExperience.map((job, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50"
            >
              <div className="lg:col-span-2">
                <div className="text-sm font-light text-muted-foreground">
                  {job.year}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                  <div className="text-muted-foreground">{job.company}</div>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  {job.description}
                </p>
              </div>

              <div className="lg:col-span-4">
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {job.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
