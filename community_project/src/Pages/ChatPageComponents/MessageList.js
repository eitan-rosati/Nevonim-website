import React from 'react';
import Message from './Message'

class MessageList extends React.Component {
    render() {
        return(
            <div id = "Message_list_div"> 
                <Message user = "User1" text = "Hey"/>
                <Message user = "User2" text = "Hello"/>
                <Message user = "User1" text = "How are you?"/>
                <Message user = "User2" text = "Fine, thank you"/>
            </div>
        )
    }
}


export default MessageList;