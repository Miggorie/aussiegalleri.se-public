import useDogContext from "../../hooks/use-dog-context";
import { Dog, FilterProps } from "../../components/Interfaces";
// import { useState } from "react";
// import SideBarSearch from "../components/tailwind/Sidebar";

const DogList: React.FC<{ filteredData: FilterProps[] }> = ({
  filteredData,
}) => {
  //Using the context to fetch all dogs from database
  const { dogs } = useDogContext();

  const filteredDogs = dogs.filter((dog) => {
    if (
      !dogs.length ||
      !filteredData.length ||
      !filteredData[0].options.length
    ) {
      console.log("här varetomt");
      return [];
    }

    let isChecked = false;
    filteredData[0].options.forEach((option) => {
      if (
        option.checked &&
        (option.value === "Tik" || option.value === "Tane") &&
        (dog.gender === "Tik" || dog.gender === "Hane")
      ) {
        console.log("här varefullt");
        isChecked = true;
      }
    });
    return isChecked;
  });

  // if (searchTerm !== "") {
  //   filteredDogs = dogs.filter((dog) =>
  //     dog.name?.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // }

  // if (filterTerm !== "") {
  //   console.log("hej");
  // }

  const baseUrl = "http://aussiegalleri.se/images/thumbnails/";

  return (
    <div>
      <div className="bg-white">
        <h2 className="sr-only">Hundar</h2>
        <div className="grid grid-cols-1 gap-y-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-4">
          {filteredDogs?.map((filteredDog: Dog) => (
            <a
              key={filteredDog.dogID}
              href={`/dogs/${filteredDog.url}`}
              className="group"
            >
              <div className="aspect-ratio: auto w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-ratio:">
                <img
                  src={baseUrl + filteredDog.date + "/" + filteredDog.standLeft}
                  alt="hund"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 mb-10 text-s text-gray-700">
                {filteredDog.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DogList;
