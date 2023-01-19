import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dog } from "../../components/Interfaces";
import HomeComponent from "./HomeTailwind";
import AllDogStatistics from "../../components/tailwind/statistics/AllDogStatistics";
import OtherStatistics from "../../components/tailwind/statistics/OtherStatistics";

function Home() {
  const [latestDogs, setLatestDogs] = useState([]);
  const baseUrl = "http://aussiegalleri.se/images/thumbnails/";

  useEffect(() => {
    async function fetchLatestDogs() {
      try {
        const response = await fetch(
          "http://aussiegalleri.se/api/search/latestdogs.php"
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setLatestDogs(data.dogs);
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
    fetchLatestDogs();
  }, []);

  return (
    <div>
      <HomeComponent />
      <div className="bg-stone-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 sm:max-w-none lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">
              Nya i galleriet
            </h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0 sm:space-y-0 sm:gap-x-6 sm:grid sm:grid-cols-2">
              {latestDogs.map((dog: Dog) => (
                <Link to={`/dogs/${dog.url}`}>
                  <div key={dog.headShot} className="group relative">
                    <div className="relative h-full w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-full sm:aspect-h-full sm:h-full lg:aspect-w-full lg:aspect-h-1">
                      <img
                        src={baseUrl + dog.date + "/" + dog.standLeft}
                        alt="hund"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <span className="absolute inset-0" />
                      Fotad: {dog.date}
                    </h3>
                    <p className="text-base font-semibold text-gray-900">
                      {dog.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <AllDogStatistics />
        <OtherStatistics />
      </div>
    </div>
  );
}

export default Home;
