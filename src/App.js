import React from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import GraphPage from './pages/Graph'
import SortingPage from './pages/Sorting'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Route path="/" exact component={SortingPage} />
          <Route path="/graph/" component={GraphPage} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;