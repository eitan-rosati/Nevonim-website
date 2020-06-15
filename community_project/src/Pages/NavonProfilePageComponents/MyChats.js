import React from 'react';
import './style.css';
class MyChats extends React.Component {

    render(){
        return(
                <div id="myChat_div">
                   <div id="myChat_Button_div">
                        <button  id="main_btn" type="button" class="btn btn-primary">הצ'אטים שלי</button>
                   </div>
                   <div id="myChat_Textbox_div">
                       <br></br>
                   <button id="chat_btn" type="button" class="btn btn-info">צ'אט עם ספק שירות1</button><br></br>
                   <button id="chat_btn" type="button" class="btn btn-info">צ'אט עם ספק שירות2</button><br></br>
                   <button id="chat_btn" type="button" class="btn btn-info">צ'אט עם ספק שירות3</button><br></br>
                   <button id="chat_btn" type="button" class="btn btn-info">צ'אט עם ספק שירות4</button>
                   </div>
                </div> 
        )
    }

}


export default MyChats;
