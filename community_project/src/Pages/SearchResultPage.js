import React, { Component } from 'react';
import './SearchResultPage.css';
import Search_results from './SearchResultPageComponents/Search_results/Search_results';
import More_filters from './SearchResultPageComponents/More_filters/More_filters';
import Items from './SearchResultPageComponents/Items/Items';
import SiteNavbar from './GlobalComponents/SiteNavbar';


const SearchResultPage =()=>{
    return (
        <div id="SearchResultPage">
          <SiteNavbar/>
          <h1 id="search_result_title">תוצאות חיפוש</h1>
          <div id="search_result_description"> לחיפוש חוזר סמן את הקטגוריות ואת המסננים המתאימים לך</div>
          <Search_results/>
          <div id="reset_search_div"><button id="reset_search" className="btn btn-primary">חיפוש חוזר</button></div>
          <div id="more_filters_description"> :למסננים נוספים על תוצאות החיפוש שלך</div>
         <More_filters/>
          <div id="show_items" >:נמצאו 2 תוצאות חיפוש</div>
          <Items/>
        </div>    
    )  
}

export default SearchResultPage;