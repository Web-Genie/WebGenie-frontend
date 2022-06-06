import React from "react";
import {
  BsJustify,
  BsJustifyLeft,
  BsJustifyRight,
  BsTypeItalic,
  BsTypeUnderline,
} from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { RiPaintFill } from "react-icons/ri";

import ToolbarButton from "../Button/ToolbarButton";
import EditorToolbar from "../EditorToolbar/EditorToolbar";
import ToolbarContainer from "../ToolbarContainer/ToolbarContainer";

function RightToolbar() {
  return (
    <EditorToolbar>
      <ToolbarContainer>
        <div className="choiceContainer">
          <div className="category">
            <p>Edit Text</p>
          </div>
          <div className="textDetailChoice">
            <ToolbarButton>
              <p className="fontType">inter</p>
              <FiChevronDown />
            </ToolbarButton>
            <ToolbarButton>
              <p className="fontSize">24</p>
              <FiChevronDown />
            </ToolbarButton>
          </div>
          <div className="container">
            <div className="item1">B</div>
            <div className="item2">
              <BsTypeItalic />
            </div>
            <div className="item3">
              <BsTypeUnderline />
            </div>
          </div>
        </div>
        <div className="choiceContainer">
          <div className="category">
            <p>Edit Position</p>
          </div>
          <div className="container">
            <div className="item1">
              <BsJustifyLeft />
            </div>
            <div className="item2">
              <BsJustify />
            </div>
            <div className="item3">
              <BsJustifyRight />
            </div>
          </div>
        </div>
        <div className="choiceContainer">
          <div className="category">
            <p>Edit Color</p>
          </div>
          <div className="backgroundColorChoice">
            <ToolbarButton>
              <RiPaintFill />
              <input className="colorPalette" type="color" />
            </ToolbarButton>
          </div>
        </div>
        <div className="clearCanavs">
          <ToolbarButton>Clear Canvas</ToolbarButton>
        </div>
      </ToolbarContainer>
    </EditorToolbar>
  );
}

export default RightToolbar;
