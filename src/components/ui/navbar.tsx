import React from "react";
import { Link } from "react-router-dom";

interface NavbarLinksTypes {
  name: string;
  path: string;
  isOpen: boolean;
}

const navbarLinks: NavbarLinksTypes[] = [
  {
    name: "Home",
    path: "/",
    isOpen: true,
  },

  {
    name: "About",
    path: "/about",
    isOpen: false,
  },

  {
    name: "Projects",
    path: "/projects",
    isOpen: false,
  },

  {
    name: "Reviews",
    path: "/reviews",
    isOpen: false,
  },

  {
    name: "Contact",
    path: "/contact",
    isOpen: false,
  },
];

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="fixed shadow-xl z-50 top-0 left-[50%] my-10 -translate-x-[50%] max-w-xl w-full ring-1 ring-primary-0 bg-secondary-0 bg-opacity-30 flex items-center justify-evenly backdrop-blur-sm p-5 rounded-xl">
        {navbarLinks.map((data, index) => {
          const { name, path, isOpen } = data;

          return (
            <Link
              data-aos="fade-in"
              data-aos-duration="2000"
              key={index}
              to={path}
              className={`text-base font-poppins duration-300 ease-in hover:text-primary-0 capitalize ${
                isOpen ? "text-primary-0" : "text-white"
              }`}
            >
              {name}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Navbar;
