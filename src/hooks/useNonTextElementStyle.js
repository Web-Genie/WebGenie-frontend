import { useContext, useEffect } from "react";

import { DISPATCH_TYPE, ELEMENT_STYLE_OPTIONS } from "../constants";
import { Context } from "../store/Store";

const useNonTextElementStyle = () => {
  const { globalState, dispatch } = useContext(Context);
  const { currentElement, elementStyle } = globalState;

  const handleElementStyleValueChange = (target, value) => {
    if (target === ELEMENT_STYLE_OPTIONS.IMAGE_STYLE.OPACITY) {
      currentElement.style.opacity = value;

      dispatch({
        type: DISPATCH_TYPE.CHANGE_IMAGE_STYLE,
        payload: { target, value },
      });
    } else if (target === ELEMENT_STYLE_OPTIONS.IMAGE_STYLE.RADIUS) {
      currentElement.style.borderRadius = `${value}px`;

      dispatch({
        type: DISPATCH_TYPE.CHANGE_IMAGE_STYLE,
        payload: { target, value },
      });
    } else if (target === ELEMENT_STYLE_OPTIONS.IMAGE_STYLE.BLUR) {
      currentElement.style.filter = `blur(${value}px) brightness(${elementStyle.brightness})`;

      dispatch({
        type: DISPATCH_TYPE.CHANGE_IMAGE_STYLE,
        payload: { target, value },
      });
    } else {
      currentElement.style.filter = `blur(${elementStyle.blur}px) brightness(${value})`;

      dispatch({
        type: DISPATCH_TYPE.CHANGE_IMAGE_STYLE,
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
        type: DISPATCH_TYPE.RESET_IMAGE_STYLE,
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
