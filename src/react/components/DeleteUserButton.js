import React from "react";
import { withAsyncAction, connect } from "../HOCs";

class DeleteUserButton extends React.Component {
  handleDeleteUser = event => {
    const confirmed = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (confirmed) {
      this.props.deleteUser();
    }
  };

  render() {
    return (
      this.props.username === this.props.loggedInUsername && (
        <button onClick={this.handleDeleteUser}>Delete your account</button>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUsername: state.auth.login.result.username
  };
};

export default connect(mapStateToProps)(
  withAsyncAction("users", "deleteUser")(DeleteUserButton)
);
