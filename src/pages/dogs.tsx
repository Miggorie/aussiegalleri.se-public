import DogCard from "../components/dogscomponent/DogCard";
import { DogGridContainer, DogCardContainer } from "./css/dogs-style";
import SearchAndFilter from "../components/searchandfilter/SearchAndFilter";
import useDogContext from "../hooks/use-dog-context";

function DogList() {
  const { dogs } = useDogContext();
  const renderedDogs = dogs.map((dog) => {
    return (
      <DogCardContainer key={dog.dogID}>
        <DogCard
          standLeft={dog.standLeft}
          standRight={dog.standRight}
          headShot={dog.headShot}
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
