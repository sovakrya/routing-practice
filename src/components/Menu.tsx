import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./assets/styles/Menu.css";

const HeaderBox = styled.header`
  background-color: #9ba5dfac;
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 18px;
  align-items: center;
`;

const NavBox = styled.nav`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export default function Menu() {
  return (
    <HeaderBox>
      <NavBox>
        <NavLink to="/" activeClassName="active" className="link" exact>
          Главная
        </NavLink>
        <NavLink to="/products" activeClassName="active" className="link" exact>
          Список товаров
        </NavLink>
        <NavLink to="/authorized" activeClassName="active" className="link">
          Только для авторизованных пользователей
        </NavLink>
      </NavBox>
    </HeaderBox>
  );
}
