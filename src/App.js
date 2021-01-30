import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/nav/index";
import Contentbox from "./components/contentbox/index"
import Resumeblock from "./components/resumeblock/index"
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <Contentbox>
        <Resumeblock />
      </Contentbox>
    </Router>
  );
}

export default App;
