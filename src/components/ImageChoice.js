import { FaCloudUploadAlt, FaImage } from "react-icons/fa";

import ToolbarButton from "../Button/ToolbarButton";

function ImageChoice() {
  return (
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
  );
}

export default ImageChoice;
