import React from "react";
import { Link, DeleteMessageButton, ToggleLikeButton } from ".";

// const fakeMessage = {
//   id: 938,
//   text: "This is my second message!",
//   username: "testuser",
//   createdAt: "2019-11-18T16:07:42.936Z",
//   likes: []
// };

class MessageCard extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid black",
          padding: "1em",
          borderRadius: "10px",
          margin: "2em"
        }}
      >
        <Link to={`/profile/${this.props.username}`}>
          <h4>{this.props.username}</h4>
        </Link>
        <p>{this.props.text}</p>
        <p>
          <span>{new Date(this.props.createdAt).toDateString()} </span>
          <span>{new Date(this.props.createdAt).toTimeString()}</span>
        </p>
        <p>{this.props.likes.length} Likes</p>
        <ToggleLikeButton messageId={this.props.id} likes={this.props.likes} />
        <DeleteMessageButton
          username={this.props.username}
          messageId={this.props.id}
        />
      </div>
    );
  }
}

export default MessageCard;
