import { useCallback, useState } from "react";

const useInput = () => {
  const [inputValue, setInputValue] = useState("https://");
  const [shouldEditValue, setShouldEditValue] = useState(false);
  const [shouldAddLink, setShouldAddLink] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
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
  };
};

export default useInput;
