import React, { createContext, useState } from "react";

import useInput from "../hooks/useInput";

const SubToolbarContext = createContext(undefined);
const InputFieldContext = createContext(undefined);

const SubToolbarTypeProvider = ({ children }) => {
  const [subToolbarType, setSubToolbarType] = useState();
  const [fontSize, setFontSize] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderLine, setIsUnderLine] = useState(false);
  const [textAlign, setTextAlign] = useState("");
  const [fontType, setFontType] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [buttonColor, setButtonColor] = useState("");
  const [localImageSrc, setLocalImageSrc] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [hasImageUrl, setHasImageUrl] = useState(false);
  const [clearCanvasBackgroundColor, setClearCanavasBackgroundColor] =
    useState("");
  const [isCanvasClear, setIsCavasClear] = useState(false);
  const {
    inputValue,
    shouldEditValue,
    handleInputChange,
    toggleInputChange,
    shouldAddLink,
    toggleAddLink,
    setShouldAddLink,
  } = useInput();

  return (
    <SubToolbarContext.Provider
      value={{
        subToolbarType,
        setSubToolbarType,
        fontSize,
        setFontSize,
        isBold,
        setIsBold,
        isItalic,
        setIsItalic,
        isUnderLine,
        setIsUnderLine,
        textAlign,
        setTextAlign,
        fontType,
        setFontType,
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
        }}
      >
        {children}
      </InputFieldContext.Provider>
    </SubToolbarContext.Provider>
  );
};

export { InputFieldContext, SubToolbarContext, SubToolbarTypeProvider };
