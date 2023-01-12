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
import GetParentsInfo from "../components/getparentsinfo/GetParentsInfo";
import GetFather from "../components/getfathercomponents/GetFather";
import GetMother from "../components/getmothercomponents/GetMother";

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
  }, []);

  return (
    <div>
      {currentDog ? (
        <>
          <Container>
            <Image
              src={baseUrl + currentDog.date + "/" + currentDog.headShot}
            />
            <TextContainer>
              <h2>{currentDog.name}</h2>
              <p>{currentDog.gender}</p>
              <GetParentsInfo
                key={currentDog.litterID}
                currentDog={currentDog}
              />
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
