import { Dog } from "../pages/dogs";
import { Container, Img, Name } from "./css/dog-card";
import { useNavigate } from "react-router-dom";

// const handleClick = () => {
//   const navigate = useNavigate();
//   navigate("/dog");
// };

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
