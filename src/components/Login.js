import firebase from "firebase";
import React, { useContext } from "react";
import styled from "styled-components";

import googleLogo from "../assets/googleLogo.png";
import loginImage from "../assets/loginImage.png";
import webGenieLogo from "../assets/logo_transparent.png";
import { DISPATCH_TYPE } from "../constants";
import { firebaseAuth, googleProvider } from "../services/firebase";
import { Context } from "../store/Store";
import HompageSVG from "./HompageSVG";
import LoginButton from "./LoginButton";

function Login() {
  const { dispatch } = useContext(Context);

  const handleGoogleLogin = async () => {
    try {
      await firebaseAuth.signInWithPopup(googleProvider);

      const idToken = await firebase.auth().currentUser.getIdToken();

      localStorage.setItem("idToken", idToken);

      dispatch({
        type: DISPATCH_TYPE.HANDLE_LOG_IN_TOKEN_INFORMATION,
        payload: localStorage.getItem("idToken"),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LoginBody>
        <HompageSVG />
        <LoginDetails>
          <Logo src={webGenieLogo} alt="WebGenie Logo" />
          <h1>당신의 웹사이트를 만들어보세요!</h1>
          <h2>
            원하는 아이템을 드래그하면 쉽고 빠르게 자신만의 웹사이트를 만들
            수있습니다
          </h2>
          <LoginButton handleLogin={handleGoogleLogin}>
            <img alt="Google Logo" className="logoImage" src={googleLogo} />
            Google로 시작하기
          </LoginButton>
        </LoginDetails>
        <BrandImageContainer>
          <div>
            <img alt="WebGenie logo" className="brandImage" src={loginImage} />
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
