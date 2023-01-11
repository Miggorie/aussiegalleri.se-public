import { Container, Img, Name } from "../css/dog-card";
import { Dog } from "../Interfaces";
import { Link } from "react-router-dom";

function DogCardItem(littermate: Dog) {
  const baseUrl =
    "http://aussiegalleri.se/images/thumbnails/" + littermate.date + "/";
  return (
    <Container>
      <section>
        <Link to={`/dogs/${littermate.url}`}>
          <Img src={baseUrl + littermate.standLeft} alt="hund" />
          <Name>{littermate.name}</Name>
        </Link>
      </section>
    </Container>
  );
}

export default DogCardItem;
