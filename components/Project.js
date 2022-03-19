import Image from "next/image";
import React from "react";

function Project({ project }) {
   return (
      <div className="project-container">
         <div className="img-container">
            <Image src={project.src} alt={project.title} layout="fill" />
         </div>
      </div>
   );
}

export default Project;
