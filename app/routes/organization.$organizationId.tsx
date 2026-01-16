import { Link, useLoaderData } from "react-router";
import { ORGANIZATIONS } from "~/data/organizations";
import { PROJECTS } from "~/data/projects";

export async function loader({
  params,
}: {
  params: { organizationId: string };
}) {
  const orgId = Number(params.organizationId);

  const organization = ORGANIZATIONS.find((org) => org.id === orgId);
  const projects = PROJECTS.filter((proj) => proj.organizationId === orgId);

  if (!organization) {
    throw new Response("Organization not found", { status: 404 });
  }

  return { organization, projects };
}

export default function OrganizationRoute() {
  const { organization, projects } = useLoaderData() as {
    organization: { id: number; name: string };
    projects: { id: number; name: string }[];
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        flexDirection: "column",
        textAlign: "center",
        maxWidth: 640,
        margin: "0 auto",
        backgroundColor: "rgba(255,255,255,0.02)",
        padding: 26,
        border: "1px solid #2a3442",
      }}
    >
      <div
        style={{
          padding: "124px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 30, margin: "0 0 12px" }}>Organización:</h1>

        <h2 style={{ fontSize: 20, marginBottom: "12px" }}>
          {organization.name}
        </h2>

        <h2 style={{ fontSize: 18, marginBottom: "15px" }}>Proyectos:</h2>
        <ul style={{ listStyle: "none", padding: 0, marginBottom: "16px" }}>
          {projects.map((project) => (
            <li
              key={project.id}
              style={{
                borderTop: "1px solid #333",
                padding: "12px 0",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <span style={{ fontWeight: 600 }}>{project.name}</span>

              <Link
                to={`/organization/${organization.id}/project/${project.id}`}
                style={{
                  textDecoration: "none",
                  padding: "10px 20px",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid #2a3442",
                  borderRadius: "6px",
                }}
              >
                Ver proyecto
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/"
          style={{
            padding: "10px 20px",
            backgroundColor: "rgba(255,255,255,0.02)",
            border: "1px solid #2a3442",
            borderRadius: "6px",
          }}
        >
          Volver
        </Link>
      </div>
    </div>
  );
}
