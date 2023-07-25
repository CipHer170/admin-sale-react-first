import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { ProductContext } from "./context/productContext";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";

function AppContainer() {
  const { getData } = useContext(ProductContext);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <Navbar />
            <Products />
          </div>
        }
      />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default AppContainer;
