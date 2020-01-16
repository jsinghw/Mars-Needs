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
        <div id="formContainer">
          <ProposalForm />
        </div>
      </>
    )
  }
}
export default Proposal
