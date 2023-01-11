import React, { useEffect, useRef } from "react";
import { Dog } from "../Interfaces";
import LittermateCard from "./LittermateCard";

interface Props {
  currentDog: Dog;
}

const GetLitterMates: React.FC<Props> = ({ currentDog }) => {
  const baseUrl =
    "http://aussiegalleri.se/images/thumbnails/" + currentDog.date + "/";
  const litter = useRef([]);
  const currentUrl =
    "http://aussiegalleri.se/api/singledog/getlittermates.php?url=" +
    currentDog.url;

  useEffect(() => {
    async function fetchLittermates() {
      try {
        const response = await fetch(currentUrl);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data.littermates);
        litter.current = data.littermates;
      } catch (error) {
        console.error(error);
      }
    }
    fetchLittermates();
  }, [currentDog.dogID]);

  if (!currentDog.litterID) {
    return <></>;
  }

  const renderedDogs =
    litter.current &&
    litter.current.map((littermate: Dog) => {
      return (
        <div key={littermate.dogID}>
          <LittermateCard
            standLeft={littermate.standLeft}
            standRight={littermate.standRight}
            headShot={littermate.headShot}
            url={littermate.url}
            name={littermate.name}
            dogID={littermate.dogID}
            date={littermate.date}
          />
        </div>
      );
    });

  return <div>{renderedDogs}</div>;
};

export default GetLitterMates;
