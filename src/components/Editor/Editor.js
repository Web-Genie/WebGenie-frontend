import React from "react";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import styled from "styled-components";

import mockImage from "../../assets/mockData.png";
import useInput from "../../hooks/useInput";
import useModal from "../../hooks/useModal";
import Button from "../Button/Button";
import EditorTemplate from "../EditorTemplate/EditorTemplate";
import EditorToolbar from "../EditorToolbar/EditorToolbar";
import Header from "../Header/Header";
import LeftToolbar from "../LeftToolbar/LeftToolbar";
import Modal from "../Modal/Modal";
import ModalContent from "../ModalContent/ModalContent";
import Navigation from "../Navigation/Navigation";

function Editor() {
  const { titleValue, shouldEditTitle, handleInputChange, toggleTitleChange } =
    useInput();
  const {
    shouldDisplayModal,
    saveModalToggle,
    publishModalToggle,
    closeModal,
    message,
  } = useModal();

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
          <Button handleClick={publishModalToggle} mainButton={true}>
            Publish
          </Button>
        </div>
      </Navigation>
      <EditorBody>
        <LeftToolbar />
        <EditorTemplate />
        <EditorToolbar />
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
