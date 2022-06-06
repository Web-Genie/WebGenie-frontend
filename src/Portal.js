import reactDom from "react-dom";

const ModalPortal = ({ children }) => {
  const el = document.getElementById("modal-root");

  return reactDom.createPortal(children, el);
};

export default ModalPortal;
