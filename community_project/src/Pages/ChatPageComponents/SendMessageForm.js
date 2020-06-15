import React from 'react';

class SendMessageForm extends React.Component {
    render() {
        return(
            <div id = "bla">
                <input id = "textform" type="text" placeholder="please type a message and hit SEND" />
                    <button id="btn_send"> Send </button>
            </div>
        )
    }
}


export default SendMessageForm;

