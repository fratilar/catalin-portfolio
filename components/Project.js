import Image from "next/image";
import React from "react";

function Project({ project }) {
   return (
      <div className="project-container">
         <h2>{project.title}</h2>
         <div className="img-container">
            <Image src={project.src} alt={project.title} layout="fill" objectFit="cover" />
         </div>
      </div>
   );
}

export default Project;
