import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import styled from "styled-components";

import {
  ID_TOKEN,
  REQUEST_DATA_INFORMATION_EDITOR,
} from "../constants/constants";
import { UserContext } from "../context/userContext";
import useAxios from "../hooks/useAxios";
import useInput from "../hooks/useInput";
import useLogout from "../hooks/useLogout";
import useModal from "../hooks/useModal";
import { retrieveURL } from "../utils/index";
import Button from "./Button";
import EditorTemplate from "./EditorTemplate";
import Header from "./Header";
import LeftToolbar from "./LeftToolbar";
import Loader from "./Loader";
import Modal from "./Modal";
import ModalContent from "./ModalContent";
import Navigation from "./Navigation";
import RightToolbar from "./RightToolbar";

function Editor() {
  const currentEditorId = retrieveURL();
  const { editor, title } = useContext(UserContext);
  const { handleLogout } = useLogout();
  const { userTitle, shouldEditValue, handleInputChange, toggleInputChange } =
    useInput("editor", editor);
  const [shouldShowWideView, setShouldShowWideView] = useState(false);
  const {
    shouldDisplayModal,
    saveModalToggle,
    publishModalToggle,
    closeModal,
    setUserCode,
    message,
  } = useModal(userTitle, currentEditorId);

  const toggleWideView = () => {
    setShouldShowWideView((state) => !state);
  };

  const { fetchData } = useAxios(
    {
      method: "get",
      url: `/websites/${currentEditorId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem(ID_TOKEN)}`,
        params: currentEditorId,
      },
    },
    ID_TOKEN,
    REQUEST_DATA_INFORMATION_EDITOR
  );

  useEffect(() => {
    if (editor) return;

    fetchData();
  }, []);

  if (!editor) {
    return <Loader />;
  }

  return (
    <>
      {shouldDisplayModal && (
        <Modal>
          <ModalContent
            modalText={message.titleMessage}
            primaryButtonText={message.proceedButtonText}
            secondaryButtonText={message.denyButtonText}
            modalIconState={message.iconType}
            currentTitle={userTitle}
            params={message.params}
            requestType={message.requestType}
            handleClick={closeModal}
          />
        </Modal>
      )}
      <Header>
        <h1>WebGenie</h1>
        <LogoutSection>
          <img src={localStorage.getItem("avatar")} />
          <Button handleClick={handleLogout}>logout</Button>
        </LogoutSection>
      </Header>
      <Navigation>
        <div className="editorNavbar">
          <a href="/">
            <FaArrowLeft />
          </a>
          <div className="titleNavbar">
            {!shouldEditValue ? (
              <h3>{title === userTitle ? title : userTitle}</h3>
            ) : (
              <input onChange={handleInputChange} />
            )}
            <span onClick={toggleInputChange}>
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
        <EditorTemplate
          modalStatus={shouldDisplayModal}
          saveUserCode={setUserCode}
          editorInformation={editor}
          displayWideView={shouldShowWideView}
        />
        {!shouldShowWideView && <RightToolbar />}
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

const LogoutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;

export default Editor;
