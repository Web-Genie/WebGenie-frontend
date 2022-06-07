import React from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from "react-icons/fa";

function TextDetailCollection({ propertyName = "" }) {
  return (
    <div className="detailContainer">
      <div className="detailItem">
        <span className="rightBorder">
          {propertyName === "textPosition" ? <FaAlignLeft /> : <FaBold />}
        </span>
        <span>
          {propertyName === "textPosition" ? <FaAlignCenter /> : <FaItalic />}
        </span>
        <span className="leftBorder">
          {propertyName === "textPosition" ? <FaAlignRight /> : <FaUnderline />}
        </span>
      </div>
    </div>
  );
}

export default TextDetailCollection;
