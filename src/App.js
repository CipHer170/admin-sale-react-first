import React from "react";
import "./App.scss";
import AppContainer from "./AppContainer";
import Provider from "./context/productContext";
import Navbar from "./components/Navbar";
import BaseContainer from "./components/BaseContainer/BaseContainer";

function App() {
  return (
    <Provider>
      <BaseContainer>
        <Navbar />
        <AppContainer />
      </BaseContainer>
    </Provider>
  );
}

export default App;
