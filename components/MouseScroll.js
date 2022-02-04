import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function MouseScroll() {
   const { scrollYProgress } = useViewportScroll();
   const opacity = useTransform(scrollYProgress, [0, 0.01], [1, 0]);

   return (
      <motion.div className="mouse_scroll" style={{ opacity }}>
         <div className="mouse">
            <div className="wheel"></div>
         </div>
         <p>Scroll</p>
      </motion.div>
   );
}

export default MouseScroll;
