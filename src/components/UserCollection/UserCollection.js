import styled from "styled-components";
import placeholderImage from "../../assets/placeholder.png";

function UserCollection({ collections }) {
  return (
    <UserContents>
      {collections &&
        collections.map((userWebsites, idx) => (
          <UserWebsites key={idx}>
            <img src={placeholderImage} />
            <div>
              <p>{userWebsites.title}</p>
            </div>
          </UserWebsites>
        ))}
    </UserContents>
  );
}

const UserContents = styled.div`
  background-color: rgb(249, 249, 249);
  display: flex;
  justify-content: center;
  height: 84vh;
  overflow-y: scroll;
  flex-wrap: wrap;
`;

const UserWebsites = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  margin: 40px 50px 30px 30px;
  background-color: white;
  width: 300px;
  height: 220px;
  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  div {
    width: 100%;
  }

  img {
    border-radius: 10px 10px 0px 0px;
    width: 300px;
    height: 150px;
  }

  p {
    font-size: 20px;
    margin: 0px 5px;
    text-align: center;
    padding-bottom: 23px;
  }

  :hover {
    opacity: 0.6;
  }
`;

export default UserCollection;
