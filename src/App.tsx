import React, { useState, useEffect } from "react";
import "./App.css";
import Dogs from "./pages/dogs";
import Header from "./components/Header";

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
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {dogs.map((dog) => (
        <Dogs key={dog.dogID} dog={dog} />
      ))}
    </div>
  );
}
export default App;
