import { Dog } from "../pages/dogs";
import styled from "styled-components";

function DogCardItem(dog: Dog) {
  const baseUrl = "http://aussiegalleri.se/images/thumbnails/" + dog.date + "/";
  return (
    <Container>
      <section>
        <img src={baseUrl + dog.standLeft} alt="hund" />
        <Name>{dog.name}</Name>
      </section>
    </Container>
  );
}

export default DogCardItem;

const Container = styled.div`
  padding: 0.25rem;
  margin: 0.3 rem;
`;

const Name = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
`;
