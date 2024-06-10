import { ReactElement } from "react";

interface ComponentPropTypes {
  additionalClasses?: string;
  body: ReactElement;
}

const ProjectCard = ({ additionalClasses, body }: ComponentPropTypes) => {
  return (
    <>
      <div
        className={`ring-1 ring-gray-800 p-5 rounded-2xl ${additionalClasses}`}
      >
        {body}
      </div>
    </>
  );
};

export default ProjectCard;
