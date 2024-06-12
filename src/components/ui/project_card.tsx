import { IoArrowForwardOutline } from "react-icons/io5";

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
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="bg-secondary-0 p-3 lg:rounded-3xl rounded-2xl ring-1 ring-gray-800"
      >
        <div className="h-[180px] rounded-xl w-full overflow-hidden">
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
                      <img src={image} className="w-[50%] h-[50%]" alt={name} />
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
                  {url === "coming soon" ? (
                    "Coming soon"
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <div>Check Live Site</div>
                        <IoArrowForwardOutline />
                      </div>
                    </>
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
