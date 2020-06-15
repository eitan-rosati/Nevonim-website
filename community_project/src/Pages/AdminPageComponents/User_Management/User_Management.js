import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import './User_Management.css';
const User=()=>{
    return (
        <div className="user_management">
            <div>
            <h1>            ניהול משתמשים 
            </h1>
            </div>
            <button id ="userManagement" type="submit">
                לחץ להגדלה
            </button>
        </div>
    )
}
class User_Management extends Component{
    render(){
       return ( 
        <User/>
        )
    }
}

export default User_Management;