import React from "react";
import styled from "styled-components";

import useLogout from "../hooks/useLogout";
import Button from "./Button";
import ErrorSectionContainer from "./ErrorSectionContainer";
import Header from "./Header";

function ErrorSection() {
  const { handleLogout } = useLogout();
  const userImage = localStorage.getItem("avatar");

  return (
    <div>
      <Header>
        <h1>WebGenie</h1>
        <LogoutSection>
          <img alt="User Image" src={userImage} />
          <Button handleClick={handleLogout}>logout</Button>
        </LogoutSection>
      </Header>
      <ErrorSectionContainer />
    </div>
  );
}

const LogoutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;

export default ErrorSection;
