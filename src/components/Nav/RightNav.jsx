import { useState } from "react";
import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;

    a {
      color: var(--color-1);
      font-size: 1.2rem;
      font-weight: bold;

      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    flex-flow: column nowrap;
    background: var(--color-2);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 8rem;
    transition: transform 0.3s ease-in-out;

    li {
      a {
        font-size: 2rem;
        color: var(--color-8);
      }
    }
  }
`;

export const RightNav = ({ open, closeMobileMenu }) => {
  return (
    <Ul open={open}>
      <li onClick={() => open && closeMobileMenu()}>
        <a href="/">Início</a>
      </li>
      <li onClick={() => open && closeMobileMenu()}>
        <a href="/#about">Sobre</a>
      </li>
      <li onClick={() => open && closeMobileMenu()}>
        <a href="/#product">Serviços</a>
      </li>
      <li onClick={() => open && closeMobileMenu()}>
        <a href="/#contact">Contato</a>
      </li>
    </Ul>
  );
};
