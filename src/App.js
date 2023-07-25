import React from "react";
import "./App.scss";
import AppContainer from "./AppContainer";
import Provider from "./context/productContext";

function App() {
  
  return (
    <Provider>
      <AppContainer />
    </Provider>
  );
}

export default App;
