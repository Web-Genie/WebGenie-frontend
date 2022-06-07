import { useCallback, useState } from "react";

import {
  DEPLOY_ICON,
  NEW_EDITOR_ACCEPT_MESSAGE,
  NEW_EDITOR_DENY_MESSAGE,
  NEW_EDITOR_REMINDER_MESSAGE,
  PUBLISH_ACCEPT_MESSAGE,
  PUBLISH_DENY_MESSAGE,
  PUBLISH_REMINDER_MESSAGE,
  QUESTION_ICON,
  SAVE_ACCEPT_MESSAGE,
  SAVE_DENY_MESSAGE,
  SAVE_ICON,
  SAVE_REMINDER_MESSAGE,
} from "../constants/constants";

const useModal = (initialState = false) => {
  const [shouldDisplayModal, setShouldDisplayModal] = useState(initialState);
  const [message, setMessage] = useState({
    titleMessage: null,
    proceedButtonText: null,
    denyButtonText: null,
    iconType: null,
  });

  const createNewSiteModalToggle = useCallback(() => {
    setShouldDisplayModal((state) => !state);
    setMessage({
      titleMessage: NEW_EDITOR_REMINDER_MESSAGE,
      proceedButtonText: NEW_EDITOR_ACCEPT_MESSAGE,
      denyButtonText: NEW_EDITOR_DENY_MESSAGE,
      iconType: QUESTION_ICON,
    });
  }, []);

  const saveModalToggle = useCallback(() => {
    setShouldDisplayModal((state) => !state);
    setMessage({
      titleMessage: SAVE_REMINDER_MESSAGE,
      proceedButtonText: SAVE_ACCEPT_MESSAGE,
      denyButtonText: SAVE_DENY_MESSAGE,
      iconType: SAVE_ICON,
    });
  }, []);

  const publishModalToggle = useCallback(() => {
    setShouldDisplayModal((state) => !state);
    setMessage({
      titleMessage: PUBLISH_REMINDER_MESSAGE,
      proceedButtonText: PUBLISH_ACCEPT_MESSAGE,
      denyButtonText: PUBLISH_DENY_MESSAGE,
      iconType: DEPLOY_ICON,
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
