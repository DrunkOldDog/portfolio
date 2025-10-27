import Image from "next/image";
import Link from "next/link";
import { Project } from "@/payload-types";
import { getPayloadImage } from "@/lib/helpers";
import { RichText } from "@/components/shared";

interface ProjectDetailProps {
  project: Project;
}

export const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <div className="min-h-screen py-20 sm:py-32">
      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/#projects"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Project Content */}
      {project.content && (
        <section className="py-4">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose dark:prose-invert prose-neutral prose-lg max-w-none">
                {/* This would need a rich text renderer for Lexical content */}
                <RichText data={project.content} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-light mb-8">Gallery</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {project.gallery.map((item, index) => (
                  <div
                    key={index}
                    className="aspect-video bg-muted/20 relative overflow-hidden rounded-lg"
                  >
                    <Image
                      src={getPayloadImage(item.image)}
                      alt={
                        item.caption ||
                        `${project.title} gallery image ${index + 1}`
                      }
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {item.caption && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3">
                        <p className="text-sm">{item.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-light mb-8">Key Features</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-3">
                      {feature.icon && (
                        <span className="text-2xl">{feature.icon}</span>
                      )}
                      <h3 className="text-lg font-medium">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
