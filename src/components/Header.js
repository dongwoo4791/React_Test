import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuStyle = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 30px;
  list-style-type: none;
  font-weight: 1000;
`;

const Header = () => {
  return (
    <div>
      <MenuStyle>
        <li>
          <Link to="/Movie">영화 등록</Link>
        </li>
        <li>
          <Link to="/MovieList">영화 목록</Link>
        </li>
      </MenuStyle>
    </div>
  );
};

export default Header;
