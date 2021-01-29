import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
  </Router>
  );
}

export default App;
