import { projects } from "../data/projects";
import ProjectCard from "./ui/project_card";
export interface ToolsTypes {
  name: string;
  image: string;
}

export interface Project {
  name: string;
  description: string;
  url: string | undefined;
  imageURL: string;
  tools: ToolsTypes[];
  // Add other fields as necessary
}

const Projects = () => {
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
          Showcasing my skills through{" "}
          <span className="text-primary-0">Projects</span>.
        </h1>

        <div className="mt-10">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5"
          >
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
