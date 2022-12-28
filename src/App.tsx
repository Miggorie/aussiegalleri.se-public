import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "redux-starter-kit";
import rootReducer from "./reducers/navbarReducer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
