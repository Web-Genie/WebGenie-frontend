import reactDom from "react-dom";

const ModalPortal = ({ children }) => {
  const element = document.getElementById("modal-root");

  return reactDom.createPortal(children, element);
};

export default ModalPortal;
