import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

function LoginButton({ children, handleLogin }) {
  return (
    <SocialLoginButton onClick={handleLogin}>{children}</SocialLoginButton>
  );
}

LoginButton.propTypes = {
  children: PropTypes.any,
  handleLogin: PropTypes.func,
};

const SocialLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding: 13px 30px;
  border: none;
  border-radius: 3px;
  box-shadow: 0px -1px 15px 3px rgba(0, 0, 0, 0.04),
    0 1px 1px rgba(0, 0, 0, 0.25);
  background-color: white;
  background-position: 12px 11px;
  color: rgb(117, 117, 117);
  font-size: 18px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;

  .logoImage {
    margin-right: 30px;
    width: 20px;
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

export default LoginButton;
