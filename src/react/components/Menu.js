import React from "react";
import { Link, NavLink } from ".";
import "./Menu.css";
import { withAsyncAction, connect } from "../HOCs";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div id="menu">
        <h1>Mars Needs</h1>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <NavLink
              activeClassName="selected"
              to={`/profile/${this.props.username}`}
            >
              Your Profile
            </NavLink>
            <NavLink activeClassName="selected" to="/messagefeed">
              Message Feed
            </NavLink>
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
        )}
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
