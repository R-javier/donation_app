import * as v from "valibot";
import { type Project, ProjectSchema } from "./schemas";

export const PROJECTS: Project[] = [
  {
    id: 1,
    organizationId: 1,
    name: "Asistencia en desastres",
    description:
      "Asistencia humanitaria en zonas afectadas por desastres naturales",
  },
  {
    id: 2,
    organizationId: 2,
    name: "Defensa de DDHH",
    description:
      "Investiga abusos y presiona a gobiernos para proteger la libertad y la justicia.",
  },
  {
    id: 3,
    organizationId: 3,
    name: "Clima y bosques",
    description:
      "Lucha contra el cambio climático, la deforestación y la contaminación.",
  },
  {
    id: 4,
    organizationId: 4,
    name: "Niñez primero",
    description:
      "Garantiza derechos básicos de niños y niñas: salud, educación y protección.",
  },
  {
    id: 5,
    organizationId: 5,
    name: "Emergencias médicas",
    description:
      "Atención sanitaria en zonas de guerra, epidemias y desastres.",
  },
  {
    id: 6,
    organizationId: 6,
    name: "Biodiversidad",
    description:
      "Conservación de la biodiversidad y protección de especies en peligro.",
  },
  {
    id: 7,
    organizationId: 7,
    name: "Infancias seguras",
    description: "Bienestar infantil con foco en educación y protección.",
  },
  {
    id: 8,
    organizationId: 8,
    name: "Salud global",
    description:
      "Proyectos de salud, educación y reducción de la pobreza; inversión en vacunas e I+D.",
  },
];

v.parse(v.array(ProjectSchema), PROJECTS);
