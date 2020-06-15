import React from 'react';
import './style.css';
class MyPersonalHistory extends React.Component {

    render(){
        return(
                <div id="myPersonalHistory_div">
                   <div id="myPersonalHistory_Button_div">
                        <button id="main_btn" type="button" class="btn btn-primary">היסטוריית החיפושים שלי</button>
                   </div>
                   <div id="myPersonalHistory_Textbox_div">
                        <h3> :חיפוש1</h3>
                        <h3> :חיפוש2</h3>
                        <h3> :חיפוש3</h3>
                        <h3> :חיפוש4</h3>
                   </div>
                </div> 
        )
    }

}


export default MyPersonalHistory;
