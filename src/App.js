import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/index";
import Contentbox from "./components/contentbox/index"
import Resumeblock from "./components/resumeblock/index"
import Portfolioblock from "./components/portfolioblock"
import Footer from "./components/footer/footer"
import './App.css';

function App() {
  return (
    <Router>
        <Header/>
        <Contentbox>
          <Route exact path="/portfolio-v3/" component={Resumeblock} />
          <Route exact path="/portfolio" component={Portfolioblock} />
        </Contentbox>
        <Footer /> 
    </Router>
  );
}

export default App;
