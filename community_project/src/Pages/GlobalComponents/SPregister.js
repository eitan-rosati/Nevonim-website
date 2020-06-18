import React, { Component } from 'react';
import firebase from './config/Firebase';
import SiteNavBar from './SiteNavbar';

class SPregister extends Component {
    constructor(props){
        super(props);
        this.state = {
        brand_name: '',
        soc_num:'',
        place:'',
        murshe:'',
        mail:'',
        passwd:''
        };

    this.handleCompanyName = this.handleCompanyName.bind(this);
    this.handleCompanyID = this.handleCompanyID.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handleM = this.handleM.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }   

    handleCompanyName = (event) => {
    this.setState({brand_name:event.target.value});
    }

    handleCompanyID = (event) => {
    this.setState({soc_num:event.target.value});
    }

    handleLocation = (event) => {
        this.setState({place:event.target.value});
    }

    handleEmail = (event) => {
    this.setState({mail:event.target.value});
    }

    handleM = (event) => {
        this.setState({murshe:event.target.value});
    }

    handlePassword = (event) => {
    this.setState({passwd:event.target.value});
    }

    handleSubmit = (event) => {
        alert('Submitted : ' + this.state.brand_name + '\n ' + this.state.murshe);
       // event.preventDefault();
        firebase.firestore().collection('providers').add({
            brand_name:this.state.brand_name,
            soc_num:this.state.soc_num,
            place:this.state.place,
            murshe:this.state.murshe,
            adress:this.state.adress,
            phone:this.state.phone,
            mail:this.state.mail,
            passwd: this.state.passwd
            });
    }

    render() {
    return (
            <>
            <SiteNavBar/>
            <form onSubmit={() => this.handleSubmit}>
            <fieldset>
            <legend>מצטרפים לנבונים בקליק אחד</legend>
            <label>שם החברה 
            <br/>
            <input name='brand_name' type="text" value={this.state.brand_name} onChange={this.handleCompanyName} />
            </label>
            <br/>
            <label>מספר חברה
            <br/>
            <input type='number' name='soc_num'  value={this.state.id_num} onChange={this.handleCompanyID} />
            </label>
            <br/>
            <label>עסק מורשה
                <br/>
                <input type='text' name='murshe' value={this.state.murshe} onChange={this.handleM}/>
            </label>
            <br/>
            <label>מיקום
                <br/>
                <input type='text' name='place' value={this.state.place} onChange={this.handleLocation}/>
            </label>
            <br/>
            <label>כתובת מייל
            <br/>
            <input type='email' name='mail' value={this.state.mail} onChange={this.handleEmail} />
            </label>
            <br/>
            <label>בחר סיסמה
            <br/>
            <input type='password' name='passwd' value={this.state.passwd} onChange={this.handlePassword}/>
            </label>
            <br/>
            </fieldset>
            <input type="submit" value="Send" />

            </form>

            </>
        );
    }
}



export default SPregister;