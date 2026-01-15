import * as v from "valibot";

export const OrganizationSchema = v.object({
  id: v.number(),
  name: v.string(),
});

export type Organization = v.InferOutput<typeof OrganizationSchema>;

export const ProjectSchema = v.object({
  id: v.number(),
  organizationId: v.number(),
  name: v.string(),
  description: v.string(),
});

export type Project = v.InferOutput<typeof ProjectSchema>;
