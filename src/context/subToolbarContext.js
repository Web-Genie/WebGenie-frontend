import React, { createContext, useState } from "react";

import useInput from "../hooks/useInput";

const SubToolbarContext = createContext(undefined);
const InputFieldContext = createContext(undefined);

const SubToolbarTypeProvider = ({ children }) => {
  const [subToolbarType, setSubToolbarType] = useState();
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderLine, setIsUnderLine] = useState(false);
  const [textAlign, setTextAlign] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [buttonColor, setButtonColor] = useState("");
  const [localImageSrc, setLocalImageSrc] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [hasImageUrl, setHasImageUrl] = useState(false);
  const [clearCanvasBackgroundColor, setClearCanavasBackgroundColor] =
    useState("");
  const [isCanvasClear, setIsCavasClear] = useState(false);
  const [imageBrightness, setImageBrightness] = useState(1);
  const [imageBlur, setImageBlur] = useState(0);

  const {
    inputValue,
    shouldEditValue,
    handleInputChange,
    toggleInputChange,
    shouldAddLink,
    toggleAddLink,
    setShouldAddLink,
    buttonRadius,
    setButtonRadius,
    buttonOpacity,
    setButtonOpacity,
    fontSize,
    setFontSize,
    fontType,
    setFontType,
    imageOpacity,
    setImageOpacity,
  } = useInput();

  return (
    <SubToolbarContext.Provider
      value={{
        subToolbarType,
        setSubToolbarType,
        isBold,
        setIsBold,
        isItalic,
        setIsItalic,
        isUnderLine,
        setIsUnderLine,
        textAlign,
        setTextAlign,
        colorValue,
        setColorValue,
        buttonColor,
        setButtonColor,
        localImageSrc,
        setLocalImageSrc,
        clearCanvasBackgroundColor,
        setClearCanavasBackgroundColor,
        isCanvasClear,
        setIsCavasClear,
        imageUrl,
        setImageUrl,
        hasImageUrl,
        setHasImageUrl,
        imageBrightness,
        setImageBrightness,
        imageBlur,
        setImageBlur,
      }}
    >
      <InputFieldContext.Provider
        value={{
          inputValue,
          shouldEditValue,
          handleInputChange,
          toggleInputChange,
          shouldAddLink,
          toggleAddLink,
          setShouldAddLink,
          buttonRadius,
          setButtonRadius,
          buttonOpacity,
          setButtonOpacity,
          fontSize,
          setFontSize,
          fontType,
          setFontType,
          imageOpacity,
          setImageOpacity,
        }}
      >
        {children}
      </InputFieldContext.Provider>
    </SubToolbarContext.Provider>
  );
};

export { InputFieldContext, SubToolbarContext, SubToolbarTypeProvider };
