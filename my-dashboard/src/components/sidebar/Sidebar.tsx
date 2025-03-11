import Image from "next/image";
import {
  IoBrowsersOutline,
  IoCalculator,
  IoFootball,
  IoHeartCircleOutline,
  IoLogoReact,
} from "react-icons/io5";
import { SidebarMenuItem } from "./SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subTitle: "Data Overview",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subTitle: "Counter Client Side",
  },
  {
    path: "/dashboard/pokemon",
    icon: <IoFootball size={40} />,
    title: "Pokémons",
    subTitle: "Static generation",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeartCircleOutline size={40} />,
    title: "Favorites",
    subTitle: "Pokemon favorites",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "20rem" }}
      className="bg-gray-900 min-h-screen z-10 text-white w-64  left-0  overflow-y-scroll"
    >
      <div id="logo" className="my-4  px-3 md:px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span>Dashboard</span>
        </h1>
      </div>
      <div id="profile" className="px-3 md:px-6 py-6 md:py-10">
        <p className="text-white">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="User avatar"
              width={0}
              height={0}
              style={{ width: "32px", height: "auto" }}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Jhon Moofarrif</span>
        </a>
      </div>
      <div id="nav" className="w-full px-3 md:px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem key={item.path} {...item} />
        ))}
      </div>
    </div>
  );
};
