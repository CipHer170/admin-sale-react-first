import "./App.scss";
import AppContainer from "./AppContainer";
import Provider from "./context/productContext";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";
import HeroPage from "./components/HeroPage/HeroPage";

function App() {
  return (
    <Provider>
      <Navbar />
      <HeroPage />
      <AppContainer />
      <Footer />
      <ScrollToTop />
    </Provider>
  );
}

export default App;

//  <AppContainer />
