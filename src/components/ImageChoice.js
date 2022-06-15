import { useEffect, useState } from "react";
import { FaCloudUploadAlt, FaImage } from "react-icons/fa";

import { ID_TOKEN, REQUEST_IMAGE_DATA_SAVE } from "../constants/constants";
import useAxios from "../hooks/useAxios";
import useModal from "../hooks/useModal";
import Modal from "./Modal";
import ModalContent from "./ModalContent";
import ToolbarButton from "./ToolbarButton";

function ImageChoice() {
  const { shouldDisplayModal, closeModal, imageURLModalToggle, message } =
    useModal();
  const [imageFormData, setImageFromData] = useState(null);

  const handleImageUpload = async (event) => {
    setImageFromData(event.target.files[0]);

    event.target.value = "";
  };

  const formData = new FormData();
  formData.append("imageFile", imageFormData);

  const { fetchData } = useAxios(
    {
      method: "post",
      url: "/image",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
    ID_TOKEN,
    REQUEST_IMAGE_DATA_SAVE
  );

  useEffect(() => {
    if (!imageFormData) return;

    fetchData();
  }, [imageFormData]);

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
          <input type="file" id="file" onChange={handleImageUpload} />
        </div>
        <ToolbarButton handleClick={imageURLModalToggle}>
          <FaImage />
          <p className="text">From URL</p>
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
