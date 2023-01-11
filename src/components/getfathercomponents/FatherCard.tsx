import { Container, Img, Name } from "../dogscomponent/DogCardStyles";
import { Dog } from "../Interfaces";
import { Link } from "react-router-dom";

function DogCardItem(father: Dog) {
  const baseUrl =
    "http://aussiegalleri.se/images/thumbnails/" + father.date + "/";
  return (
    <Container>
      <section>
        <Link to={`/dogs/${father.url}`}>
          <Img src={baseUrl + father.standLeft} alt="hund" />
          <Name>{father.name}</Name>
        </Link>
      </section>
    </Container>
  );
}

export default DogCardItem;
