import { Container, Img, Name } from "./DogCardStyles";
import { Dog } from "../Interfaces";
import { Link } from "react-router-dom";

function DogCardItem(dog: Dog) {
  const baseUrl = "http://aussiegalleri.se/images/thumbnails/" + dog.date + "/";
  return (
    <Container>
      <section>
        <Link to={`/dogs/${dog.url}`}>
          <Img src={baseUrl + dog.standLeft} alt="hund" />
          <Name>{dog.name}</Name>
        </Link>
      </section>
    </Container>
  );
}

export default DogCardItem;
