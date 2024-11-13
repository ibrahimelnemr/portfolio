import React from "react";
import Link from "next/link";
import NavbarLink from "./navbarLink";
import { CornerText } from "../../data/Data";

export default function Navbar() {
  return (
    <nav className="relative">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="text-lg font-extralight text-gray-400">
          { CornerText }
        </a>

        <button
          className="lg:hidden text-gray-600 focus:outline-none"
          type="button"
          aria-label="Toggle navigation"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="material-icons">menu</span>
        </button>

        <div className="hidden lg:flex space-x-8">
          <NavbarLink href="/about" pageName="About" />

          <NavbarLink href="/projects" pageName="Projects" />

          <NavbarLink href="/skills" pageName="Skills" />

          <NavbarLink href="/certifications" pageName="Certifications" />

          <NavbarLink href="/contact" pageName="Contact" />
        </div>
      </div>
    </nav>
  );
}
