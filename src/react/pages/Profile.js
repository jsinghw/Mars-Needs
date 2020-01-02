import React from "react";
import { Menu, UserCard, MessageList, CreateMessageForm } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Profile</h2>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "400px"
            }}
          >
            <UserCard username={this.props.match.params.username} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <CreateMessageForm />
            <MessageList username={this.props.match.params.username} />
          </div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
