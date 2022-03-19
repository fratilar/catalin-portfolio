import React from "react";
import { BiUpArrow } from "react-icons/bi";
import Link from "next/link";

function Footer() {
   const date = new Date().getFullYear();
   return (
      <div className="footer-container">
         <Link href="#top">
            <BiUpArrow className="arrow" />
         </Link>
         <div className="footer-items">
            <p>catfratila &copy; {date}</p>
            <div className="line"></div>
            <a href="mailto:hellocatfratila@gmail.com">hellocatfratila@gmail.com</a>
            <div className="line"></div>
            <div className="social">
               <a href="https://www.instagram.com/" target="_blank">
                  Instagram
               </a>
               <a href="https://www.twitter.com/" target="_blank">
                  Twitter
               </a>
               <a href="https://dribbble.com/" target="_blank">
                  Dribble
               </a>
            </div>
         </div>
      </div>
   );
}

export default Footer;
