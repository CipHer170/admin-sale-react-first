import React from "react";
import "./App.scss";
import AppContainer from "./AppContainer";
import Provider from "./context/productContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider>
      <Navbar />
      <AppContainer />
    </Provider>
  );
}

export default App;
