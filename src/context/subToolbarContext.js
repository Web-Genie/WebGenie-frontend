import React, { createContext, useState } from "react";

import useInput from "../hooks/useInput";

const SubToolbarContext = createContext(undefined);
const InputFieldContext = createContext(undefined);

const SubToolbarTypeProvider = ({ children }) => {
  const [subToolbarType, setSubToolbarType] = useState();
  const [subToolbarValue, setSubToolbarValue] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderLine, setIsUnderLine] = useState(false);
  const [textAlign, setTextAlign] = useState("");

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
        subToolbarValue,
        setSubToolbarValue,
        isBold,
        setIsBold,
        isItalic,
        setIsItalic,
        isUnderLine,
        setIsUnderLine,
        textAlign,
        setTextAlign,
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
