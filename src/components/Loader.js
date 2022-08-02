import React, { useEffect, useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import styled from "styled-components";

import useLogout from "../hooks/useLogout";
function Loader() {
  const [, setCurrentTimer] = useState(0);
  const { handleLogout } = useLogout();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTimer((currentCounter) => {
        if (currentCounter === 8) {
          handleLogout();
        }

        return (currentCounter += 1);
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
