import React from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Graph from './pages/Graph'
import HomePage from './pages/Home'
import Sort from './pages/Sort'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
// import Bar from './components/Bar'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          {/* <Bar value = {this.state.array}/> */}
          {/* page routes */}
          <Route path="/home/" component={HomePage} />
          <Route path="/sort/" component={Sort} />
          <Route path="/graph/" component={Graph} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;