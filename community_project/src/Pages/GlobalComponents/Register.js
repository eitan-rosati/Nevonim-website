import React , { Component } from 'react';
import './Register.css';
import firebase from './config/Firebase';
import SiteNavbar from './SiteNavbar';
import GoogleLogin from 'react-google-login';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {first_name: '',
                      last_name:'',
                      id_num:'',
                      date:'',
                      koupa:'',
                      mail:'',
                      passwd:''
      };
        this.handleFirstN = this.handleFirstN.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleID = this.handleID.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleKoupa = this.handleKoupa.bind(this);
        this.handleMail = this.handleMail.bind(this);
        this.handlePasswd = this.handlePasswd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleFirstN = (event) => {
        this.setState({first_name:event.target.value});
      }

      handleName = (event) => {
        this.setState({last_name:event.target.value});
      }

      handleID = (event) => {
        this.setState({id_num:event.target.value});
      }

      handleDate = (event) =>{
        this.setState({date:event.target.value});
      }

      handleKoupa = (event) => {
        this.setState({koupa:event.target.value});
      }

      handleMail = (event) => {
        this.setState({mail:event.target.value});
      }

      handlePasswd = (event) => {
        this.setState({passwd:event.target.value});
      }
    
      handleSubmit = (event) => {
        alert('Submitted : ' + this.state.first_name + '\n ' + this.state.last_name);
         event.preventDefault();
        firebase.firestore().collection('users').add({
           first_name:this.state.first_name,
           last_name:this.state.last_name,
           id_num:this.state.id_num,
           date:this.state.date,
           koupa:this.state.koupa,
           mail:this.state.mail,
           passwd: this.state.passwd
         })
      }
    
      render() {
        return (
            <>
            <SiteNavbar/>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>מצטרפים לנבונים בקליק אחד</legend>
            <label>שם פרטי 
            <br/>
              <input name='first_name' type="text" value={this.state.first_name} onChange={this.handleFirstN} />
              </label>
              <br/>
            <label>
              שם משפחה
              <br/>
              <input name='last_name' type='text' value={this.state.last_name} onChange={this.handleName}/>
            </label>
            <br/>
            <label>מספר זהות
            <br/>
            <input type='number' name='id_num'  value={this.state.id_num} onChange={this.handleID} />
            </label>
            <br/>
            <label>תאריך לידה
            <br/>
            <input type='date' name='date' value={this.state.date} onChange={this.handleDate}/>
            </label>
            <br/>
            <label>קופת חולים
            <br/>
            <input type='text' name='koupa' value={this.state.koupa} onChange={this.handleKoupa} />
            </label>
            <br/>
            <label>כתובת מייל
            <br/>
            <input type='email' name='mail' value={this.state.mail} onChange={this.handleMail} />
            </label>
            <br/>
            <label>בחר סיסמה
              <br/>
              <input type='password' name='passwd' value={this.state.passwd} onChange={this.handlePasswd}/>
            </label>
            <br/>
            </fieldset>
            <input type="submit" value="Send" />
            
          </form>
         
          </>
        );
      }
    }


export default Register;

