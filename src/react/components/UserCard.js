import React from "react";
import { withAsyncAction } from "../HOCs";
import { Spinner, DeleteUserButton, UploadUserPicture } from "../components";

// const fakeUser = {
//   pictureLocation: null,
//   username: "bobross",
//   displayName: "Bob Ross",
//   about:
//     "If you overwork it you become a cloud killer. There's nothing worse than a cloud killer. This is unplanned it really just happens. No pressure. Just relax and watch it happen.",
//   googleId: null,
//   createdAt: "1984-11-18T15:10:16.100Z",
//   updatedAt: "2019-11-18T15:10:16.100Z"
// };

const defaultImage =
  "https://image.shutterstock.com/image-vector/user-icon-trendy-flat-style-260nw-418179865.jpg";

class UserCard extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.username);
  }

  componentDidUpdate(prevProps) {
    if (this.props.username !== prevProps.username) {
      this.props.getUser(this.props.username);
    }
  }

  render() {
    if (this.props.result === null) {
      return <Spinner name="circle" color="blue" />;
    }

    const user = this.props.result.user;

    return (
      <div
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "1em",
          margin: "2em",
          maxWidth: "20em"
        }}
      >
        <img
          src={
            user.pictureLocation
              ? "https://kwitter-api-benjmm.herokuapp.com" +
                user.pictureLocation
              : defaultImage
          }
          alt="User Profile"
        />
        <h3>{user.displayName}</h3>
        <p>{user.username}</p>
        <p>{user.about ? user.about : "No user profile details provided"}</p>
        <p>Created: {new Date(user.createdAt).toDateString()}</p>
        <p>Last Updated: {new Date(user.updatedAt).toDateString()}</p>
        <DeleteUserButton username={this.props.username} />
        <UploadUserPicture username={this.props.username} />
      </div>
    );
  }
}

export default withAsyncAction("users", "getUser")(UserCard);
