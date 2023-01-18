import React, { useEffect, useState } from "react";
import { Dog } from "../Interfaces";

interface Props {
  currentDog: Dog;
}

const GetOffspring: React.FC<Props> = ({ currentDog }) => {
  const [offspring, setOffspring] = useState([]);
  const currentUrl =
    "http://aussiegalleri.se/api/singledog/getoffsprings.php?url=" +
    currentDog.url;
  const baseUrl = "http://aussiegalleri.se/images/thumbnails/";

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
      {offspring && offspring.length > 0 ? (
        <>
          <h2 className="inline-block mt-10 px-3 py-px text-m font-semibold tracking-wider text-stone-900 uppercase rounded-full bg-teal-accent-400">
            Avkommor
          </h2>
          <div className="bg-white">
            <h2 className="sr-only">Hundar</h2>
            <div className="grid grid-cols-1 gap-y-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-4">
              {offspring?.map((offspring: Dog) => (
                <a
                  key={offspring.dogID}
                  href={`/dogs/${offspring.url}`}
                  className="group"
                >
                  <div className="aspect-ratio: auto w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-ratio:">
                    <img
                      src={baseUrl + offspring.date + "/" + offspring.standLeft}
                      alt="hund"
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 mb-10 text-s text-gray-700">
                    {offspring.name}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default GetOffspring;
