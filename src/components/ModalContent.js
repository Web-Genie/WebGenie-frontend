import PropTypes from "prop-types";
import { useContext } from "react";
import { FcGlobe, FcMultipleInputs, FcQuestions } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

import { ID_TOKEN } from "../constants/constants";
import { SubToolbarContext } from "../context/subToolbarContext";
import useAxios from "../hooks/useAxios";
import Button from "./Button";
import Modal from "./Modal";

function ModalContent({
  modalText = "",
  primaryButtonText = "",
  secondaryButtonText = "",
  modalIconState,
  params,
  handleClick,
  requestType,
}) {
  const { setImageUrl, setHasImageUrl } = useContext(SubToolbarContext);

  const modalIconMap = {
    question: <FcQuestions />,
    deploy: <FcGlobe />,
    save: <FcMultipleInputs />,
  };

  const { fetchData } = useAxios(
    params,
    localStorage.getItem(ID_TOKEN),
    requestType
  );

  const handleTitleInput = (event) => {
    params.data.title = event.target.value;
  };

  const handleImageInput = (event) => {
    setImageUrl(event.target.value);
  };

  const insertImage = () => {
    setHasImageUrl(true);
    handleClick();
  };

  return (
    <div>
      <h3>
        <MdClose onClick={handleClick} />
      </h3>
      <h1>{modalIconMap[modalIconState]}</h1>
      <h2>{modalText}</h2>
      {!requestType && modalIconState && (
        <NewSiteModalInputContainer>
          <span>Title:</span>
          <input onChange={handleTitleInput} />
        </NewSiteModalInputContainer>
      )}
      {!modalIconState && !requestType && (
        <ImgURLMocalInputContainer>
          <span></span>
          <input className="imgURL" onChange={handleImageInput} />
        </ImgURLMocalInputContainer>
      )}
      <Button
        handleClick={!modalIconState && !requestType ? insertImage : fetchData}
        mainButton={true}
      >
        {primaryButtonText}
      </Button>
      <Button handleClick={handleClick} margin="13px">
        {secondaryButtonText}
      </Button>
    </div>
  );
}

ModalContent.propTypes = {
  modalText: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string.isRequired,
  secondaryButtonText: PropTypes.string.isRequired,
  modalIconState: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

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

const ImgURLMocalInputContainer = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;

  span {
    margin-right: 5px;
    font-size: 18px;
  }

  input {
    background: white;
    border: 1px solid #5e5e5e;
    border-radius: 7px;
    width: 400px;
    height: 30px;
    padding: 8px;
    margin-bottom: 40px;
  }
`;

export default ModalContent;
