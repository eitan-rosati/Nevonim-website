import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import './Item.css';
const Item=()=>{
    return (
        <div>
            <div class="item">
                <div class="click_to _see">
                    <button id="click">לחץ להגדלה
                    </button>
                </div>
                <div class="display_payment">
                    תצוגת תשלום
                </div>
                
                <div class="A">
                    נגישות
                </div>
                <div class="item_name">
                    שם הפריט
                </div>
            </div>
            <div class="item2">
                <div class="click_to _see2">
                    <button id="click2">לחץ להגדלה
                    </button>
                </div>
                <div class="display_payment2">
                    תצוגת תשלום
                </div>
                
                <div class="A2">
                    נגישות
                </div>
                <div class="item_name2">
                    שם הפריט
                </div>
            </div>
        </div>
        
    )

}
class Items extends Component{
    render(){
       return ( 
           <Item/>
        )
    }
}
export default Items ;