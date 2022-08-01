import React, { useContext, useState } from "react";
import styled from "styled-components";

import { Context } from "../store/Store";
import SubToolbarTitle from "./SubToolbarTitle";
import ToolbarButton from "./ToolbarButton";

function TextContentChangeSubtoolbar() {
  const { globalState } = useContext(Context);
  const { currentElement } = globalState;
  const [textareaContent, setTextareaContent] = useState(
    currentElement.innerHTML
  );

  return (
    <div className="choiceContainer">
      <SubToolbarTitle title="Change text content" />
      <div className="detailContainer" data-testid="detailContainer">
        <TextareaContainer>
          <textarea
            defaultValue={textareaContent.replace(/<br ?\/?>/g, "\n")}
            onChange={() =>
              setTextareaContent(event.target.value.replace(/\n/g, "<br/>"))
            }
          />
          <ToolbarButton
            handleClick={() => (currentElement.innerHTML = textareaContent)}
          >
            apply
          </ToolbarButton>
        </TextareaContainer>
      </div>
    </div>
  );
}

const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  textarea {
    width: 100%;
    height: 50px;
    padding: 7px;
  }

  button {
    width: 50px;
    margin-top: 10px;
    cursor: pointer;
  }
`;

export default TextContentChangeSubtoolbar;
