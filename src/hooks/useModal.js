import { useCallback, useContext, useEffect, useState } from "react";

import { ID_TOKEN, MODAL } from "../constants";
import { Context } from "../store/Store";
import { retrieveURL } from "../utils";

const useModal = () => {
  const currentEditorId = retrieveURL();
  const [shouldDisplayModal, setShouldDisplayModal] = useState(false);
  const [shouldUseSaveModal, setShouldUseSaveModal] = useState(false);
  const [message, setMessage] = useState({
    titleMessage: null,
    proceedButtonText: null,
    denyButtonText: null,
    iconType: null,
    params: null,
  });
  const { globalState } = useContext(Context);
  const { editorRef, editorData } = globalState;

  const createNewSiteModalToggle = useCallback(() => {
    setShouldDisplayModal((state) => !state);
    setMessage({
      titleMessage: MODAL.MESSAGE.NEW_EDITOR.titleMessage,
      proceedButtonText: MODAL.MESSAGE.NEW_EDITOR.acceptButtonMessage,
      denyButtonText: MODAL.MESSAGE.NEW_EDITOR.denyButtonMessage,
      iconType: MODAL.ICON.questionState,
      params: {
        method: "post",
        url: "/websites",
        data: { title: editorData.title },
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
      titleMessage: MODAL.MESSAGE.DELETE_EDITOR.titleMessage,
      proceedButtonText: MODAL.MESSAGE.DELETE_EDITOR.acceptButtonMessage,
      denyButtonText: MODAL.MESSAGE.DELETE_EDITOR.denyButtonMessage,
      iconType: MODAL.ICON.deleteState,
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

  const saveReminderModalToggle = useCallback(() => {
    setShouldDisplayModal((state) => !state);
    setMessage({
      titleMessage: MODAL.MESSAGE.SAVE_REMINDER.titleMessage,
      proceedButtonText: MODAL.MESSAGE.SAVE_REMINDER.acceptButtonMessage,
      denyButtonText: MODAL.MESSAGE.SAVE_REMINDER.denyButtonMessage,
      iconType: MODAL.ICON.remindState,
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
      titleMessage: MODAL.MESSAGE.PUBLISH_EDITOR.titleMessage,
      proceedButtonText: MODAL.MESSAGE.PUBLISH_EDITOR.acceptButtonMessage,
      denyButtonText: MODAL.MESSAGE.PUBLISH_EDITOR.denyButtonMessage,
      iconType: MODAL.ICON.deployState,
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
      titleMessage: MODAL.MESSAGE.INSERT_IMGAGE_URL.titleMessage,
      proceedButtonText: MODAL.MESSAGE.INSERT_IMGAGE_URL.acceptButtonMessage,
      denyButtonText: MODAL.MESSAGE.INSERT_IMGAGE_URL.denyButtonMessage,
    });
  }, []);

  const closeModal = useCallback(() => {
    setShouldDisplayModal((state) => !state);
    setShouldUseSaveModal(false);
  }, []);

  useEffect(() => {
    if (!shouldUseSaveModal) return;

    setMessage({
      titleMessage: MODAL.MESSAGE.SAVE_EDITOR.titleMessage,
      proceedButtonText: MODAL.MESSAGE.SAVE_EDITOR.acceptButtonMessage,
      denyButtonText: MODAL.MESSAGE.SAVE_EDITOR.denyButtonMessage,
      iconType: MODAL.ICON.saveState,
      params: {
        method: "post",
        url: "/websites/:website_id",
        data: {
          title: editorData.title,
          editorCode: editorRef.innerHTML,
          websiteId: currentEditorId,
          backgroundColor: window.getComputedStyle(editorRef).backgroundColor,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem(ID_TOKEN)}`,
        },
      },
      requestType: "Save",
    });
  }, [shouldUseSaveModal]);

  return {
    shouldDisplayModal,
    createNewSiteModalToggle,
    saveModalToggle,
    publishModalToggle,
    deleteSiteModalMessage,
    closeModal,
    message,
    saveReminderModalToggle,
    imageURLModalToggle,
  };
};

export default useModal;
