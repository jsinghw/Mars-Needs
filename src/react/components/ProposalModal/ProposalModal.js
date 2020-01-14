import React from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import "./ProposalModal.css";

class ProposalModal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <>
        <div>
          <h1>hello</h1>
        </div>
        <div className="modalDiv" id="modalDiv">
          <h2>Modal Window</h2>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus
            non fuga omnis a sed impedit explicabo accusantium nihil doloremque
            consequuntur.
          </div>
          <div className="actions">
            <button className="toggle-button">OK</button>
          </div>
        </div>
      </>
    );
  }
}

export default ProposalModal;
