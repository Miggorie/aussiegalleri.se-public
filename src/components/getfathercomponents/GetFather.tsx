import React, { useEffect, useRef } from "react";
import { Dog } from "../Interfaces";
import FatherCard from "./FatherCard";

interface Props {
  currentDog: Dog;
}

const GetFather: React.FC<Props> = ({ currentDog }) => {
  const baseUrl =
    "http://aussiegalleri.se/images/thumbnails/" + currentDog.date + "/";
  const fatherDog = useRef([]);
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
        fatherDog.current = data.father;
      } catch (error) {
        console.error(error);
      }
    }
    fetchFather();
  }, [currentDog.dogID]);

  if (!currentDog.litterID) {
    return <></>;
  }

  const renderedDogs =
    fatherDog.current &&
    fatherDog.current.map((father: Dog) => {
      return (
        <div key={father.dogID}>
          <FatherCard
            standLeft={father.standLeft}
            standRight={father.standRight}
            headShot={father.headShot}
            url={father.url}
            name={father.name}
            dogID={father.dogID}
            date={father.date}
          />
        </div>
      );
    });

  return <div>{renderedDogs}</div>;
};

export default GetFather;
