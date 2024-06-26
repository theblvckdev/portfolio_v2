import React, { ReactElement } from "react";
import {
  IoBriefcaseOutline,
  IoHomeOutline,
  IoMailOutline,
  IoMegaphoneOutline,
  IoPersonOutline,
} from "react-icons/io5";

interface NavbarLinksTypes {
  name: string;
  path: string;
  isOpen: boolean;
  icon: ReactElement;
}

const navbarLinks: NavbarLinksTypes[] = [
  {
    name: "Home",
    path: "#",
    isOpen: true,
    icon: <IoHomeOutline className="text-2xl" />,
  },

  {
    name: "About",
    path: "#about",
    isOpen: false,
    icon: <IoPersonOutline className="text-2xl" />,
  },

  {
    name: "Projects",
    path: "#projects",
    isOpen: false,
    icon: <IoBriefcaseOutline className="text-2xl" />,
  },

  {
    name: "Reviews",
    path: "#reviews",
    isOpen: false,
    icon: <IoMegaphoneOutline className="text-2xl" />,
  },

  {
    name: "Contact",
    path: "#contact",
    isOpen: false,
    icon: <IoMailOutline className="text-2xl" />,
  },
];

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="fixed shadow-xl md:flex z-50 top-0 left-[50%] my-5 -translate-x-[50%] md:max-w-xl max-w-[350px] w-full ring-1 ring-primary-0 bg-secondary-0 bg-opacity-70 hidden items-center justify-between backdrop-blur-sm p-5 rounded-full">
        {navbarLinks.map((data, index) => {
          const { name, path, isOpen, icon } = data;

          return (
            <a
              data-aos="fade-in"
              data-aos-duration="2000"
              key={index}
              href={path}
              className={`text-sm font-code flex items-center gap-2 duration-300 text-center ease-in hover:text-primary-0 capitalize ${
                isOpen ? "text-primary-0" : "text-white"
              }`}
            >
              {icon} <div className="text-sm">{name}</div>
            </a>
          );
        })}
      </nav>

      <nav className="fixed shadow-xl md:hidden z-50 top-0 left-[50%] my-5 -translate-x-[50%] md:max-w-xl max-w-[350px] w-full ring-1 ring-primary-0 bg-secondary-0 bg-opacity-30 flex items-center justify-between backdrop-blur-sm md:p-5 p-3 rounded-full">
        {navbarLinks.map((data, index) => {
          const { icon, path, isOpen } = data;

          return (
            <a
              key={index}
              href={path}
              className={`h-[40px] w-[40px] flex items-center justify-center rounded-full hover:bg-primary-0 hover:text-secondary-0 font-code duration-300 text-center ease-in capitalize ${
                isOpen
                  ? "bg-primary-0 text-secondary-0"
                  : "bg-transparent text-white"
              }`}
            >
              {icon}
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
