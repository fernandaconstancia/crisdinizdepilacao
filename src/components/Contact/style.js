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

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;

    @media (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 1rem;

  p {
    margin-bottom: 1.2rem;
  }

  button {
    width: 100%;
    padding: 10px;
    margin-bottom: 1.6rem;

    font-size: 1.3rem;
    border-radius: 8px;
    background: var(--color-1);
    color: var(--color-8);

    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`;

export const BoxSocial = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20%;
    font-size: 1.5rem;
  }
`;
