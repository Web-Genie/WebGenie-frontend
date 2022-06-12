import { useCallback, useState } from "react";

import {
  ADD_IMG_URL_MESSAGE,
  ID_TOKEN,
  MODAL_ICON_STATE,
  NEW_EDITOR_MODAL_MESSAGE,
  PUBLISH_MODAL_MESSAGE,
  SAVE_MODAL_MESSAGE,
} from "../constants/constants";

const useModal = (editorTitle, editorId) => {
  const [shouldDisplayModal, setShouldDisplayModal] = useState(false);
  const [message, setMessage] = useState({
    titleMessage: null,
    proceedButtonText: null,
    denyButtonText: null,
    iconType: null,
    params: null,
  });

  const createNewSiteModalToggle = useCallback(() => {
    setShouldDisplayModal((state) => !state);
    setMessage({
      titleMessage: NEW_EDITOR_MODAL_MESSAGE.titleMessage,
      proceedButtonText: NEW_EDITOR_MODAL_MESSAGE.acceptButtonMessage,
      denyButtonText: NEW_EDITOR_MODAL_MESSAGE.denyButtonMessage,
      iconType: MODAL_ICON_STATE.questionState,
      params: {
        method: "post",
        url: "/websites",
        data: { title: editorTitle },
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ID_TOKEN)}`,
        },
      },
    });
  }, []);

  const saveModalToggle = () => {
    setShouldDisplayModal((state) => !state);
    setMessage({
      titleMessage: SAVE_MODAL_MESSAGE.titleMessage,
      proceedButtonText: SAVE_MODAL_MESSAGE.acceptButtonMessage,
      denyButtonText: SAVE_MODAL_MESSAGE.denyButtonMessage,
      iconType: MODAL_ICON_STATE.saveState,
      params: {
        method: "patch",
        url: "/websites/:website_id",
        data: { title: editorTitle, userCode: "", websiteId: editorId },
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ID_TOKEN)}`,
        },
      },
      requestType: "Save",
    });
  };

  const publishModalToggle = useCallback(() => {
    setShouldDisplayModal((state) => !state);
    setMessage({
      titleMessage: PUBLISH_MODAL_MESSAGE.titleMessage,
      proceedButtonText: PUBLISH_MODAL_MESSAGE.acceptButtonMessage,
      denyButtonText: PUBLISH_MODAL_MESSAGE.denyButtonMessage,
      iconType: MODAL_ICON_STATE.deployState,
      params: {
        method: "delete",
        url: "/websites/:website_id",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ID_TOKEN)}`,
        },
        params: {
          websiteId: editorId,
        },
      },
    });
  }, []);

  const imageURLModalToggle = useCallback(() => {
    setShouldDisplayModal((state) => !state);
    setMessage({
      titleMessage: ADD_IMG_URL_MESSAGE.titleMessage,
      proceedButtonText: ADD_IMG_URL_MESSAGE.acceptButtonMessage,
      denyButtonText: ADD_IMG_URL_MESSAGE.denyButtonMessage,
    });
  }, []);

  const closeModal = useCallback(
    () => setShouldDisplayModal((state) => !state),
    []
  );

  return {
    shouldDisplayModal,
    createNewSiteModalToggle,
    saveModalToggle,
    publishModalToggle,
    imageURLModalToggle,
    closeModal,
    message,
  };
};

export default useModal;
