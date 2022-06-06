import React, { useState } from "react";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import styled from "styled-components";

import mockImage from "../../assets/mockData.png";
import {
  DEPLOY_ICON,
  NO_MESSAGE,
  PUBLISH_ACCEPT_MESSAGE,
  PUBLISH_REMINDER_MESSAGE,
  SAVE_ACCEPT_MESSAGE,
  SAVE_ICON,
  SAVE_REMINDER_MESSAGE,
} from "../../constants/constants";
import Button from "../Button/Button";
import EditorTemplate from "../EditorTemplate/EditorTemplate";
import EditorToolbar from "../EditorToolbar/EditorToolbar";
import Header from "../Header/Header";
import LeftToolbar from "../LeftToolbar/LeftToolbar";
import Modal from "../Modal/Modal";
import ModalContent from "../ModalContent/ModalContent";
import Navigation from "../Navigation/Navigation";
import RightToolbar from "../RightToolbar/RightToolbar";

// Will delete once connection to db is succesful
const TEMPORARY_TITLE = "New Title 2";

function Editor() {
  const [shouldDisplayModal, setShouldDisplayModal] = useState(false);
  const [messageContent, setMessageContent] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [modalIconState, setModalIconState] = useState("");
  const [shouldEditTitle, setShouldEditTitle] = useState(false);
  const [editorTitle, setEditorTitle] = useState(TEMPORARY_TITLE);

  const toggleSaveModal = () => {
    setShouldDisplayModal(!shouldDisplayModal);
    setMessageContent(SAVE_REMINDER_MESSAGE);
    setButtonText(SAVE_ACCEPT_MESSAGE);
    setModalIconState(SAVE_ICON);
  };

  const togglePublishModal = () => {
    setShouldDisplayModal(!shouldDisplayModal);
    setMessageContent(PUBLISH_REMINDER_MESSAGE);
    setButtonText(PUBLISH_ACCEPT_MESSAGE);
    setModalIconState(DEPLOY_ICON);
  };

  const handleTitleChangeState = () => {
    setShouldEditTitle(!shouldEditTitle);
  };

  const listenTitleInputChange = (event) => {
    setEditorTitle(event.target.value);
  };

  return (
    <>
      {shouldDisplayModal && (
        <Modal>
          <ModalContent
            modalText={messageContent}
            primaryButtonText={buttonText}
            secondaryButtonText={NO_MESSAGE}
            modalIconState={modalIconState}
            handleClick={toggleSaveModal}
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
            {!shouldEditTitle && <h3>{editorTitle}</h3>}
            {shouldEditTitle && <input onChange={listenTitleInputChange} />}
            <span onClick={handleTitleChangeState}>
              <FaRegEdit />
            </span>
          </div>
        </div>
        <div>
          <Button handleClick={toggleSaveModal} mainButton={false}>
            Save
          </Button>
          <Button handleClick={togglePublishModal} mainButton={true}>
            Publish
          </Button>
        </div>
      </Navigation>
      <EditorBody>
        <LeftToolbar />
        <EditorTemplate />
        <RightToolbar />
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
