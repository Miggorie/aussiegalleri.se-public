import React, { useEffect, useRef } from "react";
import { Dog } from "../Interfaces";
import { Litter } from "../Interfaces";
import ParentInfoCard from "./ParentInfoCard";

interface Props {
  currentDog: Dog;
}

const GetParentsInfo: React.FC<Props> = ({ currentDog }) => {
  const parentInfo = useRef([]);
  const currentUrl =
    "http://aussiegalleri.se/api/singledog/litterinfo.php?url=" +
    currentDog.url;

  useEffect(() => {
    async function fetchParentsInfo() {
      try {
        const response = await fetch(currentUrl);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log(data);
        parentInfo.current = data.parents;
      } catch (error) {
        console.error(error);
      }
    }
    fetchParentsInfo();
  }, [currentDog.dogID]);

  if (!currentDog.litterID) {
    return <></>;
  }

  const renderedDogs =
    parentInfo.current &&
    parentInfo.current.map((parents: Litter) => {
      return (
        <div key={parents.litterID}>
          <ParentInfoCard
            dam={parents.dam}
            sire={parents.sire}
            born={parents.born}
            litterID={parents.litterID}
          ></ParentInfoCard>
        </div>
      );
    });

  return <div>{renderedDogs}</div>;
};

export default GetParentsInfo;
