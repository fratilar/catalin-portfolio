import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { client, urlFor } from '../../client';

function Images({ artwork }) {

  const router = useRouter();
  const { query: { slug } } = router;

  // const prev_url = `/project/${id == 1 ? id : id - 1}`;
  // const next_url = `/project/${id == projects.length ? id : +id + 1}`;

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
        <motion.div layoutId={slug}>
          <Image
            src={`${urlFor(artwork.image)}`}
            width={700}
            height={1000}
            alt={artwork.title}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export async function getStaticPaths() {
  const query = `*[_type == "artworks"] {
    slug {
      current
    }
  }
  `;

  const artworks = await client.fetch(query);

  const paths = artworks.map((artwork) => ({
    params: { 
      slug: artwork.slug.current
    }
  }));

  return {
    paths,
    fallback: "blocking"
  }
}

export async function getStaticProps({params: {slug}}){
  const query = `*[_type == "artworks" && slug.current == "${slug}"][0]`;
  const artwork = await client.fetch(query);
  
  return {
    props: { artwork }
  }
}

export default Images;
