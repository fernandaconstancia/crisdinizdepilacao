import Cris from "../../assets/cris.svg";
import { Burger } from "./Burguer";

import styled from "styled-components";

export const Nav = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  padding: 1rem 1.5rem;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-7);

  a {
    img {
      width: 100%;
    }
  }
`;

export const NavBar = () => {
  return (
    <Nav>
      <a href="#">
        <img src={Cris} alt="Logo" />
      </a>
      <Burger />
    </Nav>
  );
};
