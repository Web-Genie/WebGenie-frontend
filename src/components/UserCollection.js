import PropTypes from "prop-types";
import React from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

import emptyCollection from "../assets/emptyCollection.png";
import placeholderImage from "../assets/placeholder.png";

function UserCollection({ collections, toggleDeleteModal, searchKeyword }) {
  return (
    <UserContents>
      {!collections ? (
        <EmptyCollectionContainer>
          <img alt="Empty collection indicating image" src={emptyCollection} />
          <h1>생성된 웹사이트가 없습니다.</h1>
        </EmptyCollectionContainer>
      ) : (
        <>
          {collections
            .filter((website) =>
              website.title.toLowerCase().includes(searchKeyword)
            )
            .map((website) => (
              <UserWebsites key={website._id}>
                <h3 value={website._id}>
                  <MdClose onClick={toggleDeleteModal} value={website._id} />
                </h3>
                {website.isDeployed ? (
                  <Link to={`/userwebsite/${website._id}/deployed`}>
                    <div className="container">
                      <div className="previewWebsite">
                        <iframe
                          frameBorder="0"
                          srcDoc={`<div style="width: 120%; height:99vh; border-radius: 30px; background-color:${website.userSavedCode[0].backgroundColor}">${website.userSavedCode[0].code}</div>`}
                        />
                      </div>
                    </div>
                    <div className="title">
                      <p>{website.title}</p>
                    </div>
                  </Link>
                ) : (
                  <Link to={`/editor/${website._id}`}>
                    <img
                      alt="Currently editing indicating image"
                      src={placeholderImage}
                    />
                    <div>
                      <p>{website.title}</p>
                    </div>
                  </Link>
                )}
              </UserWebsites>
            ))}
        </>
      )}
    </UserContents>
  );
}

UserCollection.propTypes = {
  collections: PropTypes.array,
  toggleDeleteModal: PropTypes.func,
  searchKeyword: PropTypes.string,
};

const UserContents = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 84vh;
  overflow-y: scroll;
  background-color: rgb(249, 249, 249);

  a {
    text-decoration: none;
  }
`;

const UserWebsites = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 220px;
  margin: 40px 50px 30px 30px;
  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: white;
  transition: all 0.3s ease;
  cursor: pointer;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 7px;
  }

  img {
    height: 150px;
    width: 300px;
    border-radius: 10px 10px 0px 0px;
    user-select: none;
  }

  p {
    margin: 0px 5px;
    text-align: center;
    font-size: 20px;
    color: black;
  }

  h3 {
    position: absolute;
    z-index: 100;
    width: 30px;
    height: 30px;
    right: -10px;
    top: -10px;
    font-size: 30px;
    color: white;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s ease;

    :hover {
      transform: scale(1.2);
    }
  }

  a {
    transition: all 0.3s ease;

    :hover {
      opacity: 0.6;
    }
  }

  path {
    pointer-events: none;
  }

  .container {
    width: calc(1440px * 0.21);
    height: calc(900px * 0.17);
    display: inline-block;
    overflow: hidden;
  }

  .previewWebsite {
    width: fit-content;
    height: auto;
    transform: scale(0.209);
    transform-origin: 0 0;
    -webkit-transform: scale(0.209);
    -webkit-transform-origin: 0 0;
  }

  .previewWebsite iframe {
    width: 1440px;
    height: 900px;
  }
`;

const EmptyCollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 400px;
    margin-top: 80px;
    opacity: 0.9;
  }

  h1 {
    margin-top: 50px;
    font-weight: 500;
  }
`;

export default UserCollection;
