import { useCallback, useState } from "react";

import {
  MODAL_ICON_STATE,
  NEW_EDITOR_MODAL_MESSAGE,
  PUBLISH_MODAL_MESSAGE,
  SAVE_MODAL_MESSAGE,
} from "../constants/constants";

const useModal = () => {
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
        data: { title: "" },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("idToken")}`,
        },
      },
    });
  }, []);

  const saveModalToggle = useCallback(() => {
    setShouldDisplayModal((state) => !state);
    setMessage({
      titleMessage: SAVE_MODAL_MESSAGE.titleMessage,
      proceedButtonText: SAVE_MODAL_MESSAGE.acceptButtonMessage,
      denyButtonText: SAVE_MODAL_MESSAGE.denyButtonMessage,
      iconType: MODAL_ICON_STATE.saveState,
      params: {
        method: "post",
        url: "/websites/:website_id",
        body: { title: title, userCode: usercode },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("idToken")}`,
        },
        params: {
          websiteId: `${websiteId}`,
        },
      },
    });
  }, []);

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
          Authorization: `Bearer ${localStorage.getItem("idToken")}`,
        },
        params: {
          websiteId: `${websiteId}`,
        },
      },
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
    closeModal,
    message,
  };
};

export default useModal;
