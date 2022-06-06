import React from "react";
import styled from "styled-components";

import ModalPortal from "../../Portal";

function Modal({ children }) {
  return (
    <ModalPortal>
      <ModalContainer>
        <ModalBody>{children}</ModalBody>
      </ModalContainer>
    </ModalPortal>
  );
}

const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
`;

const ModalBody = styled.div`
  background-color: white;
  width: 460px;
  height: 400px;
  border-radius: 7px;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 30px;
  }

  h1 {
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: 80px;
  }

  h2 {
    margin-bottom: 40px;
    color: #54595e;
  }

  h3 {
    font-size: 28px;
    text-align: end;
    cursor: pointer;

    :hover {
      opacity: 0.5;
    }
  }
`;

export default Modal;
