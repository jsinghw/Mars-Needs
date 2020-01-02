import React from "react";
import { LoginForm, Menu, Link } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
        <h4>
          Don't have an account? <Link to="/register">Register Here</Link>
        </h4>
      </>
    );
  }
}

//test comment

export default userIsNotAuthenticated(Home);
