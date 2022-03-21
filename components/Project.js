import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Project({ project }) {
   return (
      <div className="project-container">
         <motion.div
            className="img-container"
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.03 }}
            layoutId={project.id}
         >
            <Link href={"/project/" + project.id}>
               <a>
                  <Image src={project.src} alt={project.title} layout="fill" />
               </a>
            </Link>
         </motion.div>
      </div>
   );
}

export default Project;
