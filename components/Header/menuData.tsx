import { Menu } from "@/types/menu";

interface SubmenuItem {
  title: string;
  path: string; 
}

interface MenuItem {
  title: string;
  path?: string;
  submenu?: SubmenuItem[];
}

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Events and Achievements",
    path: "/events_achievements",
    newTab: false,
  },
  {
    id: 4,
    title: "Treasure Hunt",
    path: "/register",
    newTab: false,
  },
];

export default menuData;
