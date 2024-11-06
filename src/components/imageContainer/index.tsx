// components/imageContainer/ImageContainer.tsx
import React, { ReactNode } from "react";

interface ImageContainerProps {
  children: ReactNode;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ children }) => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-5">
        {children}
      </div>
    </div>
  );
};

export default ImageContainer;
