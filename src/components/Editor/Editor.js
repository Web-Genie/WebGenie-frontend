import React from "react";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import styled from "styled-components";

import mockImage from "../../assets/mockData.png";
import Button from "../Button/Button";
import EditorTemplate from "../EditorTemplate/EditorTemplate";
import EditorToolbar from "../EditorToolbar/EditorToolbar";
import Header from "../Header/Header";
import LeftToolbar from "../LeftToolbar/LeftToolbar";
import Navigation from "../Navigation/Navigation";

function Editor() {
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
