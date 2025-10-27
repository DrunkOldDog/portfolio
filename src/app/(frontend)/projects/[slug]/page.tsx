import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@/payload.config";
import { ProjectDetail } from "@/features/Projects/components";

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const payload = await getPayload({ config })
  const { slug } = await params;

  const projects = await payload.find({
    collection: "projects",
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  });

  const project = projects.docs[0];

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

export async function generateStaticParams() {
  const payload = await getPayload({ config });

  const projects = await payload.find({
    collection: "projects",
    limit: 1000,
  });

  return projects.docs.map((project) => ({
    slug: project.slug,
  }));
}
