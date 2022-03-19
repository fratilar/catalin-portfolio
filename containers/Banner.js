import Image from "next/image";
import React, { useEffect, useState } from "react";
import banner from "../public/Images/cover_medium.png";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import MouseScroll from "../components/MouseScroll";
import FingerScroll from "../components/FingerScroll";

function Banner() {
   // const isSmall = useMediaQuery(600);
   const isTablet = useMediaQuery(1000);
   // const isMedium = useMediaQuery(1030);
   // const isLarge = useMediaQuery(2000);

   const [tablet, setTablet] = useState(false);

   useEffect(() => {
      isTablet ? setTablet(true) : setTablet(false);
   }, [isTablet]);

   const { scrollYProgress } = useViewportScroll();

   const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0.8, 1]);

   // const translateRightSmall = useTransform(scrollYProgress, [0, 0.1], [0, 0]);
   // const translateRightMedium = useTransform(scrollYProgress, [0, 0.1], [0, 150]);
   // const translateRightLarge = useTransform(scrollYProgress, [0, 0.1], [0, 180]);
   // const translateRightXL = useTransform(scrollYProgress, [0, 0.1], [0, 300]);

   // const translateLeftSmall = useTransform(scrollYProgress, [0, 0.1], [0, 0]);
   // const translateLeftMedium = useTransform(scrollYProgress, [0, 0.1], [0, -80]);
   // const translateLeftLarge = useTransform(scrollYProgress, [0, 0.1], [0, -160]);
   // const translateLeftXL = useTransform(scrollYProgress, [0, 0.1], [0, -250]);

   return (
      <div className="banner-container">
         <Image src={banner} alt="banner" layout="fill" priority />
         <motion.div className="overlay" style={{ opacity }}></motion.div>
         {tablet ? <FingerScroll /> : <MouseScroll />}
      </div>
   );
}

export default Banner;
