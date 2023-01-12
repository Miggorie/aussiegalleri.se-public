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
  );
};

export default GetLitterMates;
