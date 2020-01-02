import React from "react";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
import "./LoginForm.css";

class CreateMessageForm extends React.Component {
  state = { text: "" };

  handlePost = e => {
    e.preventDefault();
    this.props.postMessage(this.state);
    this.setState({ text: "" });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <form id="login-form" onSubmit={this.handlePost}>
          <label htmlFor="text">Your message</label>
          <input
            type="text"
            name="text"
            autoFocus
            required
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button type="submit" disabled={loading}>
            Submit Message
          </button>
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default withAsyncAction("messages", "postMessage")(CreateMessageForm);
