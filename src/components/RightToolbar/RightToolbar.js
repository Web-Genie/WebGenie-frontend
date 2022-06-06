import React from "react";
import {
  FaAlignCenter,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaItalic,
  FaUnderline,
} from "react-icons/fa";
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
              <div className="fontType">inter</div>
              <FiChevronDown />
            </ToolbarButton>
            <ToolbarButton>
              <div className="fontSize">24</div>
              <FiChevronDown />
            </ToolbarButton>
          </div>
          <div className="detailContainer">
            <div className="detailItem">
              <span className="rightBorder">
                <FaBold />
              </span>
              <span>
                <FaItalic />
              </span>
              <span className="leftBorder">
                <FaUnderline />
              </span>
            </div>
          </div>
        </div>
        <div className="choiceContainer">
          <div className="category">
            <p>Edit Position</p>
          </div>
          <div className="detailContainer">
            <div className="detailItem">
              <span className="rightBorder">
                <FaAlignLeft />
              </span>
              <span>
                <FaAlignCenter />
              </span>
              <span className="leftBorder">
                <FaAlignRight />
              </span>
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
