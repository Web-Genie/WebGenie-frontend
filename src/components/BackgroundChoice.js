import { FaImage, FaPaintRoller } from "react-icons/fa";

import ToolbarButton from "./ToolbarButton";

function BackgroundChoice({ changeBackground }) {
  const handleBackgroundColorChange = (event) => {
    changeBackground(event.target.value);
  };

  return (
    <div className="choiceContainer">
      <div className="category">
        <p>Add Background</p>
      </div>
      <div className="imageUploadingChoice">
        <ToolbarButton>
          <FaPaintRoller />
          <input
            className="colorPalette"
            type="color"
            onChange={handleBackgroundColorChange}
          />
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
