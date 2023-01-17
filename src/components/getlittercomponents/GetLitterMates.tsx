import React, { useEffect, useState } from "react";
import { Dog } from "../Interfaces";

interface Props {
  currentDog: Dog;
}

const GetLitterMates: React.FC<Props> = ({ currentDog }) => {
  const [littermate, setLittermate] = useState([]);
  const currentUrl =
    "http://aussiegalleri.se/api/singledog/getlittermates.php?url=" +
    currentDog.url;
  const baseUrl = "http://aussiegalleri.se/images/thumbnails/";

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
      <h2 className="inline-block mt-10 px-3 py-px text-m font-semibold tracking-wider text-stone-900 uppercase rounded-full bg-teal-accent-400">
        Kullsyskon
      </h2>
      <div className="bg-white">
        <h2 className="sr-only">Hundar</h2>
        <div className="grid grid-cols-1 gap-y-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-4">
          {littermate?.map((littermate: Dog) => (
            <a
              key={littermate.dogID}
              href={`/dogs/${littermate.url}`}
              className="group"
            >
              <div className="aspect-ratio: auto w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-ratio:">
                <img
                  src={baseUrl + littermate.date + "/" + littermate.standLeft}
                  alt="hund"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{littermate.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetLitterMates;
