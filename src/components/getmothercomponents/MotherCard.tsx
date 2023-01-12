import { Container, Img, Name } from "../dogscomponent/DogCardStyles";
import { Dog } from "../Interfaces";
import { Link } from "react-router-dom";

function MotherCardItem(mother: Dog) {
  const baseUrl =
    "http://aussiegalleri.se/images/thumbnails/" + mother.date + "/";
  return (
    <Container>
      <section>
        <Link to={`/dogs/${mother.url}`}>
          <Img src={baseUrl + mother.standLeft} alt="hund" />
          <Name>{mother.name}</Name>
        </Link>
      </section>
    </Container>
  );
}

export default MotherCardItem;
