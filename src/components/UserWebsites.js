import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { REQUEST_DATA_INFORMATION_USER } from "../constants/constants";
import { ID_TOKEN } from "../constants/constants";
import { UserContext } from "../context/userContext";
import useAxios from "../hooks/useAxios";
import useInput from "../hooks/useInput";
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
  const {
    shouldDisplayModal,
    createNewSiteModalToggle,
    deleteSiteModalMessage,
    closeModal,
    message,
  } = useModal();
  const { handleLogout } = useLogout();
  const { userInformation } = useContext(UserContext);
  const { searchValue, handleInputChange } = useInput("search");
  const idToken = localStorage.getItem(ID_TOKEN);

  const { fetchData } = useAxios(
    {
      method: "get",
      url: "/login",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    },
    idToken,
    REQUEST_DATA_INFORMATION_USER
  );

  useEffect(() => {
    if (userInformation) return;

    fetchData();
  }, []);

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
            requestType={message.modalType}
            params={message.params}
            handleClick={closeModal}
          />
        </Modal>
      )}
      <Header>
        <h1>WebGenie</h1>
        {userInformation && (
          <LogoutSection>
            <img alt="User Image" src={userInformation.user.image} />
            <Button handleClick={handleLogout}>logout</Button>
          </LogoutSection>
        )}
      </Header>
      <Navigation>
        <h2>My Collection</h2>
        <form>
          <input
            onChange={handleInputChange}
            placeholder="Search your websites"
          />
        </form>
        <Button handleClick={createNewSiteModalToggle} mainButton={true}>
          Create New Site
        </Button>
      </Navigation>
      {userInformation && (
        <UserCollection
          toggleDeleteModal={deleteSiteModalMessage}
          collections={userInformation.websites}
          searchKeyword={searchValue}
        />
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
