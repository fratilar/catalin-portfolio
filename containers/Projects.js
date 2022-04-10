import React from "react";
import Project from "../components/Project";
import { projects } from "../projects";

function Projects() {
   return (
      <div className="projects-container" id="projects">
         <div className="grid">
            {[...projects].reverse().map((project) => (
               <Project key={project.id} project={project} />
            ))}
         </div>
      </div>
   );
}

export default Projects;
