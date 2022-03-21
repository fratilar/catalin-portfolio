import Image from "next/image";
import React, { useEffect, useState } from "react";
import banner from "../public/Images/cover_medium.png";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import ArrowScroll from "../components/ArrowScroll";
import FingerScroll from "../components/FingerScroll";

function Banner() {
   const isTablet = useMediaQuery(1000);

   const [tablet, setTablet] = useState(false);

   useEffect(() => {
      isTablet ? setTablet(true) : setTablet(false);
   }, [isTablet]);

   const { scrollYProgress } = useViewportScroll();

   const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0.8, 1]);

   return (
      <div className="banner-container">
         <Image src={banner} alt="banner" layout="fill" priority />
         <motion.div className="overlay" style={{ opacity }}></motion.div>
         {tablet ? <FingerScroll /> : <ArrowScroll />}
      </div>
   );
}

export default Banner;
