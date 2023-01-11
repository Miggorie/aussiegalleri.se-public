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
import GetParentsInfo from "../components/getparentsinfo/GetParentsInfo";

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

  // if (currentDog && currentDog.isBitch === "1") {
  //   currentDog.isBitch = "Hane";
  // } else if (currentDog && currentDog.isBitch !== "1") {
  //   currentDog.isBitch = "Tik";
  // } else {
  //   console.log("inget kön hittat");
  // }

  return (
    <div>
      {currentDog ? (
        <>
          <Container>
            <Image
              src={baseUrl + currentDog.date + "/" + currentDog.headShot}
            />
            <TextContainer>
              <h3>{currentDog.name}</h3>
              <p>{currentDog.gender}</p>
              <GetParentsInfo currentDog={currentDog} />
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
