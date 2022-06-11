import { useCallback, useEffect, useState } from "react";

const useInput = (currentLocationBeingUsed, value) => {
  const [inputValue, setInputValue] = useState("https://");
  const [shouldEditValue, setShouldEditValue] = useState(false);
  const [shouldAddLink, setShouldAddLink] = useState(false);
  const [userTitle, setUserTitle] = useState();

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

  useEffect(() => {
    if (!value) return;
    if (shouldEditValue) return;

    if (value.result[0]) {
      setUserTitle(value.result[0].title);
    } else {
      setUserTitle(value.result.title);
    }
  }, [value]);

  return {
    inputValue,
    shouldEditValue,
    handleInputChange,
    toggleInputChange,
    shouldAddLink,
    toggleAddLink,
    setShouldAddLink,
    userTitle,
    setUserTitle,
  };
};

export default useInput;
