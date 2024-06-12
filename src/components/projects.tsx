import axios from "axios";
import { useEffect, useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

interface ToolsTypes {
  name: string;
  image: string;
}

interface Project {
  name: string;
  description: string;
  url: string;
  tools: ToolsTypes[];
  // Add other fields as necessary
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getProjectData = async () => {
      try {
        const response = await axios.get<Project[]>("/data/projects_data.json");
        // console.log(response.data);
        setProjects(response.data);
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.error("Axios error:", err.message);
        } else {
          console.error("Unexpected error:", err);
        }
      }
    };

    getProjectData();
  }, []);

  return (
    <>
      <section
        className="md:py-[5rem] py-[3rem] max-w-7xl mx-auto xl:px-0 md:px-5 px-3"
        id="projects"
      >
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center lg:text-5xl md:text-3xl text-2xl font-bold text-white font-poppins capitalize"
        >
          Showcasing my skills -{" "}
          <span className="text-primary-0">Recent Projects</span>.
        </h1>

        <div className="mt-10">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {projects.map((data, index) => {
              const { name, description, url, tools } = data;

              return (
                <div key={index}>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="bg-secondary-0 p-3 lg:rounded-3xl rounded-2xl ring-1 ring-gray-800"
                  >
                    <div className="h-[200px] bg-primary-0 rounded-xl w-full overflow-hidden"></div>
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
                                url === null
                                  ? "cursor-not-allowed"
                                  : "cursor-pointer"
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
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
