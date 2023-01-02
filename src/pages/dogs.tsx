import { useState, useEffect } from "react";
import DogCard from "../components/DogCard";

function Dogs(props: any) {
  const { dogs } = props;
  return (
    <main>
      <div>
        {dogs.map((dog: any) => (
          <DogCard key={dog.dogID} dog={dog} />
        ))}
      </div>
    </main>
  );
}
export default Dogs;
