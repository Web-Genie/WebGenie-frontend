import styled from "styled-components";

function Header({ children }) {
  return <HeaderContainer>{children}</HeaderContainer>;
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid rgba(210, 210, 210, 0.4);
  height: 8vh;

  h1 {
    font-weight: 800;
    font-size: 30px;
    line-height: 160%;
    letter-spacing: 0.15px;
    color: rgba(2, 62, 138, 0.96);
    margin: 15px 0px 10px 20px;
    text-shadow: 4px 4px 11px rgba(0, 0, 0, 0.5);
  }

  img {
    margin: 15px 25px 10px 0px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

export default Header;
