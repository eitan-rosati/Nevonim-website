import React, {Component} from 'react';
import style from './SearchFeature.css'
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";    
import LocationSearchFeature from './SearchFeaturesComponents/LocationSearchFeature.js';
import CategorySearch from './SearchFeaturesComponents/CategorySearch';
import KeywordSearch from './SearchFeaturesComponents/KeywordSearch';

const SearchFeature=()=>{
    return(
       <div id='SearchFeature'>
           <div id="title_search">חיפוש באתר</div>
            <LocationSearchFeature></LocationSearchFeature>
            <KeywordSearch/>
            <CategorySearch/>
       </div>
    )
}
export default SearchFeature;