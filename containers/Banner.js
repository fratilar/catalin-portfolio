import Image from "next/image";
import React from "react";
import banner from "../public/Images/cover_medium.png";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import ArrowScroll from "../components/ArrowScroll";

function Banner() {
  const { scrollYProgress } = useViewportScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0.8, 1]);

  return (
    <div className="banner-container">
      <Image src={banner} alt="banner" layout="fill" priority />
      <motion.div className="overlay" style={{ opacity }}></motion.div>
      <ArrowScroll />
    </div>
  );
}

export default Banner;
