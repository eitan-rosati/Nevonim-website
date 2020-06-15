import React from 'react';
import './style.css';
class MyPersonalServices extends React.Component {

    render(){
        return(
                <div id="myPersonalServics_div">
                   <div id="myPersonalServics_Button_div">
                        <button  id="main_btn" type="button" class="btn btn-primary">השירותים המועדפים שלי</button>
                   </div>
                   <div id="myPersonalServics_Textbox_div">
                        <h3> :שירות1</h3>
                        <h3> :שירות2</h3>
                        <h3> :שירות3</h3>
                        <h3> :שירות4</h3>
                   </div>
                </div> 
        )
    }

}








export default MyPersonalServices;