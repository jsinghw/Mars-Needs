import "./Home.css";
import React from "react";
import { Menu } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Request for Proposals</h2>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
