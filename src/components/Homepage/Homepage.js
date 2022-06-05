import React from "react";
import styled from "styled-components";

import { firebaseAuth, googleProvider } from "../../services/firebase";

import webGenieLogo from "../../assets/logo_transparent.png";
import homepageImage from "../../assets/homepageImage.png";
import HomepageSVG from "../HomepageSVG/HomepageSVG";
import Button from "../Button/Button";

function Homepage() {
  const handleLogin = async () => {
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
      <HomepageBody>
        <HomepageSVG />
        <HomepageDetails>
          <Logo src={webGenieLogo} alt="WebGenie Logo" />
          <h1>당신의 웹사이트를 만들어보세요!</h1>
          <h2>
            원하는 아이템을 드래그하면 쉽고 빠르게 자신만의 웹사이트를 만들
            수있습니다
          </h2>
          <Button
            buttonText={"Google로 시작하기"}
            buttonPurpose={"login"}
            onClick={handleLogin}
          />
        </HomepageDetails>
        <BrandImageContainer>
          <div>
            <img className="brandImage" src={homepageImage} />
          </div>
        </BrandImageContainer>
      </HomepageBody>
    </>
  );
}

export default Homepage;

const Logo = styled.img`
  margin-top: 50px;
  width: 330px;
`;

const HomepageBody = styled.div`
  display: flex;
  height: 100vh;
`;

const BrandImageContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 900px;
    margin-top: 200px;
  }
`;

const HomepageDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;

  h1 {
    font-size: 52px;
    text-align: center;
    width: 24ch;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    animation: typing 2s steps(22), blink 0.8s step-end infinite alternate;
  }

  h2 {
    font-size: 28px;
    text-align: center;
    line-height: 1.4;
    margin-top: 50px;
    width: 550px;
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
