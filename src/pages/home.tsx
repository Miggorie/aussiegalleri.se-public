import { useRef, useEffect } from "react";
import styled from "styled-components";
import { Dog } from "../components/Interfaces";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1rem;
`;

export const Button = styled.div`
  background-color: #75866d;
  width: 6rem;
  height: 0.5 rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1rem;
`;

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
      <Button>Se hundarna</Button>
      {latestDogs.current &&
        latestDogs.current.map((dog: Dog) => (
          <div key={dog.dogID}>
            <img src={baseUrl + dog.date + "/" + dog.standLeft} />
            <p>{dog.name}</p>
          </div>
        ))}
    </Container>
  );
};

export default Home;
