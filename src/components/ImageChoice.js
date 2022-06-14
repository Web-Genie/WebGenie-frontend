import { useContext, useEffect, useState } from "react";
import { FaCloudUploadAlt, FaImage } from "react-icons/fa";

import {
  ID_TOKEN,
  REQUEST_DATA_INFORMATION_EDITOR,
} from "../constants/constants";
import { SubToolbarContext } from "../context/subToolbarContext";
import useAxios from "../hooks/useAxios";
import useModal from "../hooks/useModal";
import api from "../services/api";
import Modal from "./Modal";
import ModalContent from "./ModalContent";
import ToolbarButton from "./ToolbarButton";

function ImageChoice() {
  const { setLocalImageSrc } = useContext(SubToolbarContext);
  const { shouldDisplayModal, closeModal, imageURLModalToggle, message } =
    useModal();
  const [imageFormData, setImageFromData] = useState(null);

  const handleImage = async (event) => {
    const formData = new FormData();
    formData.append("imageFile", event.target.files[0]);

    const location = await api.post("/image", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setLocalImageSrc(location.data.location);

    localStorage.setItem(
      "localImgSrc",
      location.data.location.split(".com/")[1]
    );

    event.target.value = "";
  };

  return (
    <div className="choiceContainer">
      <div className="category">
        <p>Add Image</p>
      </div>
      <div className="imageUploadingChoice">
        <div className="filebox">
          <label htmlFor="file">
            <p className="localImage">
              <FaCloudUploadAlt />
            </p>
            Upload
          </label>
          <input type="file" id="file" onChange={handleImage} />
        </div>
        <ToolbarButton>
          <FaImage />
          <p className="text" onClick={imageURLModalToggle}>
            From URL
          </p>
        </ToolbarButton>
        {shouldDisplayModal && (
          <Modal>
            <ModalContent
              modalText={message.titleMessage}
              primaryButtonText={message.proceedButtonText}
              secondaryButtonText={message.denyButtonText}
              handleClick={closeModal}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default ImageChoice;
