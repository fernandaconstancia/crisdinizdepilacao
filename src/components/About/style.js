import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* padding: 0 9rem; */

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

export const BoxPerfil = styled.div`
  padding: 0 20px;
  width: 100%;

  @media (min-width: 900px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  img {
    width: 100%;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      margin-right: 2rem;
      max-width: 350px;

      &:hover {
        transform: scale(1.03);
        transition: 1s ease-out;
      }
    }
  }

  p {
    text-align: justify;
    line-height: 1.5;
    margin-bottom: 1rem;
    font-weight: 500;
    max-width: 500px;
  }
`;

export const Resume = styled.ul`
  width: 100%;
  padding: 0 20px;
  margin-bottom: 2rem;

  text-align: justify;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-evenly;
    align-items: baseline;
    margin-bottom: 2rem;
  }

  li {
    margin-bottom: 0.9rem;
    font-size: 1rem;

    @media (min-width: 768px) {
      max-width: 150px;
    }

    @media (min-width: 1200px) {
      max-width: 200px;
    }

    img {
      padding-right: 5px;

      &:hover {
        transform: scale(1.19);
        transition: 1s ease-out;
      }
    }
  }
`;
