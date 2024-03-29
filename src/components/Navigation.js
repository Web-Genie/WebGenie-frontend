import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

function Navigation({ children }) {
  return <NavigationContainer>{children}</NavigationContainer>;
}

Navigation.propTypes = {
  children: PropTypes.object.isRequired,
};

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;

  h2 {
    margin: 15px 0px 10px 20px;
  }

  h3 {
    animation: myAnim 1s ease 0s 1 normal forwards;
  }

  @keyframes myAnim {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  button {
    margin: 15px 25px 10px 0px;
  }

  input {
    width: 230px;
    margin-top: 15px;
    margin-bottom: 18px;
    padding: 7px 20px;
    border-radius: 5px;
    border: 2px solid #d0cfce;
    outline: none;
    font-size: 18px;

    :focus {
      border: 2px solid #008abf;
      box-shadow: 5px 5px 17px 3px rgba(0, 0, 0, 0.2);
      color: black;
      transition: 0.5s ease;

      ::placeholder {
        transition: opacity 0.45s ease;
        opacity: 0;
      }
    }
  }

  form {
    display: flex;
    align-items: center;
  }

  span {
    display: flex;
    font-size: 24px;
    margin-left: 25px;
    transition: all 0.2s ease;
    cursor: pointer;

    :hover {
      opacity: 0.6;
      transform: scale(1.2);
    }
  }

  .editorNavbar {
    display: flex;
    align-items: center;
  }

  .titleNavbar {
    display: flex;
    align-items: center;
    margin-left: 30px;
  }

  a {
    display: flex;
    margin-left: 25px;
    color: black;
    font-size: 24px;
    transition: all 0.2s ease;
    cursor: pointer;

    :hover {
      opacity: 0.6;
      transform: scale(1.2);
    }
  }
`;

export default Navigation;
