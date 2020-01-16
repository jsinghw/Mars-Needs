import React from "react"
// import "bootstrap/dist/css/bootstrap.min.css"
import "./Proposal.css"
import { Menu } from "../../components"
import ProposalForm from "../../components/ProposalForm/ProposalForm"

class Proposal extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2 id="proposalHeader">Proposal</h2>
        <div id="formContainer">
        <br></br>
          <ProposalForm />
        </div>
      </>
    )
  }
}
export default Proposal
