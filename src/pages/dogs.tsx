import DogCard from "../components/DogCard";

interface Dog {
  dogID: number;
  name: string;
}

function DogList({ dogs }: { dogs: Array<Dog> }) {
  console.log(dogs);
  const renderedImages = dogs.map((dog) => {
    return <DogCard key={dog.dogID} image={dog} />;
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default DogList;
