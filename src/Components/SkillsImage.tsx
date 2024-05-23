import React from "react";

interface SkillsImageProps {
    imageSrc: string;
}

const SkillsImage: React.FunctionComponent<SkillsImageProps> = (props) => {
    return (
        <div className="col text-center d-flex align-items-center">
            <img className="img-fluid logo" src={props.imageSrc} alt="" />
        </div>
    );
}

export default SkillsImage;