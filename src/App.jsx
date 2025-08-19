import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Overlay from "./Components/Overlay";
import Footer from "./Components/Footer";
import Data from "./Components/Data";
import Filter from "./Components/UI/Filter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import { ThemeProvider } from "./Components/UI/ThemeContext";

function App() {
  return (
    <Router>
      <ThemeProvider>
      <div className="App">
        {/* <Overlay /> */}
        <Nav />
        <Routes>
          <Route path="/Cards" exact Component={Data} />
          <Route path="/" exact Component={Home} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;
