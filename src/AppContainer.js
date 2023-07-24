import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { ProductContext } from "./context/productContext";

function AppContainer() {
  const { getData } = useContext(ProductContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Products />
    </div>
  );
}

export default AppContainer;
