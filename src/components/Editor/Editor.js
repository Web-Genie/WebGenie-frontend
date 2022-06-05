import React from "react";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import styled from "styled-components";

import mockImage from "../../assets/mockData.png";
import Button from "../Button/Button";
import Editor from "../EditorTemplate/EditorTemplate";
import EditorToolbar from "../EditorToolbar/EditorToolbar";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";

function WebsiteEditor() {
  return (
    <>
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
            <h3>New Editor 2</h3>
            <span>
              <FaRegEdit />
            </span>
          </div>
        </div>
        <div>
          <Button mainButton={false}>Save</Button>
          <Button mainButton={true}>Publish</Button>
        </div>
      </Navigation>
      <WebsiteEditorBody>
        <EditorToolbar />
        <Editor />
        <EditorToolbar />
      </WebsiteEditorBody>
    </>
  );
}

const WebsiteEditorBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 84vh;
  background-color: #f5f5f5;
`;

export default WebsiteEditor;
