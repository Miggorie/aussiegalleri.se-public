import useDogContext from "../../hooks/use-dog-context";
import { Dog } from "../../components/Interfaces";
// import SideBarSearch from "../components/tailwind/Sidebar";

function DogList() {
  //Using the context to fetch all dogs from database
  const { dogs } = useDogContext();
  const baseUrl = "http://aussiegalleri.se/images/thumbnails/";

  return (
    <div>
      <div className="bg-white">
        <div className="">
          <h2 className="sr-only">Hundar</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {dogs?.map((dog: Dog) => (
              <a key={dog.dogID} href={`/dogs/${dog.url}`} className="group">
                <div className="aspect-ratio: auto w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-ratio:">
                  <img
                    src={baseUrl + dog.date + "/" + dog.standLeft}
                    alt="hund"
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{dog.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DogList;