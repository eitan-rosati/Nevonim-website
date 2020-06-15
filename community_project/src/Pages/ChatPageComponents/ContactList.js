import React from 'react';
import Contact from './Contact'
import './ChatStyle.css';

class ContactList extends React.Component {
    render() {
        return(
            <div>
                <Contact name = "contact 1"/><br></br>
                <Contact name = "contact 2"/><br></br>
                <Contact name = "contact 3"/><br></br>
                <Contact name = "contact 4"/>
            </div>
        )
    }
}

export default ContactList;