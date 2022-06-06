import React, { useState } from "react";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import styled from "styled-components";

import mockImage from "../../assets/mockData.png";
import Button from "../Button/Button";
import EditorTemplate from "../EditorTemplate/EditorTemplate";
import EditorToolbar from "../EditorToolbar/EditorToolbar";
import Header from "../Header/Header";
import LeftToolbar from "../LeftToolbar/LeftToolbar";
import Modal from "../Modal/Modal";
import ModalContent from "../ModalContent/ModalContent";
import Navigation from "../Navigation/Navigation";

function Editor() {
  const [shouldDisplayModal, setShouldDisplayModal] = useState(false);
  const [messageContent, setMessageContent] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [modalIconState, setModalIconState] = useState("");
  const [shouldEditTitle, setShouldEditTitle] = useState(false);
  const [editorTitle, setEditorTitle] = useState("New Title 2");

  const toggleSaveModal = () => {
    setShouldDisplayModal(!shouldDisplayModal);
    setMessageContent("현재 웹사이트를 저장하시겠습니까?");
    setButtonText("네, 저장할게요");
    setModalIconState("save");
  };

  const togglePublishModal = () => {
    setShouldDisplayModal(!shouldDisplayModal);
    setMessageContent("현재 웹사이트를 배포하시겠습니까?");
    setButtonText("네, 배포할게요");
    setModalIconState("deploy");
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
            secondaryButtonText={"아니요"}
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
