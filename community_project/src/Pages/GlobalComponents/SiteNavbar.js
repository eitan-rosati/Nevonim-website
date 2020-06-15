
import React, {Component} from "react";
import './SiteNavbar.css';
import logo from './Logo.jpg';
import { Link } from "react-router-dom";

class SiteNavbar extends Component{
  render(){
  return (
<div id="primery_buttons">
  <div className="dropdown">
    <button id="service_provider_but" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">התחברות לנותני שירותים
    <span className="caret"></span></button>
    <ul id="service_provider_drop" className="dropdown-menu">
      <li><a id="option" href="#" data-toggle="modal" data-target="#myModal">כניסה</a></li>
      <li><a id="option" href="/RegisterPage">הרשמה</a></li>
    </ul>
  </div>
  <div id="register_and_login" className="btn-group">
  <Link to="/RegisterPage"><button id="register" type="button" className="btn btn-primary">הרשמה</button></Link>
  <div id="myModal" className="modal fade" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
         <h4 id="login_main_title" className="modal-title" >כניסה לאתר</h4>
        </div>
        <div className="modal-body">
          <p id="login_title">:כתובת דואר אלקטרוני</p>
          <input id="login_input"/>
          <p id="login_title">:סיסמא</p>
          <input id="login_input"/>
          <br></br>
          <button type="button" className="btn btn-primary" data-dismiss="modal">שלח</button>
        </div>
        <div className="modal-footer">
        ?שכחת סיסמא
        </div>
      </div>
    </div>
  </div>      
  <button id="login" type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">כניסה</button> 
  </div>
  <Link to="/"><div id="logo_div" herf="/"><img  id='logo' className="btn btn-primary bouton-image monBouton" src={logo} alt=""></img></div></Link>
</div>
  );
}
}

export default SiteNavbar;