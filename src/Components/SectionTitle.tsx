import React from "react";

interface SectionTitleProps {
    sectionName: string;
}

const SectionTitle: React.FunctionComponent<SectionTitleProps> = (props) => {
    return(
        <div className="col-12">
        <div className="text-center p-2 m-2 display-6">
            {props.sectionName}
        </div>
      </div>
    );
};

export default SectionTitle;