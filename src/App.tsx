import React, { useEffect, useContext } from "react";
import Footer from "./components/footercomponent/Footer";
import Header from "./components/headercomponent/Header";
import DogList from "./pages/dogs";
import SingleDog from "./pages/dog";
import About from "./pages/about";
import Faq from "./pages/faq";
import Contact from "./pages/contact";
import Home from "./pages/home";
import DogsContext from "./context/DogsContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { fetchData } = useContext(DogsContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dogs" element={<DogList />} />
          <Route path="dogs/:name" element={<SingleDog />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
