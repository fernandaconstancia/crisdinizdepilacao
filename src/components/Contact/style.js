import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  color: var(--color-2);

  @media (min-width: 768px) {
    padding: 0 9rem;
  }

  @media (min-width: 1300px) {
    padding: 0 15rem;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
      font-size: 3rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 1rem;

  p {
    margin-bottom: 1.2rem;

    @media (min-width: 1024px) {
      font-size: 2.3rem;
      margin-bottom: 2rem;
    }
  }

  button {
    width: 100%;
    padding: 10px;
    margin-bottom: 1.6rem;

    font-size: 1.3rem;
    border-radius: 8px;
    background: var(--color-1);

    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }

    @media (min-width: 1024px) {
      font-size: 2.5rem;
    }

    a {
      color: var(--color-8);
    }
  }
`;

export const BoxSocial = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    width: 20%;
    color: var(--color-1);

    svg {
      font-size: 1.5rem;

      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }

      @media (min-width: 1024px) {
        font-size: 2.8rem;
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;

  text-align: center;

  color: var(--color-1);

  div {
    width: 100%;
    height: 1px;
    margin-bottom: 15px;

    background: var(--color-1);
    opacity: 0.5;
  }

  p {
    a {
      color: var(--color-1);
    }
  }
`;
