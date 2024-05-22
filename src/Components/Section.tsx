import React, { ReactNode } from "react";
import SectionTitle from "./SectionTitle";

interface SectionProps {
  children: ReactNode;
  sectionName: string;
}

const Section: React.FC<SectionProps> = (props) => {
  return (
    <div className="row p-5 m-0 bg-light g-4">
        <SectionTitle
            sectionName={props.sectionName}
        />
        { props.children }
    </div>
  );
};

export default Section;