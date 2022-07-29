const handleFontFormat = (currentElement, usage) => {
  const handleFontBoldFormat = () => {
    if (currentElement.style.fontWeight === "bold") {
      currentElement.style.fontWeight = "normal";
    } else {
      currentElement.style.fontWeight = "bold";
    }
  };

  const handleFontItalicFormat = () => {
    if (currentElement.style.fontStyle === "italic") {
      currentElement.style.fontStyle = "normal";
    } else {
      currentElement.style.fontStyle = "italic";
    }
  };

  const handleFontUnderlineFormat = () => {
    if (currentElement.style.textDecoration === "underline") {
      currentElement.style.textDecoration = "none";
    } else {
      currentElement.style.textDecoration = "underline";
    }
  };

  const handleTextAlignFormat = () => {
    currentElement.style.textAlign = usage;
  };

  switch (usage) {
    case "bold":
      return handleFontBoldFormat;
    case "italic":
      return handleFontItalicFormat;
    case "underline":
      return handleFontUnderlineFormat;
    default:
      return handleTextAlignFormat;
  }
};

export default handleFontFormat;
