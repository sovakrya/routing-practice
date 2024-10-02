import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderBox = styled.header`
  background-color: #9ba5dfac;
  height: 60px;
  display: flex;
`;

const NavBox = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 18px;
`;

export default function Menu() {
  return (
    <HeaderBox>
      <NavBox>
        <NavLink to="/" exact>
          Список товаров
        </NavLink>
        <NavLink to="/product">Товар</NavLink>
        <NavLink to="/authorized">Прикол</NavLink>
      </NavBox>
    </HeaderBox>
  );
}
