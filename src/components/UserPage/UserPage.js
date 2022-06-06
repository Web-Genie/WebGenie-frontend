import React, { useEffect, useState } from "react";

import mockImage from "../../assets/mockData.png";
import {
  NEW_EDITOR_ACCEPT_MESSAGE,
  NEW_EDITOR_REMINDER_MESSAGE,
  NO_MESSAGE,
  QUESTION_ICON,
} from "../../constants/modal";
import api from "../../services/api";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import ModalContent from "../ModalContent/ModalContent";
import Navigation from "../Navigation/Navigation";
import UserCollection from "../UserCollection/UserCollection";

function UserPage() {
  const [userInformation, setUserInformation] = useState({});
  const [shouldDisplayModal, setShouldDisplayModal] = useState(false);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchUser = async () => {
      const result = await api.get("/data/user.json", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      setUserInformation(result.data.userInformation);

      return result;
    };

    fetchUser();
  }, []);

  const toggleCreateNewSiteModal = () => {
    setShouldDisplayModal(!shouldDisplayModal);
  };

  return (
    <>
      {shouldDisplayModal && (
        <Modal>
          <ModalContent
            modalText={NEW_EDITOR_REMINDER_MESSAGE}
            primaryButtonText={NEW_EDITOR_ACCEPT_MESSAGE}
            secondaryButtonText={NO_MESSAGE}
            modalIconState={QUESTION_ICON}
            handleClick={toggleCreateNewSiteModal}
          />
        </Modal>
      )}
      <Header>
        <h1>WebGenie</h1>
        <img src={mockImage} />
      </Header>
      <Navigation>
        <h2>My Collection</h2>
        <form>
          <input placeholder="Search your websites" />
        </form>
        <Button handleClick={toggleCreateNewSiteModal} mainButton={true}>
          Create New Site
        </Button>
      </Navigation>
      {userInformation && (
        <UserCollection collections={userInformation.userCollections} />
      )}
    </>
  );
}

export default UserPage;
