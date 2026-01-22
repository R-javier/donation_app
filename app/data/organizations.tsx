import * as v from "valibot";
import { type Organization, OrganizationSchema } from "./schemas";

export const ORGANIZATIONS: Organization[] = [
  {
    id: 1,
    name: "Cruz Roja",
    image:
      "https://historiahoy.com.ar/wp-content/uploads/2020/07/0000077622-2.jpg",
  },
  {
    id: 2,
    name: "Amnistía Internacional",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk6-KAY0N7ZNGABhOBTnUaHbpm6UR1oidtVw&s",
  },
  {
    id: 3,
    name: "Greenpeace",
    image:
      "https://logos-world.net/wp-content/uploads/2022/11/Greenpeace-Logo.jpg",
  },
  {
    id: 4,
    name: "UNICEF",
    image:
      "https://static.guiaongs.org/wp-content/uploads/2015/09/unicef_destacada.png",
  },
  {
    id: 5,
    name: "Médicos Sin Fronteras",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.hdGgDlIrchl5a0hIMK3RTwAAAA?w=362&h=312&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 6,
    name: "World Wildlife Fund",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.Ch_qBszwWSHBsHdZINV54wHaE5?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 7,
    name: "Save the Children",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.TiCWv7TLkSR3WSBOvzJULgHaHp?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 8,
    name: "Fundación Bill y Melinda Gates",
    image:
      "https://th.bing.com/th/id/R.0c965703849342dd685521e5c58683a2?rik=hiyeapYqnIAAvw&riu=http%3a%2f%2fwww.uv.es%2frecursos%2ffatwirepub%2fccurl%2f611%2f499%2fBill_%26_Melinda_Gates_Foundation.png&ehk=X2HYbdG5O7ZB8tTxuMwj%2bnBmv9FZT7KQxeqkQhmPe2Q%3d&risl=&pid=ImgRaw&r=0",
  },
];

v.parse(v.array(OrganizationSchema), ORGANIZATIONS);
