import React from "react";
import { BsHandIndexThumb } from "react-icons/bs";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function FingerScroll() {
   const { scrollYProgress } = useViewportScroll();
   const opacity = useTransform(scrollYProgress, [0, 0.01], [1, 0]);

   return (
      <motion.div className="finger-scroll" style={{ opacity }}>
         <BsHandIndexThumb className="finger-icon" />
         <p>Swipe up</p>
      </motion.div>
   );
}

export default FingerScroll;
