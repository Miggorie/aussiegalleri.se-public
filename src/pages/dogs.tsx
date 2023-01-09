import DogCard from "../components/DogCard";
import { DogGridContainer, DogCardContainer } from "./css/dogsStyle";
import SearchAndFilter from "../components/SearchAndFilter";
import useDogContext from "../hooks/use-dog-context";

export interface Dog {
  dogID: string;
  name: string;
  standLeft: string;
  url: string;
  date: string;
}

function DogList() {
  const { dogs } = useDogContext();
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
