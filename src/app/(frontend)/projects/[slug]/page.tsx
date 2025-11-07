import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@/payload.config";
import { ProjectDetail } from "@/features/Projects/components";
import { getPayloadImage } from "@/lib/helpers";

import type { Metadata } from "next";

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const payload = await getPayload({ config });
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

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const payload = await getPayload({ config });
  const { slug } = await params;

  const projects = await payload.find({
    collection: "projects",
    where: { slug: { equals: slug } },
  });

  const project = projects.docs[0];

  if (!project) {
    notFound();
  }

  let featuredImage = project.featuredImage
    ? getPayloadImage(project.featuredImage)
    : "";

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `https://juanireyes.com/projects/${project.slug}`,
      type: "website",
      images: featuredImage ? [featuredImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: featuredImage ? [featuredImage] : [],
    },
  };
}
