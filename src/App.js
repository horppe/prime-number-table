import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Redirect from="/" to="/dashboard" />
        <Route path="/dashboard" component={Dashboard} />
      </Router>
   
    </div>
  );
}

export default App;
