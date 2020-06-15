import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import './Edit_category.css';
const Edit=()=>{
    return (
        <div className="edit_category">
           <h1>קטגוריות</h1>
            <div className="Entertainment_and_leisure">
                <button id="one" type="submit" value="1">
                        בידור ופנאי
                </button>
                <button id="two" type="submit" value="2">
                        כושר גופני
                </button>
                <button id="two" type="submit" value="2">
                            חוגים
                </button>
                <button id="two" type="submit" value="2">
                            כלי בית 
                </button>
            </div>
            <div className="Medison">
                <button id="two" type="submit" value="2">
                        אחרים
                </button>
                <button id="one" type="submit" value="1">
                אחרים
                </button>
                <button id="two" type="submit" value="2">
                אחרים
                </button>
                <button id="two" type="submit" value="2">
                אחרים
                </button>
            </div>
        </div>
        
    )
}
class Edit_category extends Component{
    render(){
       return ( 
        <Edit/>
        )
    }
}

export default Edit_category;