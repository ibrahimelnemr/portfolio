// components/contactSection/Contact.tsx
import React from "react";
import {
  GithubLogoUrl,
  LinkedInLogoUrl,
  LinkedInUrl,
  GithubUrl,
  ContactText,
  ContactEmail,
} from "../../data/Data";
import Section from "../../components/section";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <Section sectionName="Contact">
      <div className="flex justify-center items-center space-x-6 mb-6">
        {/* LinkedIn Icon */}
        <a href={LinkedInUrl} target="_blank" className="mx-3">
          <Image
            className="contact-logo"
            src={LinkedInLogoUrl}
            alt="LinkedIn"
            width={50}
            height={50}
          />
        </a>

        {/* Github Icon */}
        <a href={GithubUrl} target="_blank" className="mx-3">
          <Image
            className="contact-logo"
            src={GithubLogoUrl}
            alt="Github"
            width={50}
            height={50}
          />
        </a>
      </div>

      {/* Contact Text */}
      <div className="text-center p-4 mb-5 text-xl font-light">
        <p>{ContactText}</p>
        <p>
          You can also reach me via email at{" "}
          <a href={"mailto:" + ContactEmail} className="text-blue-600">
            {ContactEmail}
          </a>
        </p>
      </div>
    </Section>
  );
};

export default Contact;
