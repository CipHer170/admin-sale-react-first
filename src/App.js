import React from "react";
import "./App.scss";
import AppContainer from "./AppContainer";
import Provider from "./context/productContext";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Provider>
      <Navbar />
      <AppContainer />
      <ScrollToTop />
    </Provider>
  );
}

export default App;
