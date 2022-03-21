import React from "react";
import { BiUpArrow } from "react-icons/bi";
import Link from "next/link";

function Footer() {
   const date = new Date().getFullYear();
   return (
      <div className="footer-container">
         <Link href="#top">
            <a>
               <BiUpArrow className="arrow-up" />
            </a>
         </Link>
         <div className="footer-items">
            <p>catfratila &copy; {date}</p>
            <div className="line"></div>
            <div className="social">
               <Link href="https://www.instagram.com/itscatfratila/">
                  <a target="_blank">Instagram</a>
               </Link>
               <Link href="https://twitter.com/itscatfratila">
                  <a target="_blank">Twitter</a>
               </Link>
               <Link href="https://dribbble.com/itscatfratila">
                  <a target="_blank">Dribbble</a>
               </Link>
            </div>
            <div className="line"></div>
            <Link href="mailto:hellocatfratila@gmail.com">
               <a>hellocatfratila@gmail.com</a>
            </Link>
         </div>
      </div>
   );
}

export default Footer;
