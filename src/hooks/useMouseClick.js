import { useRef, useState } from "react";

const useMouseClick = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleElementClick = (event) => {
      if (ref.current !== event.target) {
        ref.current = event.target;
      }
    };

    document.addEventListener("click", handleElementClick, true);

    return () => {
      document.removeEventListener("click", handleElementClick, true);
    };
  }, []);

  return ref;
};

export default useMouseClick;
