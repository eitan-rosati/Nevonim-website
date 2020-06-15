import React, {Component} from 'react';
import './PageHeader.css';
import logo from './Logo.jpg'; 
import ConnectionOptions from '../Connection/ConnectionOptions'
class PageHeader extends Component{
  render(){
    return (
    <div className="PageHeader">
      <div className="site-navbar">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
        <ul className="nav navbar-nav navbar-right">
          <a className="navbar-brand" href="/">
          <div className="logo-image">
            <img id='logo' className="img-fluid" src={logo} alt=""></img>
            </div>
          </a>
        </ul>
           <div className="buttons">
           <ul className="nav navbar-nav">
              <li className="admin_button"><a href="#">כניסת אדמין</a></li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">התחברות למחוללי הזדמנויות
                <span className="caret"></span></a>
                <ul className="dropdown-menu">
                <li><a href="#">כניסה</a></li>
                <li><a href="#">התחברות</a></li>
              </ul>
          </li>
          <li className="dropdown">
      <a className="dropdown-toggle" data-toggle="dropdown" href="#">התחברות לנבון
        <span className="caret"></span></a>
        <ul className="dropdown-menu">
          <li><a href="#">כניסה</a></li>
          <li><a href="#">התחברות</a></li>
        </ul>
        </li>
        </ul>
        </div>
     </div>
      </nav>
      </div>
      {/*  <div id='site_brief_description'>ברוך הבא לאתר</div> --> */}
    </div>
    );
  }
}

export default PageHeader;
