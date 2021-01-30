import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/nav/index";
import Contentbox from "./components/contentbox/index"
import Resumeblock from "./components/resumeblock/index"
import Portfolioblock from "./components/portfolioblock"
import './App.css';

function App() {
  return (
    <Router>
        <Nav />
        <Contentbox>
          <Route exact path="/" component={Resumeblock} />
          <Route exact path="/portfolio" component={Portfolioblock} />
        </Contentbox>
    </Router>
  );
}

export default App;
