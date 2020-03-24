import React, { Component } from 'react';
import ChatItem from './Chat';
import ChatForm from './ChatForm';
import { connect } from 'react-redux';
import { loadChat } from '../actions';

import io from 'socket.io-client';
const socket = io('http://192.168.1.11:3001');

class ChatList extends Component {

  componentDidMount() {
    this.props.loadChat();
    socket.on('reload', (data) => {
      this.props.loadChat();
    })
  }

  render() {
    const dataList = this.props.chats.map((item, index) => {
      return (
        <ChatItem
          key={index}
          name={item.name}
          message={item.message}
          sent={item.sent}
          id={item.id} />
      );
    })
    return (
      <div className="timeline-centered">
        {dataList}
        <ChatForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  chats: state.chats
})

const mapDispatchToProps = (dispatch) => ({
  loadChat: () => dispatch(loadChat())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatList)
