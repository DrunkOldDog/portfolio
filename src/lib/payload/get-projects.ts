import { getPayload } from "payload";
import config from "@/payload.config";

export const getProjects = async () => {
  const payload = await getPayload({ config });
  const { docs: projects } = await payload.find({
    collection: "projects",
    sort: "order",
  });

  return projects;
};
