import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { AXIOS_REQUEST_CATEGORY, ID_TOKEN } from "../constants";
import useAxios from "../hooks/useAxios";
import useLogout from "../hooks/useLogout";
import useModal from "../hooks/useModal";
import useToggle from "../hooks/useToggle";
import { Context } from "../store/Store";
import { removeDraggableElementStyle, retrieveURL } from "../utils";
import Button from "./Button";
import EditorTemplate from "./EditorTemplate";
import Header from "./Header";
import LeftToolbar from "./LeftToolbar";
import Loader from "./Loader";
import Modal from "./Modal";
import ModalContent from "./ModalContent";
import Navigation from "./Navigation";
import NavigationContent from "./NavigationContent";
import RightToolbar from "./RightToolbar";
import VersionLog from "./VersionLog";

function Editor() {
  const [displayingVersion, setDisplayingVersion] = useState(null);
  const [shouldShowDifferentVersion, setShouldShowDifferentVersion] =
    useState(false);
  const { handleLogout } = useLogout();
  const { globalState } = useContext(Context);
  const { editorRef, editorData } = globalState;
  const { shouldDisplay, handleToggleClick } = useToggle(editorRef);
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
    AXIOS_REQUEST_CATEGORY.GET_EDITOR_DATA
  );

  const handleDisplayingVersionChange = (event) => {
    setDisplayingVersion(
      event.target.parentNode.parentNode.getAttribute("value")
    );
  };

  useEffect(() => {
    if (editorData._id) return;

    console.log("hi");
    fetchData();
  }, []);

  useEffect(() => {
    if (editorRef) {
      removeDraggableElementStyle({ parentElement: editorRef });
    }
  }, [shouldDisplay]);

  if (!editorData._id) {
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
        <NavigationContent
          shouldShowDifferentVersion={shouldShowDifferentVersion}
          handleShouldShowDifferentVersion={setShouldShowDifferentVersion}
          handleToggleClick={handleToggleClick}
          saveModalToggle={saveModalToggle}
          publishModalToggle={publishModalToggle}
          {...globalState}
        />
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
