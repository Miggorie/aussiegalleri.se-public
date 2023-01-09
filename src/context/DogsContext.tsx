import { createContext, useState } from "react";
import { Dog } from "../pages/dogs";

export interface DogsContextType {
  dogs: Dog[];
  fetchData: () => Promise<void>;
}

//Create the Context

const DogsContext = createContext<DogsContextType>({
  dogs: [],
  fetchData: () => Promise.resolve(),
});

interface Props {
  children: React.ReactNode;
}

//Create the Provider, which is the fetch from api.php

const Provider = ({ children }: Props) => {
  const [dogs, setDogs] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("http://aussiegalleri.se/api/api.php");
      const data = await response.json();
      setDogs(data.dogs);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <DogsContext.Provider value={{ dogs, fetchData }}>
      {children}
    </DogsContext.Provider>
  );
};

//exporting them

export { Provider };
export default DogsContext;
