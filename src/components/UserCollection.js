<<<<<<< HEAD
import PropTypes from "prop-types";
import styled from "styled-components";

=======
import { Link } from "react-router-dom";
import styled from "styled-components";

import emptyCollection from "../assets/emptyCollection.png";
>>>>>>> origin/main
import placeholderImage from "../assets/placeholder.png";

function UserCollection({ collections }) {
  return (
    <UserContents>
<<<<<<< HEAD
      {collections &&
        collections.map((userWebsites, idx) => (
          <UserWebsites key={idx}>
            <img src={placeholderImage} />
            <div>
              <p>{userWebsites.title}</p>
            </div>
          </UserWebsites>
        ))}
=======
      {collections.length ? (
        collections.map((userWebsites) => (
          <UserWebsites key={userWebsites._id}>
            <Link to={`/editor/${userWebsites._id}`}>
              <img src={placeholderImage} />
              <div>
                <p>{userWebsites.title}</p>
              </div>
            </Link>
          </UserWebsites>
        ))
      ) : (
        <EmptyCollectionContainer>
          <img src={emptyCollection} />
          <h1>생성된 웹사이트가 없습니다.</h1>
        </EmptyCollectionContainer>
      )}
>>>>>>> origin/main
    </UserContents>
  );
}

<<<<<<< HEAD
UserCollection.propTypes = {
  collections: PropTypes.array,
};

=======
>>>>>>> origin/main
const UserContents = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 84vh;
  overflow-y: scroll;
  background-color: rgb(249, 249, 249);
<<<<<<< HEAD
=======

  a {
    text-decoration: none;
  }
>>>>>>> origin/main
`;

const UserWebsites = styled.div`
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
  cursor: pointer;
<<<<<<< HEAD

  div {
    width: 100%;
=======
  transition: all 0.3s ease;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 20px;
>>>>>>> origin/main
  }

  img {
    height: 150px;
    width: 300px;
    border-radius: 10px 10px 0px 0px;
  }

  p {
    margin: 0px 5px;
<<<<<<< HEAD
    padding-bottom: 23px;
    font-size: 20px;
    text-align: center;
=======
    text-align: center;
    font-size: 20px;
    color: black;
>>>>>>> origin/main
  }

  :hover {
    opacity: 0.6;
<<<<<<< HEAD
=======
    transform: scale(1.1);
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
>>>>>>> origin/main
  }
`;

export default UserCollection;
