import React, { useState } from "react";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import styled from "styled-components";

import mockImage from "../assets/mockData.png";
import useInput from "../hooks/useInput";
import useModal from "../hooks/useModal";
import Button from "./Button";
import EditorTemplate from "./EditorTemplate";
import Header from "./Header";
import LeftToolbar from "./LeftToolbar";
import Modal from "./Modal";
import ModalContent from "./ModalContent";
import Navigation from "./Navigation";
import RightToolbar from "./RightToolbar";

function Editor() {
  const { titleValue, shouldEditTitle, handleInputChange, toggleTitleChange } =
    useInput();
  const [shouldShowWideView, setShouldShowWideView] = useState(false);
  const {
    shouldDisplayModal,
    saveModalToggle,
    publishModalToggle,
    closeModal,
    message,
  } = useModal();

  const toggleWideView = () => {
    setShouldShowWideView((state) => !state);
  };

  const [color, setColor] = useState("");

  const [imageOpacity, setImageOpacity] = useState(1);
  const [imageBrightness, setImageBrightness] = useState(1);
  const [imageBlur, setImageBlur] = useState(0);

  const handleImgOpacity = (event) => {
    setImageOpacity(event.target.value);
  };

  const handleImgBrightness = (event) => {
    setImageBrightness(event.target.value);
  };

  const handleImgBlur = (event) => {
    setImageBlur(event.target.value);
  };

  return (
    <>
      {shouldDisplayModal && (
        <Modal>
          <ModalContent
            modalText={message.titleMessage}
            primaryButtonText={message.proceedButtonText}
            secondaryButtonText={message.denyButtonText}
            modalIconState={message.iconType}
            handleClick={closeModal}
          />
        </Modal>
      )}
      <Header>
        <h1>WebGenie</h1>
        <img src={mockImage} />
      </Header>
      <Navigation>
        <div className="editorNavbar">
          <span>
            <FaArrowLeft />
          </span>
          <div className="titleNavbar">
            {!shouldEditTitle ? (
              <h3>{titleValue}</h3>
            ) : (
              <input onChange={handleInputChange} />
            )}
            <span onClick={toggleTitleChange}>
              <FaRegEdit />
            </span>
          </div>
        </div>
        <div>
          <Button handleClick={saveModalToggle} mainButton={false}>
            Save
          </Button>
          <Button handleClick={toggleWideView} mainButton={false}>
            Wide View
          </Button>
          <Button handleClick={publishModalToggle} mainButton={true}>
            Publish
          </Button>
        </div>
      </Navigation>
      <EditorBody>
        {!shouldShowWideView && <LeftToolbar />}
        <EditorTemplate displayWideView={shouldShowWideView} />
        {!shouldShowWideView && (
          <RightToolbar
            onChangeOpacity={handleImgOpacity}
            onChangeBrightness={handleImgBrightness}
            onChangeBlur={handleImgBlur}
          />
        )}
      </EditorBody>
    </>
  );
}

const EditorBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 84vh;
  overflow: hidden;
  background-color: #f5f5f5;
`;

export default Editor;
