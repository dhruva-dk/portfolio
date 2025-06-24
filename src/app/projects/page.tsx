import React from "react";
import userData from "@/constants/user";
import { ProjectCard } from "@/components/projects/ProjectCard";

const Projects = () => {
  const baseImgUrl = "/projects";

  return (
    <section>
      <div className="max-w-6xl mx-auto mt-16 md:mt-60">
        <h1 className="text-5xl md:text-9xl font-bold text-center md:text-left">
          Projects
        </h1>
      </div>
      <div className="bg-card -mt-6 py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto">
          {userData.projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              imgUrl={baseImgUrl + project.imgUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
