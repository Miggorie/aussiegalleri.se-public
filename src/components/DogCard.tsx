import { Container, Img, Name } from "./css/dog-card";
import useDogContext from "../hooks/use-dog-context";
import { Dog } from "../components/Interfaces";
import { Link } from "react-router-dom";

function DogCardItem(dog: Dog) {
  const { dogs } = useDogContext();
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
