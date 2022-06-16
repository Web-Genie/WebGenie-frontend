import { useEffect, useLayoutEffect } from "react";
import { FcImport } from "react-icons/fc";
import styled from "styled-components";

import EditorToolbar from "./EditorToolbar";

function VersionLog({ handleVersionChange, information }) {
  return (
    <EditorToolbar>
      <TitleContainer>
        <p className="title">Version Log</p>
      </TitleContainer>
      <VersionViewContainer>
        {information.result.userSavedCode.map((code, idx) => {
          const savedDate = new Date(code.time).toLocaleString();
          return (
            <div key={idx}>
              <p className="number">{idx + 1}</p>
              <p className="savedLog">Last saved at</p>
              <p>{savedDate}</p>
              <p
                className="importIcon"
                value={idx}
                onClick={handleVersionChange}
              >
                <FcImport value={idx} />
              </p>
            </div>
          );
        })}
      </VersionViewContainer>
    </EditorToolbar>
  );
}

const TitleContainer = styled.div`
  margin-top: 25px;
  text-align: center;

  .title {
    font-size: 23px;
  }
`;

const VersionViewContainer = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 2px 5px;
    border: 2px dashed #e5e5e5;
    border-radius: 7px;
    user-select: none;
  }

  p {
    font-size: 15px;
    font-weight: 300;
    text-align: center;
  }

  .savedLog {
    margin-bottom: 5px;
    font-size: 17px;
    text-align: center;
    font-weight: 400;
  }

  .importIcon {
    padding-top: 10px;
    font-size: 50px;
    transition: all 0.2s ease;
    width: 50px;
    cursor: pointer;

    :hover {
      opacity: 0.7;
      transform: scale(1.2);
    }
  }

  .number {
    margin-top: 2px;
    margin-bottom: 4px;
    font-size: 25px;
  }
`;

export default VersionLog;
