import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <About/>
      <Menu />
    </BrowserRouter>
  );
}

export default App;
