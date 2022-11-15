import styled from "styled-components";
import img from "../../assets/image1.svg";

export const Container = styled.div`
  /* background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain; */

  width: 100%;
  /* height: 40vh; */
  height: 100vh;

  /* max-height: 9rem; */
  margin-bottom: 2rem;
  background: #fff1e3;

  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 20rem; */

  @media (min-width: 768px) {
    justify-content: space-evenly;
    height: 100vh;
  }

  /* @media (min-width: 600px) {
    height: 50rem;
  }

  @media (min-width: 1400px) {
    height: 100rem;
  } */

  img {
    display: none;

    width: 100%;
    max-width: 500px;

    border-radius: 100%;

    @media (min-width: 768px) {
      display: flex;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  /* height: 70%;
  max-width: 50%; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--color-2);

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;

    /* @media (min-width: 860px) {
      font-size: 1.5rem;
    } */

    /* @media (min-width: 1200px) {
      font-size: 3rem;
    } */

    /* @media (min-width: 1400px) {
      font-size: 4rem;
      margin-bottom: 1.5rem;
    } */
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;

    /* @media (min-width: 860px) {
      font-size: 1rem;
    } */

    /* @media (min-width: 1200px) {
      font-size: 2rem;
    } */

    /* @media (min-width: 1400px) {
      font-size: 2.7rem;
      margin-bottom: 1rem;
    } */
  }

  span {
    font-size: 1.3rem;
    margin-bottom: 2rem;

    /* @media (min-width: 860px) {
      font-size: 1rem;
    } */

    /* @media (min-width: 1200px) {
      font-size: 2rem;
    } */

    /* @media (min-width: 1400px) {
      font-size: 2.7rem;
      margin-bottom: 2.5rem;
    } */
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

    /* @media (min-width: 860px) {
      font-size: 1rem;
    } */

    /* @media (min-width: 1200px) {
      font-size: 2rem;
    } */

    /* @media (min-width: 1400px) {
      font-size: 3rem;
    } */
  }
`;
