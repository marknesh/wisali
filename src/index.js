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
import CompareProperties from './components/CompareProperties';
import MyProfile from './components/MyProfile';
import MyProperties from './components/MyProperties';
import AddNewProperty from './components/AddNewProperty';
import ChangePassword from './components/ChangePassword';
import BlogDetail from './components/BlogDetail';
import Contact from './components/Contact';
import AgentList from './components/AgentList';
import AgencyProfile from './components/AgencyProfile';
import AgentsProfile from './components/AgentsProfile';

ReactDOM.render(
 
    
    <Router>
      <Navbar/>
    <Switch>
    <Route exact path="/agency-list" component={AgentList} />
    <Route exact path="/agents-profile" component={AgentsProfile} />
    <Route exact path="/agency-profile" component={AgencyProfile} />
    <Route exact path="/agents-list" component={AgentList} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/blog-detail" component={BlogDetail} />
    <Route exact path="/change-password" component={ChangePassword} />
    <Route exact path="/add-new-property" component={AddNewProperty} />
    <Route exact path="/my-properties" component={MyProperties} />
    <Route exact path="/my-profile" component={MyProfile} />
    <Route exact path="/compare-properties" component={CompareProperties} />
    <Route exact path="/listings-list-with-map" component={Listings} />
    <Route exact path="/single-property-page-1" component={SingleProperty} /> 
    <Route exact path="/" component={Home} />
</Switch>
   
    </Router>
 ,

  document.getElementById('wrapper'),
);
ReactDOM.render(
 
    <App />
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
