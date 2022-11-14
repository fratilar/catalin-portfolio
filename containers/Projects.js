import React from "react";
import Project from "../components/Project";

export default function Projects({ projects }) {
   return (
      <div className="projects-container" id="projects">
         <div className="grid">
            {projects?.map((project) => (
               <Project key={project._id} project={project} />
            ))}
         </div>
      </div>
   );
}
