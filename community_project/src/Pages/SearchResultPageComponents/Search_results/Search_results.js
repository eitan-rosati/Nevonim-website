import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import './Search_results.css';
const Results=()=>{
    return (
        <div className="topic_of_search">
            <div className="Search_area">
                <select>
                  <option value="search" disabled selected>איזור </option>
                  <option value="telAviv">מרכז</option>
                  <option value="South">דרום</option>
                  <option vvalue="north">צפון</option>
                  <option value="jerusalem">ירושלים</option>
               </select>
            </div>
            <div className="rs_subcategory">
                <select>
                  <option  value="" disabled selected>תת-קטגוריה </option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
               </select>
            </div>
            <div className="rs_category">
                <select>
                  <option  value="" disabled selected>קטגוריה </option>
                  <option value="Entertainment">בידור ופנאי</option>
                  <option value="medison">רפואה</option>
                  <option value="Fitness">כושר גופני</option>
                  <option value="Sells">מכירות</option>
                  <option value="other">שירותים נוספים</option>
               </select>
            </div>
        </div>
    )

}
class Search_results extends Component{
    render(){
       return ( 
            <Results/>
        )
    }
}
export default Search_results;