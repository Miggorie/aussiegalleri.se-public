import React, { useEffect, useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DogList from "./pages/dogs";
import DogsContext from "./context/DogsContext";

function App() {
  const { fetchData } = useContext(DogsContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <DogList />
      <Footer />
    </div>
  );
}
export default App;
