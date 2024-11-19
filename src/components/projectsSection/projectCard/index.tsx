import React from "react";
import ISectionCard from "../../../interfaces/ISectionCard";

const ProjectCard: React.FC<ISectionCard> = ({
  title,
  text = "",
  link = "",
  linkText = "View on GitHub",
  isGithubLink = false, 
}) => {
  return (
    <div className="lg:w-1/2 md:w-1/2 sm:w-full p-4">
      <div className="bg-gray-800 shadow-lg rounded-lg p-5 mb-5 h-full flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-extralight mb-3">{title}</h3>
          <p className="mb-3 text-gray-300 line-clamp-3">{text}</p> {/* Truncate text */}
        </div>
        <div className="mt-auto">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 px-4 rounded-md bg-gray-500 text-white hover:bg-gray-700"
          >
            <i className={`fab fa-github ${isGithubLink ? "mr-2" : ""}`}></i>
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
