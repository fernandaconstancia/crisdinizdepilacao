import { useState } from "react";
import styled from "styled-components";
import { RightNav } from "./RightNav";

const NavBurguer = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 23px;
  right: 22px;

  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "var(--color-8)" : "var(--color-2)")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Burger = () => {
  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => setOpen(false);

  return (
    <>
      <NavBurguer open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </NavBurguer>
      <RightNav open={open} closeMobileMenu={closeMobileMenu} />
    </>
  );
};
