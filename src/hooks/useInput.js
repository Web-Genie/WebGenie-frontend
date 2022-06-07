import { useCallback, useState } from "react";

const TEMPORARY_TITLE = "New Title 2";

const useInput = (initialValue = TEMPORARY_TITLE) => {
  const [titleValue, setTitleValue] = useState(initialValue);
  const [shouldEditTitle, setShouldEditTitle] = useState(false);

  const handleInputChange = (event) => {
    setTitleValue(event.target.value);
  };

  const toggleTitleChange = useCallback(
    () => setShouldEditTitle((state) => !state),
    []
  );

  return {
    titleValue,
    shouldEditTitle,
    handleInputChange,
    toggleTitleChange,
  };
};

export default useInput;
