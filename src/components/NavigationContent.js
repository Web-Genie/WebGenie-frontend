import PropTypes from "prop-types";
import React, { useContext } from "react";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";

import useInput from "../hooks/useInput";
import { Context } from "../store/Store";
import Button from "./Button";

export default function NavigationContent({
  shouldShowDifferentVersion,
  handleShouldShowDifferentVersion,
  handleToggleClick,
  saveModalToggle,
  publishModalToggle,
  createNewSiteModalToggle,
  handleSearchInputChange,
}) {
  const { id } = useParams();

  const { globalState } = useContext(Context);
  const { editorRef, editorData } = globalState;

  const { shouldDisplayInputField, handleInputChange, toggleInputField } =
    useInput("editor");

  const clearCanvas = () => {
    editorRef.innerHTML = "";
    editorRef.style.backgroundColor = "white";
  };

  return (
    <>
      {id && (
        <>
          <div className="editorNavbar">
            <a onClick={() => (window.location = "/")}>
              <FaArrowLeft />
            </a>
            <div className="titleNavbar">
              {!shouldDisplayInputField ? (
                <h3>{editorData.title}</h3>
              ) : (
                <input onChange={handleInputChange} />
              )}
              <span onClick={toggleInputField}>
                <FaRegEdit />
              </span>
            </div>
          </div>
          <div>
            <Button warningSignal={true} handleClick={clearCanvas}>
              Clear Canvas
            </Button>
            <Button handleClick={saveModalToggle} mainButton={false}>
              Save
            </Button>
            <Button
              handleClick={() =>
                handleShouldShowDifferentVersion((state) => !state)
              }
              mainButton={false}
            >
              {shouldShowDifferentVersion
                ? "Close Saved Version Log"
                : "Saved Version Log"}
            </Button>
            <Button handleClick={handleToggleClick} mainButton={false}>
              Wide View
            </Button>
            <Button handleClick={publishModalToggle} mainButton={true}>
              Publish
            </Button>
          </div>
        </>
      )}
      {!id && (
        <>
          <h2>My Collection</h2>
          <form>
            <input
              onChange={handleSearchInputChange}
              placeholder="Search your websites"
            />
          </form>
          <Button handleClick={createNewSiteModalToggle} mainButton={true}>
            Create New Site
          </Button>
        </>
      )}
    </>
  );
}

NavigationContent.propTypes = {
  shouldShowDifferentVersion: PropTypes.bool,
  handleShouldShowDifferentVersion: PropTypes.func,
  handleToggleClick: PropTypes.func,
  saveModalToggle: PropTypes.func,
  publishModalToggle: PropTypes.func,
  createNewSiteModalToggle: PropTypes.func,
  handleSearchInputChange: PropTypes.func,
};
