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
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    body2: {
      fontFamily: "Raleway",
    },
    h5: {
      fontFamily: "Raleway",
    },
    button: {
      fontFamily: "Raleway",
    },
    h2: {
      fontFamily: "Quesha",
    },
    h3: {
      fontFamily: "Quesha",
    },
    h4: {
      fontFamily: "Quesha",
    },
  },
  palette: {
    primary:{
      main: "#A35715",
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
