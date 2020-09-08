import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Activities from "./components/activities/Activities";
import NewsLetter from "./components/newsletter/NewsLetter";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Router>
          <ScrollToTop />

          <Container>
            <NavBar theme={theme} themeToggler={themeToggler} />
          </Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/activities" component={Activities} />
            <Route exact path="/newsletter" component={NewsLetter} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer theme={theme} />
          <GlobalStyle />
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
