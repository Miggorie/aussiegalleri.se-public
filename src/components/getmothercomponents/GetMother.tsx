import React, { useEffect, useState } from "react";
import { Dog } from "../Interfaces";
import MotherCardItem from "./MotherCard";

interface Props {
  currentDog: Dog;
}

const GetMother: React.FC<Props> = ({ currentDog }) => {
  const [mother, setMother] = useState([]);
  const currentUrl =
    "http://aussiegalleri.se/api/singledog/getmother.php?url=" + currentDog.url;

  useEffect(() => {
    async function fetchMother() {
      try {
        const response = await fetch(currentUrl);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
        setMother(data.mother);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMother();
  }, []);

  return (
    <div>
      {mother?.map((mother: Dog) => (
        <MotherCardItem
          key={mother.dogID}
          standLeft={mother.standLeft}
          standRight={mother.standRight}
          headShot={mother.headShot}
          url={mother.url}
          name={mother.name}
          dogID={mother.dogID}
          date={mother.date}
        />
      ))}
    </div>
  );
};

export default GetMother;
