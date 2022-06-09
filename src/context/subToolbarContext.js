import React, { createContext, useState } from "react";

import useInput from "../hooks/useInput";

const SubToolbarContext = createContext(undefined);
const InputFieldContext = createContext(undefined);

const SubToolbarTypeProvider = ({ children }) => {
  const [subToolbarType, setSubToolbarType] = useState();
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
    <SubToolbarContext.Provider value={{ subToolbarType, setSubToolbarType }}>
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
