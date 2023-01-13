import DogCard from "../components/dogscomponent/DogCard";
import { DogGridContainer, DogCardContainer } from "./css/dogs-style";
import useDogContext from "../hooks/use-dog-context";
import { Dog } from "../components/Interfaces";
import SearchBar from "../components/tailwind/searchandfilter/SearchBar";

function DogList() {
  const { dogs } = useDogContext();

  return (
    <div>
      <SearchBar />
      <DogGridContainer>
        {dogs?.map((dog: Dog) => (
          <DogCardContainer>
            <DogCard
              key={dog.dogID}
              standLeft={dog.standLeft}
              standRight={dog.standRight}
              headShot={dog.headShot}
              url={dog.url}
              name={dog.name}
              dogID={dog.dogID}
              date={dog.date}
              gender={dog.gender}
            />
          </DogCardContainer>
        ))}
      </DogGridContainer>
    </div>
  );
}

export default DogList;
