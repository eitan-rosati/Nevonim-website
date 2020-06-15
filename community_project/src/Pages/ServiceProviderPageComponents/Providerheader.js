import React, { Component } from 'react';
import './ProviderPage.css';
const Title = props => {
    return (
        <div id="title">
            <h1>האיזור האישי למחוללי הזדמנויות</h1>
            <h2>ברוך הבא דור לדור </h2> 
            <h3> :הזדמנויות המוצעות על ידך</h3>
        </div>
   )
}

class Notifications extends Component {
    render() {
        return (
            <button id = 'notifications'>
                Notifications
            </button>
        )
    }
}

const Providerheader = (props) =>{
    return(
        <div id> 
            <Title/>
            <Notifications/>
        </div>
    )
}
export default Providerheader