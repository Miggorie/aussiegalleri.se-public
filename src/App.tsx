import React, { useState, useEffect } from "react";
import "./App.css";
import Dogs from "./pages/dogs";
import Header from "./components/Header";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/src/php/API.php", {
        method: "GET",
        mode: "no-cors",
        credentials: "include",
        headers: {
          "Content-Type": "text/plain",
        },
      }).then((response) => {
        if (!response.ok) {
          throw `fel, [${response.status}] [${response.statusText}]`;
        }
        return response.json();
      });
      console.log(response);
      const data = await response.json();
      console.log(data);
      setDogs(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Dogs dogs={dogs} />
    </div>
  );
}
export default App;
