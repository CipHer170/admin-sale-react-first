import "./App.scss";
import { Route, Routes } from "react-router-dom";
import AppContainer from "./AppContainer";
import ProductDetail from "./components/ProductDetail";
function App() {
  return (
    <Routes>
      <Route to="/" path={<AppContainer />} />
      <Route to="/product-detail" path={<ProductDetail />} />
    </Routes>

    // <div className="App">
    //   <Navbar />
    //   <Products />
    // </div>
  );
}

export default App;
