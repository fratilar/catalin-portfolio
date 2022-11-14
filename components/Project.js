import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "../client";

function Project({ project }) {
   return (
      <div className="project-container">
         <motion.div
            className="img-container"
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.03 }}
            layoutId={project._id}
         >
            <Link href={"/project/" + project.slug.current}>
               <a>
                 <Image src={`${urlFor(project.image)}`} alt={project.title} layout="fill" objectFit="contain" />
               </a>
            </Link>
         </motion.div>
      </div>
   );
}

export default Project;
