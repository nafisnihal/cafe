import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Blog from "./components/Blog";
import Moments from "./components/Moments";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <About />
      <Menu />
      <Products />
      <Blog />
      <Moments />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
