import { useContext, useState } from "react";
import { FaCloudUploadAlt, FaImage } from "react-icons/fa";

import { SubToolbarContext } from "../context/subToolbarContext";
import useModal from "../hooks/useModal";
import Modal from "./Modal";
import ModalContent from "./ModalContent";
import ToolbarButton from "./ToolbarButton";

function ImageChoice() {
  const { setLocalImageSrc } = useContext(SubToolbarContext);
  const { shouldDisplayModal, closeModal, imageURLModalToggle, message } =
    useModal();

  const handleImage = (event) => {
    setLocalImageSrc(event.target.files[0]);
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
