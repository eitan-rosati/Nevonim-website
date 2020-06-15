import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import './Google_analytics.css';
const G_analytics =()=>{
    return (
        <div className="google_analytics">
            <h1>
            קישור לנתונים
            </h1>
        </div>
        
    )
}
class Google_analytics extends Component{
    render(){
       return ( 
        <G_analytics/>
        )
    }
}
export default  Google_analytics;