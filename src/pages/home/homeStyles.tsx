import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1rem;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 1000px) {
    width: 80%;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const DogsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) and (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 700px) and (min-width: 50px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const DogCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;

  img {
    width: 200px;
    height: auto;
    transition: all 0.2s ease-in-out;

    :hover {
      transform: scale(1.2);
    }
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
`;
