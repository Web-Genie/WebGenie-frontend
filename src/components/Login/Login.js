import React from "react";
import styled from "styled-components";

import { firebaseAuth, googleProvider } from "../../services/firebase";
import api from "../../services/api";

import webGenieLogo from "../../assets/logo_transparent.png";
import loginImage from "../../assets/loginImage.png";
import googleLogo from "../../assets/googleLogo.png";

import LoginSVG from "../LoginSVG/LoginSVG";
import LoginButton from "../Button/LoginButton";

function Login() {
  const handleGoogleLogin = async () => {
    try {
      const loggedInResult = await firebaseAuth.signInWithPopup(googleProvider);
      const accessToken = loggedInResult.credential.accessToken;

      localStorage.setItem("accessToken", accessToken);

      await api.post("/login", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LoginBody>
        <LoginSVG />
        <LoginDetails>
          <Logo src={webGenieLogo} alt="WebGenie Logo" />
          <h1>당신의 웹사이트를 만들어보세요!</h1>
          <h2>
            원하는 아이템을 드래그하면 쉽고 빠르게 자신만의 웹사이트를 만들
            수있습니다
          </h2>
          <LoginButton handleLogin={handleGoogleLogin}>
            <img className="logoImage" src={googleLogo} />
            Google로 시작하기
          </LoginButton>
        </LoginDetails>
        <BrandImageContainer>
          <div>
            <img className="brandImage" src={loginImage} />
          </div>
        </BrandImageContainer>
      </LoginBody>
    </>
  );
}

export default Login;

const Logo = styled.img`
  margin-top: 50px;
  width: 330px;
`;

const LoginBody = styled.div`
  display: flex;
  height: 100vh;
`;

const BrandImageContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-top: 200px;
    width: 900px;
  }
`;

const LoginDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  h1 {
    width: 24ch;
    border-right: 3px solid;
    overflow: hidden;
    font-size: 52px;
    text-align: center;
    white-space: nowrap;
    animation: typing 2s steps(22), blink 0.8s step-end infinite alternate;
  }

  h2 {
    width: 550px;
    margin-top: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 1.4;
  }

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
