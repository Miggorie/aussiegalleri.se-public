import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useDogContext from "../hooks/use-dog-context";
import GetLitterMates from "../components/getlittercomponents/GetLitterMates";
import GetParentsInfo from "../components/getparentsinfo/GetParentsInfo";
import GetFather from "../components/getfathercomponents/GetFather";
import GetMother from "../components/getmothercomponents/GetMother";
import GetOffspring from "../components/getoffspring/GetOffspring";

//base URL for the images, its used to add the curretDog in return-section.
const baseUrl = "http://aussiegalleri.se/images/";

const SingleDog = () => {
  const { name } = useParams();
  const { fetchData, dogs } = useDogContext();

  const currentDog = dogs.find((dog) => dog.url === name);

  useEffect(() => {
    fetchData();
  }, []);

  if (currentDog) {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">
            <h5 className="mb-4 text-4xl font-extrabold leading-none">
              {currentDog.name}
              <br className="hidden md:block" />
              {/* jumps over{" "} */}
              <span className="inline-block text-deep-purple-accent-400">
                {/* a lazy dog */}
              </span>
            </h5>
            <p>{currentDog.gender}</p>
            <GetParentsInfo key={currentDog.litterID} currentDog={currentDog} />
            <br></br>
            <p>
              Fotograferad den {currentDog.date} i {currentDog.place}
            </p>
            <hr className="mb-5 border-gray-300" />

            <div className="grid gap-10 mt-8 lg:grid-cols-1">
              <img
                className="rounded-lg"
                src={baseUrl + currentDog.date + "/" + currentDog.standRight}
              />
              <img
                className="rounded-lg"
                src={baseUrl + currentDog.date + "/" + currentDog.standLeft}
              />
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-90 lg:mt-44 sm:mt-4 rounded-lg shadow-lg sm:h-90"
              src={baseUrl + currentDog.date + "/" + currentDog.headShot}
              alt=""
            />
          </div>
        </div>
        <h5 className="bg-stone-100 py-14 b-4 mt-14 text-4xl font-extrabold leading-none text-center">
          Släktingar i galleriet
        </h5>
        <h2 className="inline-block mt-10 px-3 py-px text-m font-semibold tracking-wider text-stone-900 uppercase rounded-full bg-teal-accent-400">
          Föräldrar
        </h2>
        <div className="grid gap-10 lg:grid-cols-2 mb-10 pb-10">
          <GetFather key={currentDog.name} currentDog={currentDog} />
          <GetMother key={currentDog.date} currentDog={currentDog} />
        </div>
        <GetLitterMates key={currentDog.dogID} currentDog={currentDog} />
        <GetOffspring key={currentDog.standRight} currentDog={currentDog} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default SingleDog;
