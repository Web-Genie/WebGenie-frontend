import { useContext } from "react";
import { FaCloudUploadAlt, FaImage } from "react-icons/fa";

import { SubToolbarContext } from "../context/subToolbarContext";
import ToolbarButton from "./ToolbarButton";

function ImageChoice() {
  const { setImageSrc } = useContext(SubToolbarContext);

  const handleImage = (event) => {
    setImageSrc(event.target.files[0]);
  };

  return (
    <div className="choiceContainer">
      <div className="category">
        <p>Add Image</p>
      </div>
      <div className="imageUploadingChoice">
        <div className="filebox">
          <div className="filebox">
            <label htmlFor="ex_file">
              <FaCloudUploadAlt />
              Upload
            </label>
            <input type="file" id="ex_file" onChange={handleImage} />
          </div>
        </div>
        <ToolbarButton>
          <FaImage />
          <p className="text">From URL</p>
        </ToolbarButton>
      </div>
    </div>
  );
}

export default ImageChoice;
