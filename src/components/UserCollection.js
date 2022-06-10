import styled from "styled-components";

import emptyCollection from "../assets/emptyCollection.png";
import placeholderImage from "../assets/placeholder.png";

function UserCollection({ collections }) {
  return (
    <UserContents>
      {collections ? (
        collections.map((userWebsites, idx) => (
          <UserWebsites key={idx}>
            <img src={placeholderImage} />
            <div>
              <p>{userWebsites.title}</p>
            </div>
          </UserWebsites>
        ))
      ) : (
        <EmptyCollectionContainer>
          <img src={emptyCollection} />
          <h1>생성된 웹사이트가 없습니다.</h1>
        </EmptyCollectionContainer>
      )}
    </UserContents>
  );
}

const UserContents = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 84vh;
  overflow-y: scroll;
  background-color: rgb(249, 249, 249);
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

  div {
    width: 100%;
  }

  img {
    height: 150px;
    width: 300px;
    border-radius: 10px 10px 0px 0px;
  }

  p {
    margin: 0px 5px;
    padding-bottom: 23px;
    font-size: 20px;
    text-align: center;
  }

  :hover {
    opacity: 0.6;
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
