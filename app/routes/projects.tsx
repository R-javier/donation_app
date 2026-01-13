import * as v from "valibot";

const ORGANIZATIONS = [
  {
    id: 1,
    organizationId: 1,
    description:
      "Asistencia humanitaria en zonas afectadas por desastres naturales",
  },
  {
    id: 2,
    organizationId: 2,
    description:
      "ONG  Investiga abusos, hace campañas y presiona a gobiernos para proteger la libertad y la justicia.",
  },
  {
    id: 3,
    organizationId: 3,
    description:
      "Organización ambiental que lucha contra el cambio climático, la deforestación y la contaminación.",
  },
  {
    id: 4,
    organizationId: 4,
    description:
      "Fondo de las Naciones Unidas para la Infancia. Trabaja para garantizar derechos básicos de niños y niñas: salud, educación, protección y nutrición.",
  },
  {
    id: 5,
    organizationId: 5,
    description:
      "ONG médica que brinda atención sanitaria en zonas de guerra, epidemias y desastres.",
  },
  {
    id: 6,
    organizationId: 6,
    description:
      "Organización dedicada a la conservación de la biodiversidad y la protección de especies en peligro.",
  },
  {
    id: 7,
    organizationId: 7,
    description: "ONG que trabaja por el bienestar infantil Save the Children",
  },
  {
    id: 8,
    organizationId: 8,
    description:
      "Fundación filantrópica que impulsa proyectos de salud global, educación y reducción de la pobreza. Invierte en vacunas, investigación y desarrollo sostenible.",
  },
];

export const ProjectSchema = v.object({
  id: v.number(),
  organizationId: v.number(),
  name: v.string(),
  description: v.string(),
});

export type Project = v.InferOutput<typeof ProjectSchema>;
