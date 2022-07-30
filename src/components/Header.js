import PropTypes from "prop-types";
import styled from "styled-components";

function Header({ children }) {
  return <HeaderContainer>{children}</HeaderContainer>;
}

Header.propTypes = {
  children: PropTypes.any,
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  border-bottom: 2px solid rgba(210, 210, 210, 0.4);

  h1 {
    margin: 15px 0px 10px 20px;
    color: rgba(2, 62, 138, 0.96);
    font-size: 30px;
    font-weight: 800;
    line-height: 160%;
    letter-spacing: 0.15px;
    text-shadow: 4px 4px 11px rgba(0, 0, 0, 0.5);
  }

  img {
    width: 50px;
    height: 50px;
    margin: 15px 20px 10px 0px;
    border-radius: 50%;
  }
`;

export default Header;
