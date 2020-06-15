import React,{Component} from'react';
import style from './LocationSearchFeature.css';

const LocationSearchFeature=()=>{
    return(
        <div id="search_location_feature">
            <div id="search_location_feature_description">:אני מחפש/ת שירות באזור</div>
            <div id="loc_btn_group">
                <button id="loc1" type="button" class="btn btn-primary">ירושלים</button>  
                <button id="loc2" type="button" class="btn btn-primary">מרכז</button> 
                <button id="loc3" type="button" class="btn btn-primary">צפון</button>  
            </div>    
            <div id="loc_btn_group">
                <button id="loc1" type="button" class="btn btn-primary">שפלה</button>  
                <button id="loc2" type="button" class="btn btn-primary">שרון</button> 
                <button id="loc3" type="button" class="btn btn-primary">דרום</button>   
            </div>   
        </div>
    )
}
export default LocationSearchFeature;