import styled from "styled-components";

export const DogsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -0.5rem;

  /* 4 dogs per row on medium and large screens */
  @media (min-width: 768px) {
    & > div {
      flex: 1 0 calc(25% - 1rem);
      margin: 0.5rem;
    }
  }

  /* 3 dogs per row on small screens */
  @media (max-width: 767px) {
    & > div {
      flex: 1 0 calc(33.33% - 1rem);
      margin: 0.5rem;
    }
  }

  /* 2 dogs per row on extra small screens */
  @media (max-width: 576px) {
    & > div {
      flex: 1 0 calc(50% - 1rem);
      margin: 0.5rem;
    }
  }

  /* 1 dog per row on mobile screens */
  @media (max-width: 375px) {
    & > div {
      flex: 1 0 100%;
      margin: 0.5rem;
    }
  }
`;
