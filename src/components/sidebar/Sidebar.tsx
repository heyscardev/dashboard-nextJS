import Image from "next/image";
import {
  IoCalculator,
  IoEgg,
  IoHeart,
  IoHeartCircle,
  IoHeartOutline,
  IoHome,
  IoLogoReact,
} from "react-icons/io5";
import UserImage from "@/assets/user.jpeg";
import { SideMenuItem } from ".";

const items = [
  {
    path: "/dashboard/main",
    icon: <IoHome size={40} />,
    title: "Dashboard",
    subtitle: "visualization",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subtitle: "rendered conter  by client",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoEgg size={40} />,
    title: "Pokemons",
    subtitle: "page to show pokemons",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeart size={40} />,
    title: "Favoritos",
    subtitle: "show favorites pokemons",
  },
];
export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300   left-0 h-screen "
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              width={128}
              height={128}
              src={UserImage}
              alt="profile"
            />
          </span>
          <span className="text-sm md:text-base font-bold">Heyscar Romero</span>
        </a>
      </div>
      <nav id="nav" className="w-full px-6">
        {items.map((item) => (
          <SideMenuItem {...item} key={item.path} />
        ))}
      </nav>
    </div>
  );
};
