import styled from "styled-components";

export const DogGridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 992px) {
    justify-content: center;
  }
`;

export const DogCardContainer = styled.div`
  max-width: 992px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1080px) {
    body {
      max-width: 1080px;
    }

  @media (min-width: 900px) {
    width: 25%;
  }
  @media (max-width: 900px) {
    width: 33.33%;
  }
  @media (max-width: 680px) {
    width: 50%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const DropdownContainer = styled.div`
  width: 100px;
`;

export const SearchBarContainer = styled.div`
  width: 100px;
`;

export const FilterSection = styled.div`
  display: flex;
  align-items: center;
`;
