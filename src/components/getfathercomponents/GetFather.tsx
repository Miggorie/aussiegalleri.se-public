import React, { useEffect, useState } from "react";
import { Dog } from "../Interfaces";
import FatherCard from "./FatherCard";

interface Props {
  currentDog: Dog;
}

const GetFather: React.FC<Props> = ({ currentDog }) => {
  const [father, setFather] = useState([]);
  const currentUrl =
    "http://aussiegalleri.se/api/singledog/getfather.php?url=" + currentDog.url;

  useEffect(() => {
    async function fetchFather() {
      try {
        const response = await fetch(currentUrl);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
        setFather(data.father);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFather();
  }, []);

  return (
    <div>
      {father?.map((father: Dog) => (
        <FatherCard
          key={father.dogID}
          standLeft={father.standLeft}
          standRight={father.standRight}
          headShot={father.headShot}
          url={father.url}
          name={father.name}
          dogID={father.dogID}
          date={father.date}
        />
      ))}
    </div>
  );
};

export default GetFather;
