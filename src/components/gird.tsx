import React from "react";
import GridBox from "./ui/grid_box";
import CommunicationImage from "../assets/images/bg-grid.jpg";
import WorldMap from "../assets/svgs/World Map.svg";
import CodeImage from "../assets/svgs/b5.svg";
import ReactSVG from "../assets/svgs/re.svg";
import NextSVG from "../assets/svgs/next.svg";
import TailwindSVG from "../assets/svgs/tail.svg";
import TypescriptSVG from "../assets/svgs/ts.svg";
import JavascriptSVG from "../assets/svgs/js.svg";

interface TechStackTypes {
  imageURL: string;
  name: string;
}

const techStack: TechStackTypes[] = [
  {
    imageURL: ReactSVG,
    name: "react",
  },

  {
    imageURL: NextSVG,
    name: "next",
  },

  {
    imageURL: TailwindSVG,
    name: "tailwindcss",
  },

  {
    imageURL: TypescriptSVG,
    name: "typescript",
  },

  {
    imageURL: JavascriptSVG,
    name: "javascript",
  },
];

const Grid: React.FC = () => {
  return (
    <>
      <section
        id="about"
        className="py-[5rem] max-w-7xl mx-auto xl:px-0 md:px-5 px-3"
      >
        <div className="flex xl:flex-row flex-col lg:gap-10 gap-5">
          <div className="basis-2/3">
            <GridBox
              fadeDirection="fade-up"
              fadeDuration="1000"
              height="h-full"
              width="w-full"
              additionalClasses="relative overflow-hidden xl:h-full lg:h-[400px] h-[300px] w-full"
              gridBody={
                <>
                  <div className="absolute top-0 -z-10 left-0 w-full h-full">
                    <img
                      src={CommunicationImage}
                      className="w-full h-full object-cover"
                      alt="speaker gradient image "
                    />
                  </div>

                  <div className="absolute top-0 -z-10 left-0 w-full h-full bg-black bg-opacity-70"></div>

                  <div className="absolute bottom-0 left-0 md:p-10 p-5 z-10 max-w-2xl w-full">
                    <h3
                      style={{ lineHeight: "50px" }}
                      className="text-white xl:text-[45px] md:text-4xl text-2xl font-semibold font-poppins"
                    >
                      I prioritize client collaboration, fostering open
                      communication
                    </h3>
                  </div>
                </>
              }
            />
          </div>

          <div className="basis-1/3">
            <div className="flex xl:flex-col md:flex-row flex-col lg:gap-y-10 gap-5">
              <GridBox
                height="h-[200px]"
                width="w-full"
                additionalClasses="relative bg-secondary-0 flex items-center p-6 overflow-hidden"
                fadeDirection="fade-up"
                fadeDuration="1000"
                gridBody={
                  <>
                    <div className="absolute top-0 left-0 -z-10 w-full h-full">
                      <img
                        src={WorldMap}
                        className="w-full h-full object-cover opacity-40"
                        alt="world map svg"
                      />
                    </div>
                    <h4 className="text-white md:text-4xl text-2xl font-semibold font-poppins">
                      I'm flexible with different time zones
                    </h4>
                  </>
                }
              />

              <GridBox
                height="h-[200px]"
                width="w-full"
                additionalClasses="relative bg-secondary-0 flex flex-col justify-center p-6 overflow-hidden"
                fadeDirection="fade-up"
                fadeDuration="1000"
                gridBody={
                  <>
                    <div className="absolute top-10 right-0 -z-10 w-[300px] h-[200px]">
                      <img
                        src={CodeImage}
                        className="w-full h-full object-cover opacity-90"
                        alt="world map svg"
                      />
                    </div>
                    <div>
                      <h5 className="text-gray-400 text-base font-poppins">
                        I constantly try to improve
                      </h5>
                      <h4 className="text-white md:text-4xl text-2xl font-semibold font-poppins">
                        My tech stack
                      </h4>
                    </div>

                    <div className="mt-5 flex gap-3 items-center">
                      {techStack.map((data, index) => {
                        const { imageURL, name } = data;

                        return (
                          <div
                            key={index}
                            className="h-[40px] w-[40px] rounded-full ring-1 ring-gray-500 flex items-center justify-center bg-black"
                          >
                            <img
                              src={imageURL}
                              className="w-[50%] h-[50%]"
                              alt={name}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Grid;
