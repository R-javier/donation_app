import * as v from "valibot";
import { type Project, ProjectSchema } from "./schemas";

export const PROJECTS: Project[] = [
  {
    id: 1,
    organizationId: 1,
    name: "Asistencia en desastres",
    description:
      "Asistencia humanitaria en zonas afectadas por desastres naturales",
    image:
      "https://historiahoy.com.ar/wp-content/uploads/2020/07/0000077622-2.jpg",
  },
  {
    id: 2,
    organizationId: 2,
    name: "Defensa de DDHH",
    description:
      "Investiga abusos y presiona a gobiernos para proteger la libertad y la justicia.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6-KAY0N7ZNGABhOBTnUaHbpm6UR1oidtVw&s",
  },
  {
    id: 3,
    organizationId: 3,
    name: "Clima y bosques",
    description:
      "Lucha contra el cambio climático, la deforestación y la contaminación.",
    image:
      "https://logos-world.net/wp-content/uploads/2022/11/Greenpeace-Logo.jpg",
  },
  {
    id: 4,
    organizationId: 4,
    name: "Niñez primero",
    description:
      "Garantiza derechos básicos de niños y niñas: salud, educación y protección.",
    image:
      "https://static.guiaongs.org/wp-content/uploads/2015/09/unicef_destacada.png",
  },
  {
    id: 5,
    organizationId: 5,
    name: "Emergencias médicas",
    description:
      "Atención sanitaria en zonas de guerra, epidemias y desastres.",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.hdGgDlIrchl5a0hIMK3RTwAAAA?w=362&h=312&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 6,
    organizationId: 6,
    name: "Biodiversidad",
    description:
      "Conservación de la biodiversidad y protección de especies en peligro.",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.Ch_qBszwWSHBsHdZINV54wHaE5?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 7,
    organizationId: 7,
    name: "Infancias seguras",
    description: "Bienestar infantil con foco en educación y protección.",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.TiCWv7TLkSR3WSBOvzJULgHaHp?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 8,
    organizationId: 8,
    name: "Salud global",
    description:
      "Proyectos de salud, educación y reducción de la pobreza; inversión en vacunas e I+D.",
    image:
      "https://th.bing.com/th/id/R.0c965703849342dd685521e5c58683a2?rik=hiyeapYqnIAAvw&riu=http%3a%2f%2fwww.uv.es%2frecursos%2ffatwirepub%2fccurl%2f611%2f499%2fBill_%26_Melinda_Gates_Foundation.png&ehk=X2HYbdG5O7ZB8tTxuMwj%2bnBmv9FZT7KQxeqkQhmPe2Q%3d&risl=&pid=ImgRaw&r=0",
  },
];

v.parse(v.array(ProjectSchema), PROJECTS);

export function getProjectById(projectId: number) {
  return PROJECTS.find((project) => project.id === projectId);
}
