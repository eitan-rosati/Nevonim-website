import React from 'react';
import './NavonProfilePage.css';
import SiteNavbar from './GlobalComponents/UserNavbar.js';
import MyProfile from './NavonProfilePageComponents/MyProfile';
import MyPersonalServices from './NavonProfilePageComponents/MyPersonalServices';
import MyPersonalHistory from './NavonProfilePageComponents/MyPersonalHistory';
import MyChats from './NavonProfilePageComponents/MyChats';

class NavonProfilePage extends React.Component {
render() {
   return (
       <div id="navon_profile_page">
           <SiteNavbar/>
            <div id = "NavonProfilePage">
                <div id = "title">
                    <h1>איזור אישי של נבון</h1><br></br><br></br>
                </div>    
                <MyProfile/><br></br>
                <MyPersonalServices/><br></br>
                <MyPersonalHistory/><br></br>
                <MyChats/>     
            </div> 
        </div>         
        )
    }
}

export default NavonProfilePage;
