import { useCallback, useEffect, useState } from "react";

const useInput = (currentLocationBeingUsed, value) => {
  const [inputValue, setInputValue] = useState("https://");
  const [searchValue, setSearchValue] = useState("");
  const [shouldEditValue, setShouldEditValue] = useState(false);
  const [shouldAddLink, setShouldAddLink] = useState(false);
  const [buttonRadius, setButtonRadius] = useState(null);
  const [buttonOpacity, setButtonOpacity] = useState(null);
  const [userTitle, setUserTitle] = useState();
  const [fontSize, setFontSize] = useState("");
  const [fontType, setFontType] = useState("");
  const [imageOpacity, setImageOpacity] = useState(1);

  const handleInputChange = (event) => {
    if (currentLocationBeingUsed === "editor") {
      setUserTitle(event.target.value);
    } else if (event.target.className === "buttonRadius") {
      setButtonRadius(event.target.value);
    } else if (event.target.className === "opacity") {
      setButtonOpacity(event.target.value);
      setImageOpacity(event.target.value);
    } else if (event.target.className === "fontSize") {
      setFontSize(event.target.value);
    } else if (event.target.className === "fontType") {
      setFontType(event.target.value);
    } else if (currentLocationBeingUsed === "search") {
      setSearchValue(event.target.value);
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
    buttonRadius,
    buttonOpacity,
    setButtonOpacity,
    fontSize,
    setFontSize,
    fontType,
    setFontType,
    imageOpacity,
    setImageOpacity,
    searchValue,
  };
};

export default useInput;
