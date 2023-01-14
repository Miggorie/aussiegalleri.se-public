import React, { useEffect, useState } from "react";
import { Dog } from "../Interfaces";
import OffspringCard from "./OffspringCard";

interface Props {
  currentDog: Dog;
}

const GetLitterMates: React.FC<Props> = ({ currentDog }) => {
  const [offspring, setOffspring] = useState([]);
  const currentUrl =
    "http://aussiegalleri.se/api/singledog/getoffspring.php?url=" +
    currentDog.url;

  useEffect(() => {
    async function fetchOffspring() {
      try {
        const response = await fetch(currentUrl);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
        setOffspring(data.offspring);
      } catch (error) {
        console.error(error);
      }
    }
    fetchOffspring();
  }, []);

  return (
    <div>
      <h2>Helsyskon</h2>
      {offspring?.map((offspring: Dog) => (
        <OffspringCard
          key={offspring.dogID}
          standLeft={offspring.standLeft}
          url={offspring.url}
          name={offspring.name}
          date={offspring.date}
        />
      ))}
    </div>
  );
};

export default GetLitterMates;
