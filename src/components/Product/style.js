import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 9rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  color: var(--color-2);

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;

    @media (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }
`;

export const BoxProduct = styled.section`
  width: 100%;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 2rem;
  }

  div {
    width: 100%;
    max-width: 300px;
    padding: 10px;

    img {
      width: 100%;
      max-width: 200px;
      margin-bottom: 1rem;

      &:hover {
        box-shadow: 3px 5px 8px var(--color-3);
        border-radius: 100%;
      }

      @media (min-width: 768px) {
        margin-right: 2rem;
      }
    }

    h3 {
      text-align: center;
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.8rem;
      text-align: justify;
      line-height: 1.5;
      margin-bottom: 1rem;
      font-weight: 500;
      max-width: 500px;
    }
  }
`;
