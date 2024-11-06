import React from "react";
import Section from "../../components/section";
import Image from "next/image";
import { ProfileImageUrl, AboutText } from "../../data/Data";

export default function About() {
  return (
    <Section sectionName="About">
      <div className="lg:flex lg:items-center lg:space-x-8">
        <div className="flex justify-center lg:w-1/3 mb-8 lg:mb-0">
          <Image
            className="rounded-xl"
            src={ProfileImageUrl}
            alt="Profile Image"
            width={300}
            height={300}
          />
        </div>
        
        <div className="text-center lg:text-left lg:w-2/3">
          <p className="text-xl lg:text-2xl font-extralight text-gray-700 mx-5 lg:mx-0">
            {AboutText}
          </p>
        </div>
      </div>
    </Section>
  );
}
