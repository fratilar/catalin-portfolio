import { useEffect, useState } from "react";

function useMediaQuery(size) {
   if (typeof window !== "undefined") {
      const [width, setWidth] = useState(window.innerWidth);

      useEffect(() => {
         function handleWidth() {
            setWidth(window.innerWidth);
         }

         window.addEventListener("resize", handleWidth);

         return () => window.removeEventListener("resize", handleWidth);
      }, [width]);

      return width < size;
   }
}

export default useMediaQuery;
