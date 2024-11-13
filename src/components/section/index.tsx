import React, { ReactNode } from "react";
import SectionTitle from "./sectionTitle";

export default function Section({
  children,
  sectionName,
}: {
  children: ReactNode;
  sectionName: string;
}) {
  return (
    <section className="p-10 animate-fadeInUp min-h-[40vh] font-extralight text-gray-400">
      <SectionTitle sectionName={sectionName} />
      <div className="grid grid-cols-1 gap-8 mt-4">{children}</div>
    </section>
  );
}
