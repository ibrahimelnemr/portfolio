import React, { useState } from "react";
import NavbarLink from "../navbar/navbarLink";

export default function HamburgerMenu({
  navItems,
}: {
  navItems: { name: string; url: string }[];
}) {
  const [navbarExpanded, setNavbarExpanded] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        className="flex flex-col justify-center items-center space-y-1 lg:hidden focus:outline-none z-50"
        onClick={() => setNavbarExpanded(!navbarExpanded)}
        aria-label="Toggle Menu"
      >
        <span
          className={`block w-6 h-1 bg-gray-700 dark:bg-white transform transition-transform duration-300 ${
            navbarExpanded ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-1 bg-gray-700 dark:bg-white transition-opacity duration-300 ${
            navbarExpanded ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-1 bg-gray-700 dark:bg-white transform transition-transform duration-300 ${
            navbarExpanded ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-95 text-white flex flex-col items-center justify-center transform transition-all duration-300 z-50 ${
          navbarExpanded ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-6 text-lg">
          {Object.values(navItems).map((item, index) => (
            <li key={index}>
              <NavbarLink
                href={item.url}
                pageName={item.name}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
