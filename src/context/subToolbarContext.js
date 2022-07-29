import React, { createContext, useState } from "react";

import useInput from "../hooks/useInput";

const SubToolbarContext = createContext(undefined);
const InputFieldContext = createContext(undefined);

const SubToolbarTypeProvider = ({ children }) => {
  const [localImageSrc, setLocalImageSrc] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [hasImageUrl, setHasImageUrl] = useState(false);
  const [clearCanvasBackgroundColor, setClearCanavasBackgroundColor] =
    useState("");

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
  } = useInput();

  return (
    <SubToolbarContext.Provider
      value={{
        localImageSrc,
        setLocalImageSrc,
        clearCanvasBackgroundColor,
        setClearCanavasBackgroundColor,
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
          buttonRadius,
          setButtonRadius,
          buttonOpacity,
          setButtonOpacity,
        }}
      >
        {children}
      </InputFieldContext.Provider>
    </SubToolbarContext.Provider>
  );
};

export { InputFieldContext, SubToolbarContext, SubToolbarTypeProvider };
