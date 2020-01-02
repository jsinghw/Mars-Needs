import React from "react";
import { CreateMessageForm, Menu, MessageList } from "../components";
import { userIsAuthenticated } from "../HOCs";

class MessageFeed extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Message Feed</h2>
        <CreateMessageForm />
        <MessageList />
      </>
    );
  }
}

//test comment

export default userIsAuthenticated(MessageFeed);
