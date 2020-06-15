import React from 'react';

class Contact extends React.Component {
    render() {
        return(
            <button id = "username">
              {this.props.name}
            </button>
        )
    }
}

export default Contact;