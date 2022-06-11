import { FaCloudUploadAlt, FaImage } from "react-icons/fa";

import ToolbarButton from "./ToolbarButton";

function ImageChoice() {
  const handleImage = (event) => {
    const file = event.target.files[0];

    const newImage = document.createElement("img");
    newImage.setAttribute("class", "img");
    newImage.setAttribute("draggable", "false");
    newImage.src = URL.createObjectURL(file);

    document.body
      .getElementsByClassName("sc-gsnTZi iGRmMq")[0]
      .appendChild(newImage);
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
