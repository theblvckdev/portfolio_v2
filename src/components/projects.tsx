import axios from "axios";
import { useEffect, useState } from "react";
import ProjectCard from "./ui/project_card";

interface ToolsTypes {
  name: string;
  image: string;
}

interface Project {
  name: string;
  description: string;
  url: string;
  imageURL: string;
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
              const { name, description, url, tools, imageURL } = data;

              return (
                <ProjectCard
                  name={name}
                  description={description}
                  imageURL={imageURL}
                  tools={tools}
                  url={url}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
