import React from 'react';

function ChatItem(props) {
  const icon = props.sent ? "timeline-icon bg-success" : "timeline-icon bg-danger";
  return (
    <article className="timeline-entry">
      <div className="timeline-entry-inner">

        <div className={icon}>
          <i className="entypo-feather"></i><a href="#" onClick={
            (event) => {
              if (props.sent) {
                props.onDelete();
              } else {
                props.resend();
              }
              event.preventDefault();
            }
          }>-</a>
        </div>

        <div className="timeline-label">
          <h2><a href="/">{props.name}</a> <span>posted a status update</span></h2>
          <p>{props.message}</p>
          {!props.sent &&
            <p style={{ color: "red", fontSize: "8px" }}>
              network failed, please check your connections
            </p>
          }
        </div>
      </div>
    </article>
  )
}

export default ChatItem;