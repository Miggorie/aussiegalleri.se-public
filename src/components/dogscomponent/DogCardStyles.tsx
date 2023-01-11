import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  margin-top: 2rem;
  width: 250px;
`;

export const Name = styled.h5`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 220px;

  @media (min-width: 550px) and (max-width: 680px) {
    width: 250px;
  }

  @media (max-width: 450px) {
    width: 250px;
  }
`;
