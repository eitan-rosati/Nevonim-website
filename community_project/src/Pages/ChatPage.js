import React from 'react';
import MessageList from './ChatPageComponents/MessageList'
import Message from './ChatPageComponents/Message'
import ContactList from './ChatPageComponents/ContactList'
import SendMessageForm from './ChatPageComponents/SendMessageForm'
import Title from './ChatPageComponents/Title'
import Contact from './ChatPageComponents/Contact'
import './ChatPage.css';
import SiteNavbar from './GlobalComponents/SiteNavbar.js';

class ChatPage extends React.Component {
  
  render() {
    return (
      <div id="chat_page">
        <SiteNavbar/>
        <div className="ChatPage">
            <div id = "contactlist">
                <ContactList />
            </div>
            <div id = "chat">
                <Title />
                <div id = "chatarea">
                    <MessageList />
                </div>
                <SendMessageForm />
            </div>
        </div>
     </div>
    )
  }
} 

export default ChatPage;
