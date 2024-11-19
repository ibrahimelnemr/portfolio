import React from "react";
import Link from "next/link";

export default function NavbarLink({
  href,
  pageName,
  className
}: {
  href: string;
  pageName: string;
  className?: string;
}) {
  return (
    <Link href={href} className={className}>
      {pageName}
    </Link>
  );
}
