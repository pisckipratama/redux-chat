import React, { Component } from 'react';
import ChatList from '../containers/ChatList';
import '../chat.css';

export default class ChatBox extends Component {

  //socket.emit('add', null);

  render() {
    return (
      <div className="container">
        <div className="row">
          <ChatList />
        </div>
      </div>
    );
  }
}