import React from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import GraphPage from './pages/Graph'
import HomePage from './components/Home/Home'
import SortPage from './pages/Sort'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          {/* page routes */}
          <Route path="/Home/" component={HomePage} />
          <Route path="/Sort/" component={SortPage} />
          <Route path="/Graph/" component={GraphPage} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;