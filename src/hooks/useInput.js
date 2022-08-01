import { useCallback, useContext, useEffect, useState } from "react";

import { DISPATCH_TYPE } from "../constants";
import { Context } from "../store/Store";

const useInput = (location) => {
  const [inputValue, setInputValue] = useState("");
  const [shouldDisplayInputField, setShouldDisplayInputField] = useState(false);
  const { globalState, dispatch } = useContext(Context);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const toggleInputField = useCallback(() => {
    setShouldDisplayInputField((state) => !state);
  }, []);

  const addLinkToCurrentElement = () => {
    const { currentElement } = globalState;

    if (currentElement.tagName === "BUTTON") {
      const linkText = document.createElement("a");

      linkText.innerText = "Link";
      linkText.style.color = "#85b2ff";
      linkText.href = inputValue;
      currentElement.innerText = "";

      currentElement.appendChild(linkText);
      toggleInputField();
    }

    return;
  };

  useEffect(() => {
    if (location === "editor" && !shouldDisplayInputField) {
      if (!inputValue) return;

      dispatch({
        type: DISPATCH_TYPE.CHANGE_EDITOR_TITLE,
        payload: inputValue,
      });
    }

    if (!globalState?.currentElement) return;

    const { currentElement } = globalState;
    const currentElementLinkValue =
      currentElement.children[0]?.getAttribute("href");

    if (currentElementLinkValue) {
      setInputValue(currentElementLinkValue);
    }
  }, [shouldDisplayInputField, globalState?.currentElement]);

  return {
    inputValue,
    shouldDisplayInputField,
    toggleInputField,
    handleInputChange,
    addLinkToCurrentElement,
  };
};

export default useInput;
