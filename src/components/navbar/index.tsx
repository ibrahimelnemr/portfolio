import React, { useState } from "react";
import Link from "next/link";
import NavbarLink from "./navbarLink";
import { CornerText } from "../../data/Data";
import HamburgerMenu from "../hamburgerMenu";

export default function Navbar() {
  const navbarItems: { name: string; url: string }[] = [
    { name: "About", url: "/about" },
    { name: "Projects", url: "/projects" },
    { name: "Skills", url: "/skills" },
    { name: "Certifications", url: "/certifications" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <nav className="relative">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="text-lg font-extralight text-gray-400">
          {CornerText}
        </a>
        <HamburgerMenu navItems={navbarItems} />
        <div className="hidden lg:flex space-x-8">
          {Object.values(navbarItems).map((item, index) => (
            <div key={index}>
              <NavbarLink href={item.url} pageName={item.name} />
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
