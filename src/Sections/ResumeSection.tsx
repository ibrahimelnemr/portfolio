import React from "react";
interface ResumeSectionProps {}

const ResumeSection: React.FunctionComponent<ResumeSectionProps> = () => {
  return (
    <>
      <div id="resume" className="row p-0 m-0">
        <div className="col-12">
          <div className="text-center p-2 m-2 display-4">Resume</div>
        </div>
      </div>
    </>
  );
}

export default ResumeSection;
