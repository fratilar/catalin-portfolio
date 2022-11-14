import Image from "next/image";
import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import ArrowScroll from "../components/ArrowScroll";
import { urlFor } from "../client";

function Banner({ cover }) {
  const { scrollYProgress } = useViewportScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [0, 0.8, 1]);

  return (
    <div className="banner-container">
      <Image src={`${urlFor(cover[0].image)}`} alt={cover[0].title} layout="fill" priority />
      <motion.div className="overlay" style={{ opacity }}></motion.div>
      <ArrowScroll />
    </div>
  );
}

export default Banner;
