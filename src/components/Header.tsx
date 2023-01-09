import React from "react";
import styled from "styled-components";

const AppHeader = styled.header`
  background-color: #75866d;
  color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Nav = styled.nav`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    color: #ccc;
  }

  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

function Header() {
  return (
    <AppHeader>
      <h1>Aussiegalleriet</h1>
      <Nav>
        <NavItem href="#">Hem</NavItem>
        <NavItem href="#">Aussiegalleriet</NavItem>
        <NavItem href="#">Faq</NavItem>
        <NavItem href="#">Om oss</NavItem>
        <NavItem href="#">Kontakt</NavItem>
      </Nav>
    </AppHeader>
  );
}

export default Header;
