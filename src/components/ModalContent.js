import {
  FcFullTrash,
  FcGlobe,
  FcMultipleInputs,
  FcQuestions,
} from "react-icons/fc";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

import { ID_TOKEN } from "../constants/constants";
import useAxios from "../hooks/useAxios";
import Button from "./Button";

function ModalContent({
  modalText = "",
  primaryButtonText = "",
  secondaryButtonText = "",
  modalIconState,
  params,
  handleClick,
  requestType,
}) {
  const modalIconMap = {
    question: <FcQuestions />,
    deploy: <FcGlobe />,
    save: <FcMultipleInputs />,
    delete: <FcFullTrash />,
  };

  const { fetchData } = useAxios(
    params,
    localStorage.getItem(ID_TOKEN),
    requestType
  );

  const handleTitleInput = (event) => {
    params.data.title = event.target.value;
  };

  return (
    <div>
      <h3>
        <MdClose onClick={handleClick} />
      </h3>
      <h1>{modalIconMap[modalIconState]}</h1>
      <h2>{modalText}</h2>
      {!requestType && (
        <NewSiteModalInputContainer>
          <span>Title:</span>
          <input onChange={handleTitleInput} />
        </NewSiteModalInputContainer>
      )}
      <Button handleClick={fetchData} mainButton={true}>
        {primaryButtonText}
      </Button>
      <Button handleClick={handleClick} margin="13px">
        {secondaryButtonText}
      </Button>
    </div>
  );
}

const NewSiteModalInputContainer = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  margin: 0px;

  span {
    margin-right: 5px;
    font-size: 18px;
  }

  input {
    background: white;
    border: 1px solid #5e5e5e;
    border-radius: 7px;
    padding: 3px 10px;
  }
`;

export default ModalContent;
