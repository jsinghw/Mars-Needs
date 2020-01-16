import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "../../components";

class NextSteps extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <h2>Thank You for Your Proposal</h2>
        <div id="next-steps-body-container">
          <div>
            &bull;Your proposal reference number is 5e1e8e96199ba517dd98984c.
            Please record it for referencing this proposal in future
            communications with The Mars Society.
          </div>
          <div>
            &bull;The Mars Society may contact you in order to discuss your
            proposal further.
          </div>
          <div>
            &bull;If you have any questions about your proposal or the project
            in general, please direct them to info@marssociety.org.
          </div>
          <div>
            &bull;If you would like to get more involved with the Mars Society,
            <a href="https://www.marssociety.org/join" target="new">
              {" "}
              join here
            </a>
            !
          </div>
          <br></br>
          <div>
            You can also sumbit
            <Link to="/proposal"> another proposal </Link>
            or
            <Link to="/"> return home</Link>.
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default NextSteps;
