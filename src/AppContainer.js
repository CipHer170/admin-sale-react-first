import { useContext, useEffect } from "react";
// import Navbar from "./components/Navbar";
import Products from "./components/ProductPages/AllProducts/Products";
import { ProductContext } from "./context/productContext";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductPages/ProductDetail/ProductDetail";
import UserProfile from "./components/UserProfile/UserProfile";
import Card from "./components/Card/Card";

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
            <Products />
          </div>
        }
      />
      <Route path="/product-detail/:id" element={<ProductDetail />} />
      <Route path="/user-detail" element={<UserProfile />} />
      <Route path="/user-card" element={<Card />} />
      {/* <Route path="/user-detail/:id" element={<UserProfile />} />
      <Route path="/user-card/:id" element={<Card />} /> */}
    </Routes>
  );
}

export default AppContainer;
