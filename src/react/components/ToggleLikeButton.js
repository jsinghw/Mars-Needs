import React from "react";
import { connect } from "../HOCs";
import { toggleLike } from "../../redux/actionCreators";

class ToggleLikeButton extends React.Component {
  handleToggleLike = event => {
    this.props.toggleLike(this.props.messageId);
  };

  render() {
    const isLiked = this.props.likes.find(
      like => like.username === this.props.loggedInUsername
    );
    return (
      <button onClick={this.handleToggleLike}>
        {isLiked ? "Unlike" : "Like"}
      </button>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedInUsername: state.auth.login.result.username
  };
};

const mapDispatchToProps = {
  toggleLike
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleLikeButton);
