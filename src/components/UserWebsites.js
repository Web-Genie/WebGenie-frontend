import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { REQUEST_DATA_INFORMATION_USER } from "../constants/constants";
import { ID_TOKEN } from "../constants/constants";
import useAxios from "../hooks/useAxios";
import useInput from "../hooks/useInput";
import useLogout from "../hooks/useLogout";
import useModal from "../hooks/useModal";
import { Context } from "../store/Store";
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
  const { globalState } = useContext(Context);
  const { loggedInUserInformation } = globalState;
  const { inputValue, handleInputChange } = useInput("search");
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
    if (loggedInUserInformation.data) return;

    fetchData();
  }, []);

  if (!loggedInUserInformation.data) {
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
        {loggedInUserInformation.data && (
          <LogoutSection>
            <img
              alt="User Image"
              src={loggedInUserInformation.data.user.image}
            />
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
      {loggedInUserInformation.data && (
        <UserCollection
          toggleDeleteModal={deleteSiteModalMessage}
          collections={loggedInUserInformation.data.websites}
          searchKeyword={inputValue}
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
