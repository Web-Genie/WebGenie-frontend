import React, { useContext, useEffect, useState } from "react";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import styled from "styled-components";

import {
  ID_TOKEN,
  REQUEST_DATA_INFORMATION_EDITOR,
} from "../constants/constants";
import useAxios from "../hooks/useAxios";
import useInput from "../hooks/useInput";
import useLogout from "../hooks/useLogout";
import useModal from "../hooks/useModal";
import useToggle from "../hooks/useToggle";
import { Context } from "../store/Store";
import { retrieveURL } from "../utils";
import Button from "./Button";
import EditorTemplate from "./EditorTemplate";
import Header from "./Header";
import LeftToolbar from "./LeftToolbar";
import Loader from "./Loader";
import Modal from "./Modal";
import ModalContent from "./ModalContent";
import Navigation from "./Navigation";
import RightToolbar from "./RightToolbar";
import VersionLog from "./VersionLog";

function Editor() {
  const [displayingVersion, setDisplayingVersion] = useState(null);
  const [shouldShowDifferentVersion, setShouldShowDifferentVersion] =
    useState(false);
  const { shouldDisplayInputField, handleInputChange, toggleInputField } =
    useInput("editor");
  const { shouldDisplay, handleToggleClick } = useToggle();
  const { handleLogout } = useLogout();
  const { globalState } = useContext(Context);
  const { editorRef, editorData } = globalState;
  const currentEditorId = retrieveURL();

  const {
    shouldDisplayModal,
    saveModalToggle,
    publishModalToggle,
    closeModal,
    message,
  } = useModal();

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
    if (editorData._id) return;

    fetchData();
  }, []);

  if (!editorData._id) {
    return <Loader />;
  }

  const handleDisplayingVersionChange = (event) => {
    setDisplayingVersion(
      event.target.parentNode.parentNode.getAttribute("value")
    );
  };

  const clearCanvas = () => {
    editorRef.innerHTML = "";
    editorRef.style.backgroundColor = "white";
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
            currentTitle={editorData.title}
            params={message.params}
            requestType={message.requestType}
            handleClick={closeModal}
          />
        </Modal>
      )}
      <Header>
        <h1>WebGenie</h1>
        <LogoutSection>
          <img alt="User Image" src={localStorage.getItem("avatar")} />
          <Button handleClick={handleLogout}>logout</Button>
        </LogoutSection>
      </Header>
      <Navigation>
        <div className="editorNavbar">
          <a onClick={() => (window.location = "/")}>
            <FaArrowLeft />
          </a>
          <div className="titleNavbar">
            {!shouldDisplayInputField ? (
              <h3>{editorData.title}</h3>
            ) : (
              <input onChange={handleInputChange} />
            )}
            <span onClick={toggleInputField}>
              <FaRegEdit />
            </span>
          </div>
        </div>
        <div>
          <Button warningSignal={true} handleClick={clearCanvas}>
            Clear Canvas
          </Button>
          <Button handleClick={saveModalToggle} mainButton={false}>
            Save
          </Button>
          <Button
            handleClick={() => setShouldShowDifferentVersion((state) => !state)}
            mainButton={false}
          >
            {shouldShowDifferentVersion
              ? "Close Saved Version Log"
              : "Saved Version Log"}
          </Button>
          <Button handleClick={handleToggleClick} mainButton={false}>
            Wide View
          </Button>
          <Button handleClick={publishModalToggle} mainButton={true}>
            Publish
          </Button>
        </div>
      </Navigation>
      <EditorBody>
        {!shouldDisplay && <LeftToolbar />}
        <EditorTemplate
          modalStatus={shouldDisplayModal}
          editorVersion={displayingVersion}
          {...editorData}
        />
        {!shouldDisplay && !shouldShowDifferentVersion && <RightToolbar />}
        {shouldShowDifferentVersion && (
          <VersionLog
            handleVersionChange={handleDisplayingVersionChange}
            {...editorData}
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
