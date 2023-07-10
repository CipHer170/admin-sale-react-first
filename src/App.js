import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { productContext } from "./context/productContext";
import "./App.scss";
function App() {
  const { getData } = useContext(productContext);
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

export default App;
