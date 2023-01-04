import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DogList from "./pages/dogs";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://aussiegalleri.se/api/api.php");
        const data = await response.json();
        setDogs(data.dogs);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <DogList dogs={dogs} />
      <Footer />
    </div>
  );
}
export default App;
