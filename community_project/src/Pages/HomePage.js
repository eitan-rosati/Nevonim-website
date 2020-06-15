import React, {Component} from 'react';
import './HomePage.css';
import SiteNavbar from './GlobalComponents/SiteNavbar.js';
import Keyword from './HomePageComponents/SearchFeaturesComponents/KeywordSearch';

const HomePage=()=>{
    return(
        <div id="homePage">
            <SiteNavbar/>
            <div id='site_brief_description'>כל בתי העסק, השירותים המתאימים לך נמצאים בלחיצת כפתור</div>
           <a href="/SearchResultPage">ניסיון למעבר לדף</a>
           <Keyword/>
        </div>
    )
}

export default HomePage;