import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import React, {Component} from 'react';
import HomePage from './Pages/HomePage';
import SearchResultPage from './Pages/SearchResultPage';
import AdminPage from './Pages/AdminPage';
import ServiceProviderPage from './Pages/ServiceProviderPage';
import ChatPage from './Pages/ChatPage';
import NavonProfilePage from './Pages/NavonProfilePage';
import {Redirect} from 'react-router-dom';
import SiteNavbar from './Pages/GlobalComponents/SiteNavbar';
import Register from './Pages/GlobalComponents/Register';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <Route exact path="/"><Redirect to="/" /> : <HomePage /></Route>
      <Route path="/SearchResultPage" component={SearchResultPage} />
      <Route path="/RegisterPage" component={Register}/>
      </div>
    </BrowserRouter>
    );
  }
}
export default App;
