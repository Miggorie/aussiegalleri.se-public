import { Dog } from "../pages/dogs";
import styled from "styled-components";

function DogCardItem(dog: Dog) {
  const baseUrl = "http://aussiegalleri.se/images/thumbnails/" + dog.date + "/";
  return (
    <Container>
      <section>
        <Img src={baseUrl + dog.standLeft} alt="hund" />
        <Name>{dog.name}</Name>
      </section>
    </Container>
  );
}

export default DogCardItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  margin-top: 2rem;
  width: 250px;
`;

const Name = styled.h5`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 220px;

  @media (min-width: 550px) and (max-width: 680px) {
    width: 250px;
  }

  @media (max-width: 450px) {
    width: 250px;
  }
`;
