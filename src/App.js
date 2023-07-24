import "./App.scss";
import { Route, Routes } from "react-router-dom";
import AppContainer from "./AppContainer";
import ProductDetail from "./components/ProductDetail";
import Provider from "./context/productContext";
import React, { useContext, useEffect } from "react";
import { ProductContext } from "./context/productContext";

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<AppContainer />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </Provider>
  );
}

export default App;
