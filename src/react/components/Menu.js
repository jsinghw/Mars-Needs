import React from "react";
import { NavLink } from ".";
import "./Menu.css";
import { withAsyncAction, connect } from "../HOCs";
import { Navbar, Nav } from "react-bootstrap";
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: salmon;
  }

  .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &: hover {
      color: white;
    }
  }
`;

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <Styles>
      <Navbar expand="lg">
       <Navbar.Brand href="https://www.marssociety.org/" target="new">
        <img src="https://www.marssociety.org/wp-content/themes/tms2020/img/MarsSociety_Main_Logo.jpg" 
        alt="Mars Society Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Item><NavLink activeClassName="selected" to="/">Home</NavLink></Nav.Item>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Styles>
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
