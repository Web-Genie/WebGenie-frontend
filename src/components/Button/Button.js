import React from "react";

import googleLogo from "../../assets/googleLogo.png";

import styled from "styled-components";

function Button({ buttonText, buttonPurpose }) {
  return (
    buttonPurpose === "login" && (
      <div>
        <LoginButton>
          <img className="googleLogo" src={googleLogo}></img>
          {buttonText}
        </LoginButton>
      </div>
    )
  );
}

const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  border: none;
  border-radius: 3px;
  padding: 13px 30px;
  box-shadow: 0px -1px 15px 3px rgba(0, 0, 0, 0.04),
    0 1px 1px rgba(0, 0, 0, 0.25);
  color: rgb(117, 117, 117);
  font-size: 18px;
  font-weight: 500;
  background-color: white;
  background-position: 12px 11px;
  transition: all 0.2s ease;
  cursor: pointer;

  .googleLogo {
    width: 20px;
    margin-right: 30px;
  }

  :hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
    transform: translateY(-5px);
  }

  :active {
    background-color: #eeeeee;
    transform: translateY(5px);
  }

  :focus {
    box-shadow: 0px -1px 15px 3px rgba(0, 0, 0, 0.04),
      0 1px 1px rgba(0, 0, 0, 0.25);
    outline: none;
  }
`;

export default Button;
