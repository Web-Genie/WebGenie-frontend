import { ELEMENT_STYLE_OPTIONS } from "../constants";

const handleFontFormat = (currentElement, usage) => {
  const handleFontBoldFormat = () => {
    if (
      currentElement.style.fontWeight === ELEMENT_STYLE_OPTIONS.FONT_DETAIL.BOLD
    ) {
      currentElement.style.fontWeight =
        ELEMENT_STYLE_OPTIONS.FONT_DETAIL.NORMAL;
    } else {
      currentElement.style.fontWeight = ELEMENT_STYLE_OPTIONS.FONT_DETAIL.BOLD;
    }
  };

  const handleFontItalicFormat = () => {
    if (
      currentElement.style.fontStyle ===
      ELEMENT_STYLE_OPTIONS.FONT_DETAIL.ITALIC
    ) {
      currentElement.style.fontStyle = ELEMENT_STYLE_OPTIONS.FONT_DETAIL.NORMAL;
    } else {
      currentElement.style.fontStyle = ELEMENT_STYLE_OPTIONS.FONT_DETAIL.ITALIC;
    }
  };

  const handleFontUnderlineFormat = () => {
    if (
      currentElement.style.textDecoration ===
      ELEMENT_STYLE_OPTIONS.FONT_DETAIL.UNDERLINE
    ) {
      currentElement.style.textDecoration =
        ELEMENT_STYLE_OPTIONS.FONT_DETAIL.NONE;
    } else {
      currentElement.style.textDecoration =
        ELEMENT_STYLE_OPTIONS.FONT_DETAIL.UNDERLINE;
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
