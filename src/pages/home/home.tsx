import { useState, useEffect } from "react";
import { Container, DogsContainer, DogCard } from "./homeStyles";
import { Link } from "react-router-dom";

import { Dog } from "../../components/Interfaces";

function Home() {
  const [latestDogs, setLatestDogs] = useState([]);
  const baseUrl = "http://aussiegalleri.se/images/thumbnails/";

  useEffect(() => {
    async function fetchLatestDogs() {
      try {
        const response = await fetch(
          "http://aussiegalleri.se/api/search/latestdogs.php"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setLatestDogs(data.dogs);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
    fetchLatestDogs();
  }, []);

  return (
    <Container>
      <div>Bild här</div>
      <DogsContainer>
        {latestDogs.map((dog: Dog) => (
          <Link to={`/dogs/${dog.url}`}>
            <DogCard>
              <img src={baseUrl + dog.date + "/" + dog.standLeft} />
              <p>{dog.name}</p>
            </DogCard>
          </Link>
        ))}
      </DogsContainer>
    </Container>
  );
}

export default Home;
