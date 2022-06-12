import React, { createContext, useState } from "react";

import useInput from "../hooks/useInput";

const SubToolbarContext = createContext(undefined);
const InputFieldContext = createContext(undefined);

const SubToolbarTypeProvider = ({ children }) => {
  const [subToolbarType, setSubToolbarType] = useState();
<<<<<<< HEAD
  const [fontSize, setFontSize] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderLine, setIsUnderLine] = useState(false);
  const [textAlign, setTextAlign] = useState("");
  const [fontType, setFontType] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [buttonColor, setButtonColor] = useState("");
  const [imageSrc, setImageSrc] = useState("");

=======
>>>>>>> origin/main
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
<<<<<<< HEAD
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
        imageSrc,
        setImageSrc,
      }}
    >
=======
    <SubToolbarContext.Provider value={{ subToolbarType, setSubToolbarType }}>
>>>>>>> origin/main
      <InputFieldContext.Provider
        value={{
          inputValue,
          shouldEditValue,
          handleInputChange,
          toggleInputChange,
          shouldAddLink,
          toggleAddLink,
          setShouldAddLink,
<<<<<<< HEAD
          imageSrc,
          setImageSrc,
=======
>>>>>>> origin/main
        }}
      >
        {children}
      </InputFieldContext.Provider>
    </SubToolbarContext.Provider>
  );
};

export { InputFieldContext, SubToolbarContext, SubToolbarTypeProvider };
