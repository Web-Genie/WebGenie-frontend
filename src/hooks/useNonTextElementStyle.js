import { useContext, useEffect } from "react";

import { Context } from "../store/Store";

const useNonTextElementStyle = () => {
  const { globalState, dispatch } = useContext(Context);
  const { currentElement, elementStyle } = globalState;

  const handleElementStyleValueChange = (target, value) => {
    if (target === "opacity") {
      currentElement.style.opacity = value;

      dispatch({
        type: "SET_IMAGE_STYLE",
        payload: { target, value },
      });
    } else if (target === "radius") {
      currentElement.style.borderRadius = `${value}px`;

      dispatch({
        type: "SET_IMAGE_STYLE",
        payload: { target, value },
      });
    } else if (target === "blur") {
      currentElement.style.filter = `blur(${value}px) brightness(${elementStyle.brightness})`;

      dispatch({
        type: "SET_IMAGE_STYLE",
        payload: { target, value },
      });
    } else {
      currentElement.style.filter = `blur(${elementStyle.blur}px) brightness(${value})`;

      dispatch({
        type: "SET_IMAGE_STYLE",
        payload: { target, value },
      });
    }
  };

  useEffect(() => {
    const currentElementOpacityStyle =
      window.getComputedStyle(currentElement).opacity;

    const currentElementFilterStyle = window
      .getComputedStyle(currentElement)
      .filter.split(" ")
      .map((styleValue) => styleValue.replace(/[^0-9.]/g, ""));

    const currentElementRadiusStyle = window
      .getComputedStyle(currentElement)
      .borderRadius.replace("px", "");

    const currentElementColorStyle =
      window.getComputedStyle(currentElement).color;

    if (currentElementFilterStyle[0]) {
      dispatch({
        type: "RESET_IMAGE_STYLE",
        payload: {
          opacity: currentElementOpacityStyle,
          blur: currentElementFilterStyle[0],
          brightness: currentElementFilterStyle[1],
          radius: currentElementRadiusStyle,
          color: currentElementColorStyle,
        },
      });
    }
  }, [currentElement]);

  return {
    elementStyle,
    handleElementStyleValueChange,
  };
};

export default useNonTextElementStyle;
