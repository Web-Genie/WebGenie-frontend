import { useCallback, useState } from "react";

import {
<<<<<<< HEAD
=======
  ID_TOKEN,
>>>>>>> origin/main
  MODAL_ICON_STATE,
  NEW_EDITOR_MODAL_MESSAGE,
  PUBLISH_MODAL_MESSAGE,
  SAVE_MODAL_MESSAGE,
} from "../constants/constants";

<<<<<<< HEAD
const useModal = () => {
=======
const useModal = (editorTitle, editorId) => {
>>>>>>> origin/main
  const [shouldDisplayModal, setShouldDisplayModal] = useState(false);
  const [message, setMessage] = useState({
    titleMessage: null,
    proceedButtonText: null,
    denyButtonText: null,
    iconType: null,
<<<<<<< HEAD
=======
    params: null,
>>>>>>> origin/main
  });

  const createNewSiteModalToggle = useCallback(() => {
    setShouldDisplayModal((state) => !state);
    setMessage({
      titleMessage: NEW_EDITOR_MODAL_MESSAGE.titleMessage,
      proceedButtonText: NEW_EDITOR_MODAL_MESSAGE.acceptButtonMessage,
      denyButtonText: NEW_EDITOR_MODAL_MESSAGE.denyButtonMessage,
      iconType: MODAL_ICON_STATE.questionState,
<<<<<<< HEAD
    });
  }, []);

  const saveModalToggle = useCallback(() => {
=======
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
>>>>>>> origin/main
    setShouldDisplayModal((state) => !state);
    setMessage({
      titleMessage: SAVE_MODAL_MESSAGE.titleMessage,
      proceedButtonText: SAVE_MODAL_MESSAGE.acceptButtonMessage,
      denyButtonText: SAVE_MODAL_MESSAGE.denyButtonMessage,
      iconType: MODAL_ICON_STATE.saveState,
<<<<<<< HEAD
    });
  }, []);
=======
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
>>>>>>> origin/main

  const publishModalToggle = useCallback(() => {
    setShouldDisplayModal((state) => !state);
    setMessage({
      titleMessage: PUBLISH_MODAL_MESSAGE.titleMessage,
      proceedButtonText: PUBLISH_MODAL_MESSAGE.acceptButtonMessage,
      denyButtonText: PUBLISH_MODAL_MESSAGE.denyButtonMessage,
      iconType: MODAL_ICON_STATE.deployState,
<<<<<<< HEAD
=======
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
>>>>>>> origin/main
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
