import { ReactElement } from "react";

interface ComponentProp {
  height?: string;
  width: string;
  additionalClasses?: string;
  gridBody: ReactElement;
  fadeDirection?: string;
  fadeDuration?: string;
}

const GridBox = ({
  height,
  width,
  additionalClasses,
  gridBody,
  fadeDirection,
  fadeDuration,
}: ComponentProp) => {
  return (
    <>
      <div
        data-aos={fadeDirection}
        data-aos-duration={fadeDuration}
        className={`ring-1 ring-gray-800 lg:rounded-3xl rounded-2xl p-5 ${height} ${width} ${additionalClasses}`}
      >
        {gridBody}
      </div>
    </>
  );
};

export default GridBox;
