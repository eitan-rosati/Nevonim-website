import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import './More_filters.css';
const Filters=()=>{
    return (
        <div className="more_filters">
            <div className="language">
                <select>
                  <option  disabled selected>בחר שפה</option>
                  <option value="Hebrew" >עברית</option>
                  <option value="English">אנגלית</option>
                  <option value="Areb">ערבית</option>
               </select>
            </div>
            <div className="payment">
                <select>
                  <option  disabled selected> תשלום</option>
                  <option value="pay">בתשלום</option>
                  <option value="no_pay">בחינם</option>
               </select>
            </div>
               <div className="Accessibility_level">
                <select>
                  <option value="" disabled selected>רמת נגישות</option>
                  <option value="high">נגישות גבוהה</option>
                  <option value="middling">נגישות בנונית</option>
                  <option value="small">נגישות נמוכה</option>
                  <option value="without">ללא נגישות</option>
               </select>
            </div>
            <div className="">
                <button id="Special_population">
                    אוכלוסיה מיוחדת
                </button>
            </div>
        </div>
    )

}
class More_filters extends Component{
    render(){
       return ( 
            <Filters/>
        )
    }
}
export default More_filters ;