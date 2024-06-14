import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import { IoLinkOutline, IoTimeOutline } from "react-icons/io5";

interface ToolsTypes {
  name: string;
  image: string;
}

interface ComponentProp {
  name: string;
  description: string;
  url: string;
  imageURL: string;
  tools: ToolsTypes[];
  // Add other fields as necessary
}

const ProjectCard = ({
  imageURL,
  name,
  description,
  tools,
  url,
}: ComponentProp) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["9.5deg", "-9.5deg"]
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-9.5deg", "9.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    const rect = target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
        className="bg-secondary-0 p-2 lg:rounded-3xl rounded-2xl ring-1 ring-gray-800"
      >
        <div
          className="p-3 bg-white bg-opacity-5 backdrop-blur-md rounded-2xl shadow-md"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(30px)",
          }}
        >
          <div className="h-[180px] rounded-xl shadow-lg w-full overflow-hidden">
            <img
              src={imageURL}
              className="h-full w-full object-cover"
              alt={name}
            />
          </div>
          <div className="mt-3">
            <h4 className="text-white font-poppins font-semibold text-xl">
              {name}
            </h4>

            <p className="mt-2 text-sm text-gray-400 font-poppins">
              {description}
            </p>

            <div className="mt-4">
              <div className="flex flex-row items-center">
                <div className="mr-auto flex gap-2">
                  {tools.map((data, index) => {
                    const { image, name } = data;

                    return (
                      <div
                        key={index}
                        className="h-[30px] w-[30px] rounded-full ring-1 ring-gray-500 flex items-center justify-center bg-black"
                      >
                        <img
                          src={image}
                          className="w-[50%] h-[50%]"
                          alt={name}
                        />
                      </div>
                    );
                  })}
                </div>

                <div>
                  <a
                    href={url}
                    target="_blank"
                    className={`no-underline tracking-tighter outline-none text-primary-0 text-sm font-code ${
                      url === null ? "cursor-not-allowed" : "cursor-pointer"
                    }`}
                  >
                    {url === null ? (
                      <>
                        <div className="flex items-center gap-2">
                          <div>Coming soon</div>
                          <IoTimeOutline />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-2">
                          <div>Check Live Site</div>
                          <IoLinkOutline />
                        </div>
                      </>
                    )}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectCard;
