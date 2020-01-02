import React from "react";
import { withAsyncAction } from "../HOCs";
import MessageCard from "./MessageCard";

class MessageList extends React.Component {
  componentDidMount() {
    this.props.getMessages(this.props.username);
  }

  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      this.props.getMessages(this.props.username);
    }
  }

  render() {
    return (
      this.props.result &&
      this.props.result.messages.map(message => {
        return (
          <MessageCard
            key={message.id}
            username={message.username}
            text={message.text}
            createdAt={message.createdAt}
            id={message.id}
            likes={message.likes}
          />
        );
      })
    );
  }
}

export default withAsyncAction("messages", "getMessages")(MessageList);
