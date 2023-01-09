import styled from "styled-components";
import useDogContext from "../hooks/use-dog-context";

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

const Home: React.FC = () => {
  const { dogs } = useDogContext();
  const lastFourDogs = dogs.slice(-4);
  // const baseUrl = "http://aussiegalleri.se/images/thumbnails/" + dog.date + "/";

  return (
    <Container>
      <div>Bild här</div>
      <Button>Se hundarna</Button>
      <div>Senaste hundarna i galleriet</div>
      <Section>
        {/* {lastFourDogs.map((dog) => (
          <div key={dog.dogID}>
            <img src={baseUrl + dog.standLeft} alt="hund" />
            <h4>{dog.name}</h4>
          </div>
        ))} */}
      </Section>
    </Container>
  );
};

export default Home;
