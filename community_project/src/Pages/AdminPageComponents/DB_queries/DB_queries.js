import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import './DB_queries.css';
const Data_base_queries =()=>{
    return (
        <div className="data_base_queries">
            <h1 id="query_title">
                שאילתות 
            </h1>
            <form>
                <input type="text" id="fname" placeholder="Put Query"/>
                <button id="Query" type="submit" >Send
                </button>
            </form>
        </div>
        
    )
}
class DB_queries extends Component{
    render(){
       return ( 
        <Data_base_queries/>
        )
    }
}
export default  DB_queries;