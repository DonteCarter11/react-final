import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Overlay from "./Components/Overlay";
import Footer from "./Components/Footer";
import Data from "./Components/Data";
import Filter from "./Components/UI/Filter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Overlay />
        <Nav />
        {/* <Header /> */}
        <Filter />
        <Data />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
