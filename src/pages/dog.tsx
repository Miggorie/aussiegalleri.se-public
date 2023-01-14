import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useDogContext from "../hooks/use-dog-context";
import {
  Container,
  Image,
  TextContainer,
  Title,
  Line,
  ImageContainer,
} from "./css/dog-style";
import GetLitterMates from "../components/getlittercomponents/GetLitterMates";
import GetParentsInfo from "../components/getparentsinfo/GetParentsInfo";
import GetFather from "../components/getfathercomponents/GetFather";
import GetMother from "../components/getmothercomponents/GetMother";
import GetOffspring from "../components/getoffspring/GetOffspring";

//base URL for the images, its used to add the curretDog in return-section.
const baseUrl = "http://aussiegalleri.se/images/";

const SingleDog = () => {
  const { name } = useParams();
  const { fetchData, dogs } = useDogContext();

  const currentDog = dogs.find((dog) => dog.url === name);

  useEffect(() => {
    fetchData();
  }, []);

  if (currentDog) {
    return (
      <div>
        <Container>
          <Image src={baseUrl + currentDog.date + "/" + currentDog.headShot} />
          <TextContainer>
            <h2>{currentDog.name}</h2>
            <p>{currentDog.gender}</p>
            <GetParentsInfo key={currentDog.litterID} currentDog={currentDog} />
            <p>
              Fotograferad den {currentDog.date} i {currentDog.place}
            </p>
          </TextContainer>
          <ImageContainer>
            <Image
              src={baseUrl + currentDog.date + "/" + currentDog.standRight}
            />
            <Image
              src={baseUrl + currentDog.date + "/" + currentDog.standLeft}
            />
          </ImageContainer>
          <Title>Släktingar i galleriet</Title>
          <h2>Föräldrar</h2>
          <GetFather key={currentDog.name} currentDog={currentDog} />
          <GetMother key={currentDog.date} currentDog={currentDog} />
          <GetLitterMates key={currentDog.dogID} currentDog={currentDog} />
          <GetOffspring key={currentDog.standRight} currentDog={currentDog} />
          <Line />
        </Container>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SingleDog;
