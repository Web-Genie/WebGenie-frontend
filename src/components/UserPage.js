import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import useAxios from "../hooks/useAxios";
import useLogout from "../hooks/useLogout";
import useModal from "../hooks/useModal";
import Button from "./Button";
import Header from "./Header";
import Loader from "./Loader";
import Modal from "./Modal";
import ModalContent from "./ModalContent";
import Navigation from "./Navigation";
import UserCollection from "./UserCollection";

function UserPage() {
  const { shouldDisplayModal, createNewSiteModalToggle, closeModal, message } =
    useModal();
  const { handleLogout } = useLogout();
  const idToken = localStorage.getItem("idToken");
  const { userInformation } = useAxios(
    {
      method: "get",
      url: "/login",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    },
    idToken
  );

  if (!userInformation) {
    return <Loader />;
  }

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
        {userInformation && (
          <LogoutSection>
            <img src={userInformation.user.image} />
            <Button handleClick={handleLogout}>logout</Button>
          </LogoutSection>
        )}
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

const LogoutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`;
export default UserPage;
