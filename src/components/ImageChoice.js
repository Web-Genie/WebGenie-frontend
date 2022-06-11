import { FaCloudUploadAlt, FaImage } from "react-icons/fa";
import { MdViewInAr } from "react-icons/md";

import ToolbarButton from "./ToolbarButton";

function ImageChoice() {
  const handleImage = (event) => {
    const file = event.target.files[0];
    // console.log();
    // const name = document.querySelector(".sc-gsnTZi iGRmMq");
    // console.log(name);
    // name.textContent = file.name;

    const imageDiv = document.createElement("div");
    const newImage = document.createElement("img");
    newImage.setAttribute("class", "img");

    newImage.src = URL.createObjectURL(file);
    console.log(newImage);
    imageDiv.appendChild(newImage);
    // const container = document.body.
    // console.log(container);
    document.body
      .getElementsByClassName("sc-gsnTZi iGRmMq")[0]
      .appendChild(imageDiv);
  };
  return (
    <div className="choiceContainer">
      <div className="category">
        <p>Add Image</p>
      </div>
      <div className="imageUploadingChoice">
        <ToolbarButton>
          <FaCloudUploadAlt />
          <input type="file" className="text" onChange={handleImage}>
            {/* Upload */}
          </input>
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
