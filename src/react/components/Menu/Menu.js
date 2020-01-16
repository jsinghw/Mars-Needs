import React from "react";
import { NavLink } from "..";
import "./Menu.css";
import { withAsyncAction, connect } from "../../HOCs";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div id="menu">
        <h1>Mars Needs</h1>
        <NavLink activeClassName="selected" to="/">
          Home
        </NavLink>
        <a href="https://www.marssociety.org/" target="new">
          The Mars Society
        </a>
        <form>
          <input type="text" size="10" placeholder="User Name"></input>
          <input type="password" size="10" placeholder="Password"></input>
          <button type="submit">
            <NavLink to="/reviewpage">Log In</NavLink>
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.login.result && state.auth.login.result.username
  };
};

export default connect(mapStateToProps)(
  withAsyncAction("auth", "logout")(Menu)
);
