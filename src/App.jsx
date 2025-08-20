import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Overlay from "./Components/Overlay";
import Footer from "./Components/Footer";
import Data from "./Components/Data";
import Filter from "./Components/UI/Filter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { ThemeProvider } from "./Components/UI/ThemeContext";
import Landing from "./Components/Landing";
import { SearchProvider } from "./Components/Context/SearchContext";
import Features from "./Pages/Features";

function App() {
  return (
    <SearchProvider>
      <Router>
        <ThemeProvider>
          <div className="App">
            {/* <Overlay /> */}
            <Nav />
            <Routes>
              {/* <Route path="/Cards" exact Component={Data} /> */}
              <Route path="/" element={<Landing />} />
              <Route path="/Cards" element={<Data />} />
              <Route path="/Cards/:digimonName" element={<Features />} />
              {/* <Route path="/" exact Component={Home} /> */}
            </Routes>
            <Footer />
          </div>
        </ThemeProvider>
        
      </Router>
    </SearchProvider>
  );
}

export default App;
