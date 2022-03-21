import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function ArrowScroll() {
   const { scrollYProgress } = useViewportScroll();
   const opacity = useTransform(scrollYProgress, [0, 0.01], [1, 0]);

   return (
      <motion.div id="arrowAnim" style={{ opacity }}>
         <div className="arrowSliding">
            <div className="arrow"></div>
         </div>
         <div className="arrowSliding delay1">
            <div className="arrow"></div>
         </div>
         <div className="arrowSliding delay2">
            <div className="arrow"></div>
         </div>
         <div className="arrowSliding delay3">
            <div className="arrow"></div>
         </div>
      </motion.div>
   );
}

export default ArrowScroll;
