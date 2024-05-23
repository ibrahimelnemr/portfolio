import React, { ReactNode } from "react";

interface ImageContainerProps {
    children: ReactNode;
}

const ImageContainer: React.FunctionComponent<ImageContainerProps> = (
  props
) => {
  return (
    <>
      <div className="col-12">
        <div className="row d-flex justify-content-center row-cols-auto m-3 g-5">
            { props.children }
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
