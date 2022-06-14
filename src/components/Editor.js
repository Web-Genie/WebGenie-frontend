import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import { RiWindowLine } from "react-icons/ri";
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
import api from "../services/api";
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
  const [parentRefState, setParentRefState] = useState("");
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
    saveReminderModalToggle,
  } = useModal(userTitle, currentEditorId);

  const [backgroundColor, setBackgroundColor] = useState("");
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
  const toggleWideView = () => {
    setShouldShowWideView((state) => !state);
  };

  window.onpopstate = async (event) => {
    const savedLocalImage = localStorage.getItem("localImgSrc");

    if (event && savedLocalImage) {
      await api.delete(`/image/${savedLocalImage}`, {
        headers: {
          params: savedLocalImage,
        },
      });

      localStorage.removeItem("localImgSrc");
    }
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

  const checkChangedCode = () => {
    if (parentRefState.innerHTML === editor.result.userSavedCode) {
      window.location.replace("/");
    } else {
      saveReminderModalToggle();
    }
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
            shouldGoHomepage={message.shouldGoHomepage}
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
          <a onClick={checkChangedCode}>
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
        {!shouldShowWideView && (
          <LeftToolbar changeBackground={setBackgroundColor} />
        )}
        <EditorTemplate
          modalStatus={shouldDisplayModal}
          saveUserCode={setUserCode}
          editorInformation={editor}
          displayWideView={shouldShowWideView}
          retrieveParentRefState={setParentRefState}
          backgroundColorName={backgroundColor}
        />
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

const LogoutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;

export default Editor;
