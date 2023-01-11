import { useState, useEffect } from "react";
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
import { Dog } from "../components/Interfaces";
import GetLitterMates from "../components/getlittercomponents/GetLitterMates";
import GetFather from "../components/getfathercomponents/GetFather";

const baseUrl = "http://aussiegalleri.se/images/";

function SingleDog() {
  const { name } = useParams();
  const { fetchData, dogs } = useDogContext();
  const [currentDog, setCurrentDog] = useState<Dog | null | undefined>(null);

  useEffect(() => {
    async function fetchSingleDog() {
      await fetchData();
      const currentDog = dogs.find((dog) => dog.url === name);
      setCurrentDog(currentDog ? currentDog : null);
    }
    fetchSingleDog();
  }, [name]);

  return (
    <div>
      {currentDog ? (
        <>
          <Container>
            <Image
              src={baseUrl + currentDog.date + "/" + currentDog.headShot}
            />
            <TextContainer>
              <p>Name: {currentDog.name}</p>
              <p>Born: {currentDog.dogID}</p>
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
            <GetFather currentDog={currentDog} />
            <GetLitterMates currentDog={currentDog} />
            <Line />
          </Container>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default SingleDog;
