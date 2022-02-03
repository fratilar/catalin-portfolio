import React, { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

function Modal({ title }) {
   const [modal, setModal] = useState(false);
   console.log(modal);

   return (
      <div className="relative">
         <div className="modal" onClick={() => setModal(true)}>
            <p className="modal-title">{title}</p>
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
