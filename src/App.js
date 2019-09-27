import React from 'react';
import Graph from './pages/Graph'
import Home from './pages/Home'
import Sort from './pages/Sort'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <main>
          {/* page routes */}
          <Route name="home" path="/" component={Home} />
          <Route name="sort" path="/sort/" component={Sort} />
          <Route name="graph" path="/graph/" component={Graph} />
        </main>
      </div>
    </Router>
  );
}


export default App;