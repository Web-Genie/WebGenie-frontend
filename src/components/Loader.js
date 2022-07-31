import React from "react";
import DotLoader from "react-spinners/DotLoader";
import styled from "styled-components";

function Loader() {
  return (
    <LoaderContainer>
      <DotLoader color="#023E8A" size={60} />
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export default Loader;
