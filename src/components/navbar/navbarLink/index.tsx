import React from "react";
import Link from "next/link";

export default function NavbarLink({
  href,
  pageName,
}: {
  href: string;
  pageName: string;
}) {
  return (
    <Link href={href} className="text-gray-400 hover:text-gray-600 font-extralight">
      {pageName}
    </Link>
  );
}
