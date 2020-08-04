import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Activities from "./components/Activities";
import NewsLetter from "./components/NewsLetter";
import Contact from "./components/Contact";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/activities" component={Activities} />
            <Route exact path="/newsletter" component={NewsLetter} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
