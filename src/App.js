import React from 'react';
import Header from './components/Header.js';
import Graph from './pages/Graph';
import Home from './pages/Home';
import Sort from './pages/Sort';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main style={{padding: 10}}>
        {/* page routes */}
        <Route exact name="sort" path="/sort/" component={Sort} />
        <Route exact name="graph" path="/graph/" component={Graph} />
        <Route exact name="home" path="/" component={Home} />
      </main>
    </Router>
  );
}


export default App;