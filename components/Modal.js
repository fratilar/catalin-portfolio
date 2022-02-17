import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import Image from "next/image";

function Modal({ src, title }) {
   const [modal, setModal] = useState(false);

   return (
      <div className="relative">
         <div className="modal relative" onClick={() => setModal(true)}>
            <Image src={src} alt={title} layout="fill" objectFit="contain" className="modal-title" />
         </div>

         {modal && (
            <div className="about-me">
               <MdOutlineClose className="close-btn" onClick={() => setModal(false)} />
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus accusamus praesentium, at,
                  repudiandae exercitationem illo ut officia assumenda unde tenetur tempore reiciendis. Enim, a.
                  Eligendi at error nulla aspernatur quidem.
               </p>
            </div>
         )}
      </div>
   );
}

export default Modal;
