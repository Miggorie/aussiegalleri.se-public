import React, { useEffect, useState } from "react";
import { Dog } from "../Interfaces";
import LittermateCard from "./LittermateCard";

interface Props {
  currentDog: Dog;
}

const GetLitterMates: React.FC<Props> = ({ currentDog }) => {
  const [littermate, setLittermate] = useState([]);
  const currentUrl =
    "http://aussiegalleri.se/api/singledog/getlittermates.php?url=" +
    currentDog.url;

  useEffect(() => {
    async function fetchLitterMate() {
      try {
        const response = await fetch(currentUrl);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setLittermate(data.littermates);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLitterMate();
  }, []);

  return (
    <div>
      <h2>Helsyskon</h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {littermate?.map((littermate: Dog) => (
          <LittermateCard
            key={littermate.dogID}
            standLeft={littermate.standLeft}
            url={littermate.url}
            name={littermate.name}
            date={littermate.date}
          />
        ))}
      </div>
    </div>
  );
};

export default GetLitterMates;
