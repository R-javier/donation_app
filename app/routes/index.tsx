import { Link, useLoaderData } from "react-router";
import * as v from "valibot";
import { type Organization, OrganizationSchema } from "~/data/schemas";
import { ORGANIZATIONS } from "../data/organizations";

export async function loader() {
  const organizations = v.parse(v.array(OrganizationSchema), ORGANIZATIONS);
  return { organizations };
}

export default function IndexRoute() {
  const { organizations } = useLoaderData() as {
    organizations: Organization[];
  };

  return (
    <section style={{ maxWidth: 640, margin: "0 auto", padding: 16 }}>
      <h1 style={{ fontSize: 18, margin: "0 0 12px" }}>Organizaciones</h1>
      <ul style={{ display: "grid", gap: 8, padding: 0, listStyle: "none" }}>
        {organizations.map((org: Organization) => (
          <li
            key={org.id}
            style={{
              listStyle: "none",
              border: "1px solid #2a3442",
              borderRadius: 10,
              padding: "10px 12px",
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              cursor: "pointer",
            }}
          >
            <Link
              to={`/organization/${org.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              {org.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
