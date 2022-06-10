import React, { useState } from "react";

import mockImage from "../assets/mockData.png";
import useModal from "../hooks/useModal";
import Button from "./Button";
import Header from "./Header";
import Modal from "./Modal";
import ModalContent from "./ModalContent";
import Navigation from "./Navigation";
import UserCollection from "./UserCollection";

function UserPage() {
  const [userInformation, setUserInformation] = useState({});
  const { shouldDisplayModal, createNewSiteModalToggle, closeModal, message } =
    useModal();

  return (
    <>
      {shouldDisplayModal && (
        <Modal>
          <ModalContent
            modalText={message.titleMessage}
            primaryButtonText={message.proceedButtonText}
            secondaryButtonText={message.denyButtonText}
            modalIconState={message.iconType}
            handleClick={closeModal}
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
        <Button handleClick={createNewSiteModalToggle} mainButton={true}>
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
