import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Provider, { productContext } from "./context/productContext";

function AppContainer() {
  const { getData } = useContext(productContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Provider>
      <div className="App">
        <Navbar />
        <Products />
      </div>
    </Provider>
  );
}

export default AppContainer;
