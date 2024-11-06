// components/certificationCard/CertificationCard.tsx
import React from "react";
import ISectionCard from "../../../interfaces/ISectionCard";

const CertificationCard: React.FC<ISectionCard> = ({
  title,
  bulletPoints = [],
  link = "",
  linkText = "View Certification", 
  isGithubLink = false,
}) => {
  return (
    <div className="lg:w-1/2 md:w-1/2 sm:w-full p-4">
      <div className="bg-gray-100 shadow-lg rounded-lg p-5 mb-5 border border-gray-200">
        <h3 className="text-2xl font-extralight mb-3">{title}</h3>
        <ul className="list-disc pl-5 text-gray-700">
          {bulletPoints.map((bulletPoint, index) => (
            <li key={index}>{bulletPoint}</li>
          ))}
        </ul>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 inline-block py-2 px-4 rounded-md bg-gray-500 text-white hover:bg-gray-700`}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default CertificationCard;
