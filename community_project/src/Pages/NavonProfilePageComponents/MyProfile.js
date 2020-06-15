

import React from 'react';
import './style.css';
class MyProfile extends React.Component {

    render(){
        return(
                <div id="myProfile_div">
                   <div id="myProfile_Button_div">
                        <button  id="main_btn" type="button" class="btn btn-primary">הפרופיל שלי</button>
                   </div>
                   <div id="myProfile_Textbox_div">
                        <h3> :שם</h3>
                        <h3> :תאריך לידה</h3>
                   </div>
                </div> 
        )
    }

}








export default MyProfile;