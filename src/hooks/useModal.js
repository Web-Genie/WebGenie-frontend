import { useCallback, useEffect, useState } from "react";

import {
  DELETE_MODAL_MESSAGE,
  ID_TOKEN,
  INSERT_IMG_URL_MODAL_MESSAGE,
  MODAL_ICON_STATE,
  NEW_EDITOR_MODAL_MESSAGE,
  PUBLISH_MODAL_MESSAGE,
  SAVE_MODAL_MESSAGE,
  SAVE_REMINDER_MODAL_MESSAGE,
} from "../constants/constants";
import { retrieveURL } from "../utils";

const useModal = (editorTitle, editorId) => {
  const currentEditorId = retrieveURL();
  const [shouldDisplayModal, setShouldDisplayModal] = useState(false);
  const [shouldUseSaveModal, setShouldUseSaveModal] = useState(false);
  const [userCode, setUserCode] = useState();
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
    setShouldUseSaveModal(true);
  };

  const deleteSiteModalMessage = useCallback((event) => {
    setShouldDisplayModal((state) => !state);
    setMessage({
      titleMessage: DELETE_MODAL_MESSAGE.titleMessage,
      proceedButtonText: DELETE_MODAL_MESSAGE.acceptButtonMessage,
      denyButtonText: DELETE_MODAL_MESSAGE.denyButtonMessage,
      iconType: MODAL_ICON_STATE.deleteState,
      modalType: "delete",
      params: {
        method: "delete",
        url: "/websites/:website_id",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ID_TOKEN)}`,
          params: event.target.getAttribute("value"),
        },
      },
    });
  }, []);

  const saveReminderModalToggle = useCallback((event) => {
    setShouldDisplayModal((state) => !state);
    setMessage({
      titleMessage: SAVE_REMINDER_MODAL_MESSAGE.titleMessage,
      proceedButtonText: SAVE_REMINDER_MODAL_MESSAGE.acceptButtonMessage,
      denyButtonText: SAVE_REMINDER_MODAL_MESSAGE.denyButtonMessage,
      iconType: MODAL_ICON_STATE.remindState,
      modalType: "remind",
      requestType: "Reminder",
      shouldGoHomepage: true,
      params: {
        method: "delete",
        url: "/image/:image_key",
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ID_TOKEN)}`,
          params: localStorage.getItem("localImgSrc"),
        },
      },
      requestType: "RemoveImage",
    });
  }, []);

  const publishModalToggle = useCallback(() => {
    setShouldDisplayModal((state) => !state);
    setMessage({
      titleMessage: PUBLISH_MODAL_MESSAGE.titleMessage,
      proceedButtonText: PUBLISH_MODAL_MESSAGE.acceptButtonMessage,
      denyButtonText: PUBLISH_MODAL_MESSAGE.denyButtonMessage,
      iconType: MODAL_ICON_STATE.deployState,
      modalType: "Publish",
      params: {
        method: "patch",
        url: "/websites/:website_id/deploy",
        data: {
          websiteId: currentEditorId,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ID_TOKEN)}`,
        },
      },
      requestType: "Publish",
    });
  }, []);

  const imageURLModalToggle = useCallback(() => {
    setShouldDisplayModal((state) => !state);
    setMessage({
      titleMessage: INSERT_IMG_URL_MODAL_MESSAGE.titleMessage,
      proceedButtonText: INSERT_IMG_URL_MODAL_MESSAGE.acceptButtonMessage,
      denyButtonText: INSERT_IMG_URL_MODAL_MESSAGE.denyButtonMessage,
    });
  }, []);

  const closeModal = useCallback(() => {
    setShouldDisplayModal((state) => !state);
    setShouldUseSaveModal(false);
  }, []);

  useEffect(() => {
    if (!shouldUseSaveModal) return;

    setMessage({
      titleMessage: SAVE_MODAL_MESSAGE.titleMessage,
      proceedButtonText: SAVE_MODAL_MESSAGE.acceptButtonMessage,
      denyButtonText: SAVE_MODAL_MESSAGE.denyButtonMessage,
      iconType: MODAL_ICON_STATE.saveState,
      params: {
        method: "post",
        url: "/websites/:website_id",
        data: {
          title: editorTitle,
          editorCode: userCode,
          websiteId: currentEditorId,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ID_TOKEN)}`,
        },
      },
      requestType: "Save",
    });
  }, [shouldUseSaveModal, userCode]);

  return {
    shouldDisplayModal,
    createNewSiteModalToggle,
    saveModalToggle,
    publishModalToggle,
    deleteSiteModalMessage,
    closeModal,
    message,
    userCode,
    setUserCode,
    saveReminderModalToggle,
    imageURLModalToggle,
  };
};

export default useModal;
