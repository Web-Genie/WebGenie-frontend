import { FaImage, FaPaintRoller } from "react-icons/fa";

import ToolbarButton from "./ToolbarButton";

function BackgroundChoice() {
  return (
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
  );
}

export default BackgroundChoice;
