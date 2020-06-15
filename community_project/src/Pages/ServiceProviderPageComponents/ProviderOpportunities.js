import React, { Component } from 'react';
import './ProviderPage.css';

const Addopp = () =>{
    // onAddopp = (event) => { 
        return (
            <button id = 'plus'>
                +
            </button>
        )
}
const OpportunitiesList = () =>{
    /*GET THE LISTS OF THE PROVIDER OPPORTUNITIES*/
    return(
        <table id = 'table'>
            <td key='{index}'>
                <tr>
                    <button /*onClick={() => openDetails()}*/>
                    עזרה בדרך 
                    </button>
                </tr>
                <tr>
                    <button /*onClick={() => editDetails()}*/>
                    ערוך פרטים 
                    </button>
                </tr>
            </td>
        </table>
    )
}

const ProviderOpportunities = () =>{
    return(
        <div>
            <Addopp />
            <OpportunitiesList />
        </div>
    )
}


export default ProviderOpportunities