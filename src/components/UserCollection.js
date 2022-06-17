import PropTypes from "prop-types";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

import emptyCollection from "../assets/emptyCollection.png";
import placeholderImage from "../assets/placeholder.png";

function UserCollection({ collections, toggleDeleteModal, searchKeyword }) {
  return (
    <UserContents>
      {!collections && (
        <EmptyCollectionContainer>
          <img alt="Empty collection indicating image" src={emptyCollection} />
          <h1>생성된 웹사이트가 없습니다.</h1>
        </EmptyCollectionContainer>
      )}
      {collections &&
        collections.map((userWebsites) => {
          if (searchKeyword.length > 0) {
            if (userWebsites.title.includes(searchKeyword)) {
              if (userWebsites.isDeployed) {
                return (
                  <UserWebsites key={userWebsites._id}>
                    <h3 value={userWebsites._id}>
                      <MdClose
                        onClick={toggleDeleteModal}
                        value={userWebsites._id}
                      />
                    </h3>
                    <Link to={`/userwebsite/${userWebsites._id}/deployed`}>
                      <img alt="Deployed Iframe image" src={placeholderImage} />
                      <div>
                        <p>{userWebsites.title}</p>
                      </div>
                    </Link>
                  </UserWebsites>
                );
              } else {
                return (
                  <UserWebsites key={userWebsites._id}>
                    <h3 value={userWebsites._id}>
                      <MdClose
                        onClick={toggleDeleteModal}
                        value={userWebsites._id}
                      />
                    </h3>
                    <Link to={`/editor/${userWebsites._id}`}>
                      <img
                        alt="Currently editing indicating image"
                        src={placeholderImage}
                      />
                      <div>
                        <p>{userWebsites.title}</p>
                      </div>
                    </Link>
                  </UserWebsites>
                );
              }
            }
          } else if (userWebsites.isDeployed) {
            return (
              <UserWebsites key={userWebsites._id}>
                <h3 value={userWebsites._id}>
                  <MdClose
                    onClick={toggleDeleteModal}
                    value={userWebsites._id}
                  />
                </h3>
                <Link to={`/userwebsite/${userWebsites._id}/deployed`}>
                  <img alt="Deployed Iframe image" src={placeholderImage} />
                  <div>
                    <p>{userWebsites.title}</p>
                  </div>
                </Link>
              </UserWebsites>
            );
          } else {
            return (
              <UserWebsites key={userWebsites._id}>
                <h3 value={userWebsites._id}>
                  <MdClose
                    onClick={toggleDeleteModal}
                    value={userWebsites._id}
                  />
                </h3>
                <Link to={`/editor/${userWebsites._id}`}>
                  <img
                    alt="Currently editing indicating image"
                    src={placeholderImage}
                  />
                  <div>
                    <p>{userWebsites.title}</p>
                  </div>
                </Link>
              </UserWebsites>
            );
          }
        })}
    </UserContents>
  );
}

UserCollection.propTypes = {
  collections: PropTypes.array,
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

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 20px;
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
