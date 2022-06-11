import { useContext } from "react";
import { FaCloudUploadAlt, FaImage } from "react-icons/fa";

import { SubToolbarContext } from "../context/subToolbarContext";
import ToolbarButton from "./ToolbarButton";

function ImageChoice() {
  const { setImageSrc } = useContext(SubToolbarContext);
  const handleImage = (event) => {
    setImageSrc(event.target.files[0]);

    // const newImage = document.createElement("img");
    // newImage.setAttribute("class", "img");
    // newImage.setAttribute("draggable", "false");
    // newImage.src = URL.createObjectURL();

    // document.body
    //   .getElementsByClassName("sc-gsnTZi iGRmMq")[0]
    //   .appendChild(newImage);
  };

  return (
    <div className="choiceContainer">
      <div className="category">
        <p>Add Image</p>
      </div>
      <div className="imageUploadingChoice">
        <ToolbarButton>
          <FaCloudUploadAlt />
          <input type="file" className="text" onChange={handleImage} />
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
