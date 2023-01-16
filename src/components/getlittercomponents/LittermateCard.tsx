import { Dog } from "../Interfaces";
import { Link } from "react-router-dom";

function LittermateCard(littermate: Dog) {
  const baseUrl =
    "http://aussiegalleri.se/images/thumbnails/" + littermate.date + "/";

  return (
    <div>
      <div className="bg-white">
        <h2 className="sr-only">Hundar</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          <a
            key={littermate.dogID}
            href={`/dogs/${littermate.url}`}
            className="group"
          >
            <div className="aspect-ratio: auto w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-ratio:">
              <img
                src={baseUrl + littermate.standLeft}
                alt="hund"
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{littermate.name}</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LittermateCard;
