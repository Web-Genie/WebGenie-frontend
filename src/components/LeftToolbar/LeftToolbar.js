import React from "react";
import { FaCloudUploadAlt, FaImage, FaPaintRoller } from "react-icons/fa";

import ToolbarButton from "../Button/ToolbarButton";
import EditorToolbar from "../EditorToolbar/EditorToolbar";
import ToolbarContainer from "../ToolbarContainer/ToolbarContainer";

function LeftToolbar() {
  return (
    <EditorToolbar>
      <ToolbarContainer>
        <div className="choiceContainer">
          <div className="category">
            <p>Add Text</p>
          </div>
          <div className="textChoices">
            <h1>H1 HEAD</h1>
            <h2>H2 HEAD</h2>
            <h3>H3 HEAD</h3>
            <h4>H4 HEAD</h4>
            <h5>H5 HEAD</h5>
            <h6>H6 HEAD</h6>
          </div>
        </div>
        <div className="choiceContainer">
          <div className="category">
            <p>Add Text Box</p>
          </div>
          <div className="textBoxChoice">
            <input className="textbox" placeholder="Enter Something" />
          </div>
        </div>
        <div className="choiceContainer">
          <div className="category">
            <p>Add Image</p>
          </div>
          <div className="imageUploadingChoice">
            <ToolbarButton>
              <FaCloudUploadAlt />
              <p className="text">Upload</p>
            </ToolbarButton>
            <ToolbarButton>
              <FaImage />
              <p className="text">From URL</p>
            </ToolbarButton>
          </div>
        </div>
        <div className="choiceContainer">
          <div className="category">
            <p>Add Shape</p>
          </div>
          <div className="shapeChoices">
            <div className="square"></div>
            <div className="circle"></div>
            <div className="triangle"></div>
          </div>
        </div>
        <div className="choiceContainer">
          <div className="category">
            <p>Add Button</p>
          </div>
          <div className="buttonChoice">
            <button className="samepleButton">Button</button>
          </div>
        </div>
        <div className="choiceContainer">
          <div className="category">
            <p>Add Background</p>
          </div>
          <div className="imageUploadingChoice">
            <ToolbarButton>
              <FaPaintRoller />
              <input className="colorPalette" type="color" />
            </ToolbarButton>
            <ToolbarButton>
              <FaImage />
              <p className="text">From URL</p>
            </ToolbarButton>
          </div>
        </div>
      </ToolbarContainer>
    </EditorToolbar>
  );
}

export default LeftToolbar;
