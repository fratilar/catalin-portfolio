import React from "react";
import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { projects } from "../../projects";

function Images() {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const prev_url = `/project/${id == 1 ? id : id - 1}`;
  const next_url = `/project/${id == projects.length ? id : +id + 1}`;

  // console.log(projects);
  return (
    <AnimatePresence>
      <div className="images-page">
        <div className="top-right">
          <CgClose className="icon" onClick={() => router.back()} />

          <MdOutlineArrowBackIosNew
            className="icon"
            onClick={() => router.replace(prev_url)}
          />

          <MdOutlineArrowForwardIos
            className="icon"
            onClick={() => router.replace(next_url)}
          />
        </div>
        <motion.div layoutId={id}>
          <Image
            src={`/Images/${id < 10 ? "0" + id : id}.png`}
            width={700}
            height={1000}
            alt=""
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Images;
