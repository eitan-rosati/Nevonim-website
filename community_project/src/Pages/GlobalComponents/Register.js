import React , { Component } from 'react';
//import './Register.css';
import firebase from './config/Firebase';
import SiteNavbar from './SiteNavbar';
import { MDBCollapseHeader } from 'mdbreact';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.userRef = firebase.firestore().collection('users');
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Submitted : ' + this.state.value);
        this.userRef.add({
          uid:this.uid,
          name:this.name
        })
        event.preventDefault();
      }
    
      render() {
        return (
            <>
            <SiteNavbar/>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>מצטרפים לנבונים בקליק אחד</legend>
            <label for='first_name'>שם פרטי :</label>
            <br/>
              <input name='first_name' type="text" value={this.state.value} onChange={this.handleChange} />
            <label>
              Last name:
              <br/>
              <input type='text' value={this.state.value} onChange={this.handleChange}/>
            </label>
            <br/>
            <label for='id_num'>מספר זהות</label>
            <br/>
            <input type='number' name='id_num' max='9' value={this.state.value} onChange={this.handleChange} />
            <br/>
            <label for='date'>תאריך לידה</label>
            <br/>
            <input type='date' name='date' value={this.state.value} onChange={this.handleChange}/>
            <br/>
            <label for='koupa'>קופת חולים</label>
            <br/>
            <input type='text' name='koupa' value={this.state.value} onChange={this.handleChange}/>
            <br/>
            <label for='email'>כתובת מייל</label>
            <br/>
            <input type='email' name='email' value={this.state.value} onChange={this.handleChange}/>
            <br/>
            <input type="submit" value="Send" />
            </fieldset>
          </form>
          </>
        );
      }
    }


export default Register;

