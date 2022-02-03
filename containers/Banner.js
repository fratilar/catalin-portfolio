import Image from "next/image";
import React from "react";
import banner from "../public/Images/banner.png";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

function Banner() {
   const isSmall = useMediaQuery(600);
   const isMedium = useMediaQuery(1030);
   const isLarge = useMediaQuery(2000);

   const { scrollYProgress } = useViewportScroll();

   const translateRightSmall = useTransform(scrollYProgress, [0, 0.1], [0, 80]);
   const translateRightMedium = useTransform(scrollYProgress, [0, 0.1], [0, 150]);
   const translateRightLarge = useTransform(scrollYProgress, [0, 0.1], [0, 180]);
   const translateRightXL = useTransform(scrollYProgress, [0, 0.1], [0, 300]);
   const translateLeftSmall = useTransform(scrollYProgress, [0, 0.1], [0, -60]);
   const translateLeftMedium = useTransform(scrollYProgress, [0, 0.1], [0, -80]);
   const translateLeftLarge = useTransform(scrollYProgress, [0, 0.1], [0, -160]);
   const translateLeftXL = useTransform(scrollYProgress, [0, 0.1], [0, -250]);

   return (
      <div className="banner-container">
         <motion.div
            className="description-container"
            style={{
               x: isSmall
                  ? translateLeftSmall
                  : isMedium
                  ? translateLeftMedium
                  : isLarge
                  ? translateLeftLarge
                  : translateLeftXL,
            }}
         >
            <h1>Catalin Alexandru Fratila</h1>
            <p>
               Design, Tattoos, and Snowboarding. <br />
               Let's connect!
            </p>
         </motion.div>
         <motion.div
            className="image-container"
            style={{
               x: isSmall
                  ? translateRightSmall
                  : isMedium
                  ? translateRightMedium
                  : isLarge
                  ? translateRightLarge
                  : translateRightXL,
            }}
         >
            <Image src={banner} alt="banner" layout="fill" objectFit="contain" />
         </motion.div>
      </div>
   );
}

export default Banner;
