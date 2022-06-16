import { FaPaintRoller } from "react-icons/fa";

import ToolbarButton from "./ToolbarButton";

function BackgroundChoice({ handleBackgroundColor }) {
  const handleBackgroundColorChanged = (event) => {
    handleBackgroundColor(event.target.value);
  };

  return (
    <div className="choiceContainer">
      <div className="category">
        <p>Add Background</p>
      </div>
      <div className="backgroundColorChoice">
        <ToolbarButton name="backgroundColorChoice">
          <FaPaintRoller />
          <input
            className="colorPalette"
            type="color"
            onChange={handleBackgroundColorChanged}
          />
        </ToolbarButton>
      </div>
    </div>
  );
}

export default BackgroundChoice;
