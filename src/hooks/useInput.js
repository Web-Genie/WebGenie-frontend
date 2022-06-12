<<<<<<< HEAD
import { useCallback, useState } from "react";

const useInput = () => {
  const [inputValue, setInputValue] = useState("https://");
  const [shouldEditValue, setShouldEditValue] = useState(false);
  const [shouldAddLink, setShouldAddLink] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
=======
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
>>>>>>> origin/main
  };

  const toggleInputChange = useCallback(() => {
    setShouldEditValue((state) => !state);
  }, []);

  const toggleAddLink = useCallback(() => {
    setShouldEditValue((state) => !state);
    setShouldAddLink(true);
  }, []);

<<<<<<< HEAD
=======
  useEffect(() => {
    if (!value) return;
    if (shouldEditValue) return;

    if (value.result[0]) {
      setUserTitle(value.result[0].title);
    } else {
      setUserTitle(value.result.title);
    }
  }, [value]);

>>>>>>> origin/main
  return {
    inputValue,
    shouldEditValue,
    handleInputChange,
    toggleInputChange,
    shouldAddLink,
    toggleAddLink,
    setShouldAddLink,
<<<<<<< HEAD
=======
    userTitle,
    setUserTitle,
>>>>>>> origin/main
  };
};

export default useInput;
