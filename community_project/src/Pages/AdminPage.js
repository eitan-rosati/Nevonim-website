import React, { Component } from 'react';
import './AdminPage.css';
import Edit_category from './AdminPageComponents/Edit_category/Edit_category';
import User_Management from './AdminPageComponents/User_Management/User_Management';
import Google_analytics from './AdminPageComponents/Google_analytics/Google_analytics';
import DB_queries from './AdminPageComponents/DB_queries/DB_queries';
import SiteNavbar from './GlobalComponents/AdminNavbar';
class AdminPage extends Component {
  render(){
    return (
      <div>
        <SiteNavbar/>
        <Edit_category/>
        <User_Management/>
        <Google_analytics/>
        <DB_queries/>
      </div>    
    )   
  }
}


export default AdminPage;
