import React from "react";
import Project from "../components/Project";
import { projects } from "../projects";

function Projects() {
   return (
      <div className="projects-container">
         <div className="grid">
            {projects.map((project) => (
               <Project key={project.id} project={project} />
            ))}
         </div>
      </div>
   );
}

export default Projects;
