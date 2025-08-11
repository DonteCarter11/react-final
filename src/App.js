import Content from "./Components/Content";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Overlay from "./Components/Overlay";

function App() {
  return (
    <div className="App">
      <Overlay />
      <Nav />
      <Header />
      <Content />
    </div>
  );
}

export default App;
