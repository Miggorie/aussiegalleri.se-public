import { Container, Img, Name } from "./css/dog-card";
import useDogContext from "../hooks/use-dog-context";
import { Dog } from "../pages/dogs";
// import { useNavigate } from "react-router-dom";

// const handleClick = () => {
//   const navigate = useNavigate();
//   navigate("/dog");
// };

function DogCardItem(dog: Dog) {
  const { dogs } = useDogContext();
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
