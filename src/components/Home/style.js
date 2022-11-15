import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-bottom: 2rem;
  background: #fff1e3;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: space-evenly;
  }

  img {
    display: none;

    width: 100%;
    max-width: 700px;

    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--color-2);

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }

  button {
    width: 100%;

    font-size: 1.3rem;
    padding: 10px;
    border-radius: 8px;
    background: var(--color-1);
    color: var(--color-8);

    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }

    a {
      color: var(--color-8);
    }
  }
`;
