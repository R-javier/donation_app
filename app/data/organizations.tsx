import * as v from "valibot";
import { type Organization, OrganizationSchema } from "./schemas";

export const ORGANIZATIONS: Organization[] = [
  {
    id: 1,
    name: "Cruz Roja",
  },
  {
    id: 2,
    name: "Amnistía Internacional",
  },
  {
    id: 3,
    name: "Greenpeace",
  },
  {
    id: 4,
    name: "UNICEF",
  },
  {
    id: 5,
    name: "Médicos Sin Fronteras",
  },
  {
    id: 6,
    name: "World Wildlife Fund",
  },
  {
    id: 7,
    name: "Save the Children",
  },
  {
    id: 8,
    name: "Fundación Bill y Melinda Gates",
  },
];

v.parse(v.array(OrganizationSchema), ORGANIZATIONS);
