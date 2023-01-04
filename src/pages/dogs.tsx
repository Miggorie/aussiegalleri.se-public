import DogCard from "../components/DogCard";

export interface Dog {
  dogID: string;
  name: string;
  standLeft: string;
  url: string;
  date: string;
}

function DogList({ dogs }: { dogs: Array<Dog> }) {
  console.log(dogs);
  const renderedImages = dogs.map((dog) => {
    return (
      <DogCard
        key={dog.dogID}
        standLeft={dog.standLeft}
        url={dog.url}
        name={dog.name}
        dogID={dog.dogID}
        date={dog.date}
      />
    );
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default DogList;
