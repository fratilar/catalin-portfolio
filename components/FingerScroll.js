import React from "react";
import { FaRegHandPointer } from "react-icons/fa";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function FingerScroll() {
   const { scrollYProgress } = useViewportScroll();
   const opacity = useTransform(scrollYProgress, [0, 0.01], [1, 0]);

   return (
      <motion.div className="finger-scroll" style={{ opacity }}>
         <FaRegHandPointer className="finger-icon" />
         <p>Swipe up</p>
      </motion.div>
   );
}

export default FingerScroll;
