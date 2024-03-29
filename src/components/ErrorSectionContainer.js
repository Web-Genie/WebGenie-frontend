import React from "react";
import styled from "styled-components";

import ErrorNumber from "../assets/404.png";
import ErrorImage from "../assets/noConnectionImage.png";
import { sendUserToHomepage } from "../utils";

function ErrorSectionContainer() {
  return (
    <ErrorContainer>
      <MessageContainer>
        <div className="errorHeader">
          <h1>Ooops...</h1>
          <h2>Page not found</h2>
        </div>
        <p>
          {
            "The page you are looking for doesn't exist or another error occurred,go back to home page."
          }
        </p>
        <div className="buttonContainer">
          <button onClick={sendUserToHomepage}>Homepage</button>
        </div>
      </MessageContainer>
      <ImageContainer>
        <div>
          <img
            alt="Confused User Image Indicator"
            className="confusedUser"
            src={ErrorImage}
          />
        </div>
        <div>
          <img
            alt="Error Code In Image"
            className="errorNumber"
            src={ErrorNumber}
          />
        </div>
      </ImageContainer>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-wrap: wrap;
  height: 92vh;
  overflow-y: scroll;
  background-color: rgb(249, 249, 249);

  h1 {
    color: #384259;
    font-size: 67px;
  }

  h2 {
    margin-top: 21px;
    font-size: 47px;
    font-weight: 300;
  }

  p {
    margin-top: 21px;
    width: 470px;
    font-size: 19px;
    font-weight: 200;
    line-height: 1.3;
  }

  button {
    margin-top: 30px;
    border-radius: 5px;
    border: none;
    padding: 8px 70px;
    background: rgba(1, 38, 85, 0.87);
    color: white;
    font-size: 20px;
    font-weight: 200;
    transition: all 0.2s ease;
    cursor: pointer;

    :hover {
      transform: scale(1.05);
      opacity: 0.8;
    }
  }

  .confusedUser {
    width: 500px;
  }

  .errorNumber {
    margin-left: 130px;
    margin-right: 80px;
    height: 450px;
  }

  .buttonContainer {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 100px;
  margin-left: 170px;
  width: 420px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default ErrorSectionContainer;
