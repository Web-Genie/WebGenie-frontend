import PropTypes from "prop-types";
import React from "react";
import { FaArrowLeft, FaRegEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";

import { ELEMENT_STYLE_OPTIONS, INFORMATION_TEXT } from "../constants";
import useInput from "../hooks/useInput";
import Button from "./Button";

export default function NavigationContent({
  shouldShowDifferentVersion,
  handleShouldShowDifferentVersion,
  handleToggleClick,
  saveModalToggle,
  publishModalToggle,
  createNewSiteModalToggle,
  handleSearchInputChange,
  editorData,
  editorRef,
}) {
  const { id } = useParams();

  const { shouldDisplayInputField, handleInputChange, toggleInputField } =
    useInput("editor");

  const clearCanvas = () => {
    editorRef.innerHTML = "";
    editorRef.style.backgroundColor =
      ELEMENT_STYLE_OPTIONS.INITIAL_CANVAS_BACKGROUND_COLOR;
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
                ? INFORMATION_TEXT.CLOSE_VERSION_LOG
                : INFORMATION_TEXT.OPEN_VERSION_LOG}
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
  editorData: PropTypes.any,
  editorRef: PropTypes.object,
};
