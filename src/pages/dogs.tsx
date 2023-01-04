import DogCard from "../components/DogCard";
import { DogGridContainer, DogCardContainer } from "./css/dogsStyle";
import SearchAndFilter from "../components/SearchAndFilter";

export interface Dog {
  dogID: string;
  name: string;
  standLeft: string;
  url: string;
  date: string;
}

function DogList({ dogs }: { dogs: Array<Dog> }) {
  console.log(dogs);
  const renderedDogs = dogs.map((dog) => {
    return (
      <DogCardContainer key={dog.dogID}>
        <DogCard
          standLeft={dog.standLeft}
          url={dog.url}
          name={dog.name}
          dogID={dog.dogID}
          date={dog.date}
        />
      </DogCardContainer>
    );
  });

  return (
    <div>
      <SearchAndFilter />
      <DogGridContainer>{renderedDogs}</DogGridContainer>
    </div>
  );
}

export default DogList;
