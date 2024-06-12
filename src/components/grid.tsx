import React, { useState } from "react";
import GridBox from "./ui/grid_box";
import CommunicationImage from "../assets/images/bg-grid.jpg";
import WorldMap from "../assets/svgs/World Map.svg";
import CodeImage from "../assets/svgs/b5.svg";
import LayoutImage from "../assets/svgs/b4.svg";
import ReactSVG from "../assets/svgs/re.svg";
import NextSVG from "../assets/svgs/next.svg";
import TailwindSVG from "../assets/svgs/tail.svg";
import TypescriptSVG from "../assets/svgs/ts.svg";
import JavascriptSVG from "../assets/svgs/js.svg";
import Gridbg from "../assets/svgs/grid-small.svg";
import MagicButton from "./ui/magic_button";
import Confeti from "../assets/images/confetti.gif";
import BgFade from "../assets/images/bg.png";
import { IoCopyOutline } from "react-icons/io5";

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
  const [copied, setCopied] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  const handleCopy = () => {
    const text = "nathancodes05@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 1000);
  };

  return (
    <>
      <section
        id="about"
        className="md:py-[5rem] py-[3rem] max-w-7xl mx-auto xl:px-0 md:px-5 px-3"
      >
        <div className="flex xl:flex-row flex-col lg:gap-10 gap-5">
          <div className="basis-2/3">
            <GridBox
              fadeDirection="fade-up"
              fadeDuration="1000"
              width="w-full"
              additionalClasses="relative overflow-hidden xl:h-full lg:h-[400px] md:h-[300px] h-[200px] w-full"
              gridBody={
                <>
                  <div className="absolute top-0 -z-10 left-0 w-full h-full">
                    <img
                      src={CommunicationImage}
                      className="w-full h-full object-cover"
                      alt="speaker gradient image "
                    />
                  </div>

                  <div className="absolute top-0 -z-10 left-0 w-full h-full bg-black bg-opacity-60"></div>

                  <div className="absolute bottom-0 left-0 md:p-10 p-5 z-10 max-w-xl w-full">
                    <h3
                      // style={{ lineHeight: "50px" }}
                      className="text-white md:text-4xl text-2xl font-semibold font-poppins"
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
                    <h4 className="text-white md:text-3xl text-2xl font-semibold font-poppins">
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
                        className="w-full h-full object-fill opacity-90"
                        alt="world map svg"
                      />
                    </div>
                    <div>
                      <h5 className="text-gray-400 text-base font-poppins">
                        I constantly try to improve
                      </h5>
                      <h4 className="text-white md:text-3xl text-2xl font-semibold font-poppins">
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

        <div className="lg:mt-10 mt-5 flex xl:flex-row flex-col-reverse lg:gap-10 gap-5">
          <div className="basis-1/3">
            <div className="flex xl:flex-col md:flex-row flex-col lg:gap-y-10 gap-5">
              <GridBox
                height="h-[200px]"
                width="w-full"
                additionalClasses="relative bg-secondary-0 flex flex-col justify-center p-6 overflow-hidden"
                fadeDirection="fade-up"
                fadeDuration="1000"
                gridBody={
                  <>
                    <div className="absolute top-14 right-0 -z-10 w-[300px] h-[200px]">
                      <img
                        src={LayoutImage}
                        className="w-full h-full object-fill"
                        alt="world map svg"
                      />
                    </div>
                    <div className="absolute top-0 right-0 -z-10 w-full h-full">
                      <img
                        src={Gridbg}
                        className="w-full h-full object-cover opacity-90"
                        alt="grid background svg"
                      />
                    </div>
                    <div>
                      <h4 className="text-white md:text-3xl text-2xl font-semibold font-poppins">
                        I have a passion for development.
                      </h4>
                    </div>
                  </>
                }
              />

              <GridBox
                height="h-[200px]"
                width="w-full"
                additionalClasses="relative gradient-background flex items-center flex-col p-6 overflow-hidden"
                fadeDirection="fade-up"
                fadeDuration="1000"
                gridBody={
                  <>
                    <h4 className="text-white md:text-3xl text-center text-2xl font-semibold font-poppins">
                      Want to us start a project together?
                    </h4>

                    <div className="md:mt-0 mt-5">
                      <MagicButton
                        title={
                          copied ? "Email is Copied!" : "Copy my email address"
                        }
                        icon={<IoCopyOutline />}
                        position="left"
                        handleClick={handleCopy}
                        otherClasses="w-full"
                      />

                      <img
                        src={Confeti}
                        className={`absolute bottom-0 left-[50%] -translate-x-[50%] -z-10 h-[200px] object-cover ${
                          showConfetti ? "block" : "hidden"
                        } w-[200px]`}
                        alt="confeti"
                      />
                    </div>
                  </>
                }
              />
            </div>
          </div>

          <div className="basis-2/3">
            <GridBox
              fadeDirection="fade-up"
              fadeDuration="1000"
              height="h-full"
              width="w-full"
              additionalClasses="relative overflow-hidden bg-secondary-0 xl:h-full lg:h-[400px] h-[350px] w-full"
              gridBody={
                <>
                  {/* <div className="absolute top-0 -z-10 left-0 w-full h-full">
                    <img
                      src={Gridbg}
                      className="w-full h-full object-cover"
                      alt="speaker gradient image "
                    />
                  </div> */}

                  <div className="absolute top-0 left-0 -z-10 w-full h-full">
                    <img
                      src={BgFade}
                      className="w-full h-full object-fill"
                      alt="world map svg"
                    />
                  </div>

                  <div className="md:p-10 p-5 z-10 flex-col max-w-2xl h-full flex justify-center w-full">
                    <h5 className="text-gray-400 text-base font-poppins">
                      The Inside Scoop
                    </h5>
                    <h3
                      // style={{ lineHeight: "50px" }}
                      className="text-white md:text-4xl text-2xl font-semibold font-poppins"
                    >
                      I'm always building new stuff to improve my skill and be
                      among the top 1%.
                    </h3>
                  </div>
                </>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Grid;
