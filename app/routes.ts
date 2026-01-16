import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("donation/:donationId", "routes/donation.$donationId.tsx"),
  route(
    "organization/:organizationId",
    "routes/organization.$organizationId.tsx",
  ),
  route(
    "organization/:organizationId/project/:projectId",
    "routes/project.$projectId.tsx",
  ),
] satisfies RouteConfig;
