import React from "react";
import styled from "styled-components";

import ModalPortal from "../Portal";

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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  text-align: center;
  z-index: 1000;
`;

const ModalBody = styled.div`
  width: 460px;
  height: 400px;
  border-radius: 7px;
  background-color: white;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 10px 20px;
  }

  h1 {
    margin-top: 10px;
    margin-bottom: 15px;
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
