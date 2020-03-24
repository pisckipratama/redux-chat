import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postChat } from '../actions/index';

class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', message: '' };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }

  handleChangeMessage(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    this.props.postChat(this.state.name, this.state.message)
    this.setState({ name: '', message: '' });
    event.preventDefault();
  }

  render() {
    return (
      <article className="timeline-entry begin">

        <div className="timeline-entry-inner">

          <div className="timeline-icon">
            <i className="entypo-flight"></i> +
      </div>

          <div className="timeline-label">
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="col-sm-2 control-label">Name</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="name" placeholder="Nama kamu" value={this.state.name} onChange={this.handleChangeName} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message" className="col-sm-2 control-label">Message</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="message" placeholder="Pesannya" value={this.state.message} onChange={this.handleChangeMessage} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-primary">Kirim</button>
                </div>
              </div>
            </form>
          </div>

        </div>

      </article>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postChat: (name, message) => dispatch(postChat(name, message))
})

export default connect(
  null,
  mapDispatchToProps
)(ChatForm)