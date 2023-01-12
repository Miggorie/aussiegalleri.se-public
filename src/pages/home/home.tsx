import { useRef, useEffect } from "react";
import { Container, DogsContainer, DogCard } from "./homeStyles";

import { Dog } from "../../components/Interfaces";

const baseUrl = "http://aussiegalleri.se/images/thumbnails/";

async function fetchLatestDogs() {
  try {
    const response = await fetch(
      "http://aussiegalleri.se/api/search/latestdogs.php"
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const Home = () => {
  const latestDogs = useRef([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchLatestDogs();
      latestDogs.current = data.dogs;
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <div>Bild här</div>
      <DogsContainer>
        {latestDogs.current &&
          latestDogs.current.map((dog: Dog) => (
            <DogCard key={dog.dogID}>
              <img src={baseUrl + dog.date + "/" + dog.standLeft} />
              <p>{dog.name}</p>
            </DogCard>
          ))}
      </DogsContainer>
    </Container>
  );
};

export default Home;
