import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SingleProperty from './components/SingleProperty';
import Home from './components/Home';
import Listings from './components/Listings';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
    <Switch>
    <Route path="/listings-list-with-map" component={Listings} />
    <Route path="/single-property-page-1" component={SingleProperty} /> 
    <Route path="/" component={Home} />
</Switch>
   
    </Router>
  </React.StrictMode>,

  document.getElementById('wrapper'),
);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
