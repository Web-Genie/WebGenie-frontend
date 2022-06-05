import React, { useState, useEffect } from "react";

import api from "../../services/api";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import UserCollection from "../UserCollection/UserCollection";
import mockImage from "../../assets/mockData.png";

import styled from "styled-components";

function UserPage() {
  const [userInformation, setUserInformation] = useState({});
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

  return (
    <>
      <Header>
        <h1>WebGenie</h1>
        <img src={mockImage} />
      </Header>
      <Navigation />
      {userInformation && (
        <UserCollection collections={userInformation.userCollections} />
      )}
    </>
  );
}

export default UserPage;
