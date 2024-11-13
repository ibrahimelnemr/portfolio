import React, { useState } from "react";
import NavbarLink from "../navbar/navbarLink";

export default function HamburgerMenu({
  navItems,
}: {
  navItems: { name: string; url: string }[];
}) {
  const [navbarExpanded, setNavbarExpanded] = useState<boolean>(false);

  return (
    <div>
      <div className="lg:hidden flex items-center space-x-2">
        <button
          className="space-y-1"
          onClick={() => {
            setNavbarExpanded(!navbarExpanded);
            console.log("hamburgerMenu - navItems");
            console.log(navItems);
          }}
        >
          <span className="block w-6 h-1 bg-textPrimary"></span>
          <span className="block w-6 h-1 bg-textPrimary"></span>
          <span className="block w-6 h-1 bg-textPrimary"></span>
        </button>
      </div>

      <div
        className={`${
          navbarExpanded ? "hidden" : ""
        } lg:hidden flex flex-col text-textPrimary`}
      >
        {Object.values(navItems).map((item, index) => (
          <div key={index}>
            <NavbarLink href={item.url} pageName={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
