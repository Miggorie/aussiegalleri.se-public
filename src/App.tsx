import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import DogList from "./pages/dogs";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8080/src/php/API.php");
        const data = await response.json();
        setDogs(data);
      } catch (error) {
        console.log(error);
      }

      // const renderDogs = dogs.map((dogs, dogID) => {
      //   return <Dogs dogs={dogs} key={dogID} />;
    }
    fetchData();
  }, []);

  console.log(dogs);

  return (
    <div>
      <Header />
      <DogList dogs={dogs} />
    </div>
  );
}
export default App;
