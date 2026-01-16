import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import { Form, redirect, useLoaderData } from "react-router";
import { getProjectById } from "~/data/projects";
import { MoneyButton } from "../components/MoneyButtom";

export async function loader({ params }: LoaderFunctionArgs) {
  const projectId = Number(params.projectId);
  const project = getProjectById(projectId);

  if (!project) {
    throw new Response("Project not found", { status: 404 });
  }
  return {
    project,
    amounts: [500, 1000, 5000],
  };
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const amount = formData.get("amount");

  console.log("Monto seleccionado:", amount);

  // por ahora no pagamos
  return redirect("/");
}

export default function ProjectRoute() {
  const { project, amounts } = useLoaderData() as {
    project: { id: number; name: string; description: string };
    amounts: number[];
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
        alignItems: "center",
        gap: 30,
        border: "1px solid #2a3442",
        backgroundColor: "rgba(255,255,255,0.02)",
        padding: 16,
      }}
    >
      <h1 style={{ fontSize: 28, margin: "0 0 2px" }}>{project.name}</h1>
      <h2 style={{ fontSize: 20 }}>{project.description}</h2>

      <h3 style={{ fontSize: 18 }}>Elegí un monto para donar</h3>

      <Form method="post" style={{ display: "flex", gap: 12 }}>
        {amounts.map((amount) => (
          <MoneyButton key={amount} amount={amount} />
        ))}
      </Form>
    </div>
  );
}
