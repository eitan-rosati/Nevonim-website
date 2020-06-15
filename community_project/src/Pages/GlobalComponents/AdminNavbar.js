

import React, {Component} from 'react';
import './AdminNavbar.css';
import logo from './Logo.jpg'; 

class PageHeader extends Component{
  render(){
    return (
      <div className="PageHeader">
        <div class="site-navbar">
          <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <ul class="nav navbar-nav navbar-right">
                <a class="navbar-brand" href="/">
                  <div class="logo-image">
                    <img id='logo' className="img-fluid" src={logo} alt=""></img>
                   </div>
                </a>
              </ul>
              <div class="buttons">
                <ul class="nav navbar-nav">
                  <li id="logout_button"><a href="#">התנתקות</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default PageHeader;
