import Head from "next/head";
import Banner from "../containers/Banner";
import Projects from "../containers/Projects";
import Footer from "../containers/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";
import OutsideClickHandler from "react-outside-click-handler";

export default function Home() {
   const [about, setAbout] = useState(false);
   const [contact, setContact] = useState(false);
   const [logos, setLogos] = useState(false);
   const [artworks, setArtworks] = useState(false);

   function updateCounters() {
      const counters = document.querySelectorAll(".counter");

      counters.forEach((counter) => {
         const target = Number(counter.getAttribute("data-target"));

         const c = Number(counter.textContent);

         const increment = target / 1000;

         if (c < target) {
            counter.textContent = Math.ceil(c + increment);
            setTimeout(updateCounters, 60);
         } else {
            counter.textContent = target;
         }
      });
   }

   useEffect(() => {
      setTimeout(updateCounters, 450);
   }, [about]);

   const container = {
      hidden: {
         opacity: 0,
      },
      visible: {
         opacity: 1,
      },
   };

   const item = {
      hidden: {
         scale: 0,
      },
      visible: {
         scale: 1,
         transition: { type: "tween", duration: 0.2 },
      },
   };

   return (
      <div>
         <Head>
            <title>Design Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="Images/icon.png" />
         </Head>

         <div>
            <Banner />
            <div className="modals">
               <div className="modal1">
                  <Image
                     src="/Images/about.png"
                     alt="About"
                     layout="fill"
                     objectFit="contain"
                     onClick={() => setAbout(true)}
                  />
               </div>
               <div className="modal2">
                  <Image
                     src="/Images/contact.png"
                     alt="Contact"
                     layout="fill"
                     objectFit="contain"
                     onClick={() => setContact(true)}
                  />
               </div>
               <div className="modal3">
                  <Image
                     src="/Images/logos.png"
                     alt="Logos"
                     layout="fill"
                     objectFit="contain"
                     onClick={() => setLogos(true)}
                  />
               </div>
               <div className="modal4">
                  <a href="#projects">
                     <Image
                        src="/Images/artworks.png"
                        alt="Artworks"
                        layout="fill"
                        objectFit="contain"
                        onClick={() => setArtworks(true)}
                     />
                  </a>
               </div>
            </div>

            <AnimatePresence>
               {about && (
                  <motion.div
                     className="contact_modal"
                     variants={container}
                     initial="hidden"
                     animate="visible"
                     exit="hidden"
                  >
                     <motion.div className="content" variants={item}>
                        <GrClose className="close-btn" onClick={() => setAbout(false)} />
                        <p>{`Probably the only person on the internet who doesn't claim to be a Graphic Design Guru.`}</p>
                        <p>
                           Just another illustrator/graphic designer inspired by the present political and social
                           issues, music and snowboarding culture.
                        </p>
                        <hr />
                        <div className="facts">
                           <div className="facts-content">
                              <div className="flex">
                                 <h3 className="counter" data-target="350">
                                    0
                                 </h3>
                                 <span>+</span>
                              </div>
                              <p>projects completed</p>
                           </div>
                           <div className="facts-content">
                              <h3 className="counter" data-target="1">
                                 0
                              </h3>
                              <p>time bullied by a client</p>
                           </div>
                           <div className="facts-content">
                              <h3 className="counter" data-target="842">
                                 0
                              </h3>
                              <p>Coffees consumed</p>
                           </div>
                        </div>
                     </motion.div>
                  </motion.div>
               )}
            </AnimatePresence>

            <AnimatePresence>
               {contact && (
                  <motion.div
                     className="contact_modal"
                     variants={container}
                     initial="hidden"
                     animate="visible"
                     exit="hidden"
                  >
                     <motion.div className="content" variants={item}>
                        <GrClose className="close-btn" onClick={() => setContact(false)} />
                        <p>drop me a message below</p>
                        <a href="mailto:hellocatfratila@gmail.com">hellocatfratila@gmail.com</a>
                     </motion.div>
                  </motion.div>
               )}
            </AnimatePresence>

            <AnimatePresence>
               {logos && (
                  <motion.div
                     className="logos_modal"
                     variants={container}
                     initial="hidden"
                     animate="visible"
                     exit="hidden"
                  >
                     <OutsideClickHandler onOutsideClick={() => setLogos(false)}>
                        <motion.div className="content" variants={item}>
                           <GrClose className="close-btn" onClick={() => setLogos(false)} />
                           <Image src="/Images/logos_1.jpg" alt="Logo-1-image" width={700} height={7000} />
                           <Image src="/Images/logos_2.jpg" alt="Logo-2-image" width={700} height={7000} />
                        </motion.div>
                     </OutsideClickHandler>
                  </motion.div>
               )}
            </AnimatePresence>

            <Projects />
            <Footer />
         </div>
      </div>
   );
}
