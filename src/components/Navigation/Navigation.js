import CreateButton from "../Button/Button";

import styled from "styled-components";

function Navigation() {
  return (
    <NavigationContainer>
      <h2>My Collection</h2>
      <form>
        <input placeholder="Search your websites" />
      </form>
      <CreateButton mainButton={true}>Create New Site</CreateButton>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2;
  height: 8vh;

  h2 {
    margin: 15px 0px 10px 20px;
  }

  button {
    margin: 15px 25px 10px 0px;
  }

  input {
    margin-top: 15px;
    margin-bottom: 18px;
    padding: 7px 20px;
    font-size: 18px;
    border-radius: 5px;
    border: 2px solid #d0cfce;
    outline: none;
    width: 230px;

    :focus {
      border: 2px solid #008abf;
      transition: 0.5s ease;
      color: black;
      box-shadow: 5px 5px 17px 3px rgba(0, 0, 0, 0.2);

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
`;

export default Navigation;
