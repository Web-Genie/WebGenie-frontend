import { useCallback, useContext, useState } from "react";

import { UserContext } from "../context/userContext";

const useInput = (currentLocationBeingUsed, currentTitle) => {
  const [inputValue, setInputValue] = useState("https://");
  const [shouldEditValue, setShouldEditValue] = useState(false);
  const [shouldAddLink, setShouldAddLink] = useState(false);
  const [userTitle, setUserTitle] = useState(currentTitle);

  const handleInputChange = (event) => {
    if (currentLocationBeingUsed === "editor") {
      setUserTitle(event.target.value);
    } else {
      setInputValue(event.target.value);
    }
  };

  const toggleInputChange = useCallback(() => {
    setShouldEditValue((state) => !state);
  }, []);

  const toggleAddLink = useCallback(() => {
    setShouldEditValue((state) => !state);
    setShouldAddLink(true);
  }, []);

  return {
    inputValue,
    shouldEditValue,
    handleInputChange,
    toggleInputChange,
    shouldAddLink,
    toggleAddLink,
    setShouldAddLink,
    userTitle,
  };
};

export default useInput;
