import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"
import "./Proposal.css";
import { Menu, ProposalForm } from "../../components";

class Proposal extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <div id="formContainer">
          <ProposalForm />
        </div>
      </>
    );
  }
}
export default Proposal;
