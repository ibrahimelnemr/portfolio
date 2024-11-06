// components/skillsSection/SkillsImage.tsx
import Image from "next/image";
import React from "react";

interface SkillsImageProps {
  imageSrc: string;
}

const SkillsImage: React.FC<SkillsImageProps> = ({ imageSrc }) => {
  return (
    <div className="flex justify-center items-center p-4">
      <Image
        className=""
        src={imageSrc}
        alt="Skill Logo"
        width={100}
        height={100}
        layout="intrinsic"
      />
    </div>
  );
};

export default SkillsImage;
