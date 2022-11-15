import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 5rem;
  padding: 1rem 3rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-7);

  a {
    color: var(--color-1);
  }

  img {
    width: 100%;
  }
`;

export const Nav = styled.div`
  margin-left: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 0.9rem;
    color: var(--color-1);
    padding: 0 5px;
    font-weight: bold;
    border-bottom: 4px solid transparent;

    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }

    @media (min-width: 768px) {
      padding: 0 10px;
      font-size: 1.2rem;
    }
  }
`;
