import PropTypes from "prop-types";
import { FcGlobe, FcMultipleInputs, FcQuestions } from "react-icons/fc";
import { MdClose } from "react-icons/md";

import Button from "./Button";
import Modal from "./Modal";

function ModalContent({
  modalText = "",
  primaryButtonText = "",
  secondaryButtonText = "",
  modalIconState,
  handleClick,
}) {
  const modalIconMap = {
    question: <FcQuestions />,
    deploy: <FcGlobe />,
    save: <FcMultipleInputs />,
  };

  return (
    <div>
      <h3>
        <MdClose onClick={handleClick} />
      </h3>
      <h1>{modalIconMap[modalIconState]}</h1>
      <h2>{modalText}</h2>
      <Button mainButton={true}>{primaryButtonText}</Button>
      <Button margin="13px">{secondaryButtonText}</Button>
    </div>
  );
}

ModalContent.propTypes = {
  modalText: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string.isRequired,
  secondaryButtonText: PropTypes.string.isRequired,
  modalIconState: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ModalContent;
