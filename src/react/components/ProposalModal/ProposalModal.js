import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ProposalModal.css";

class ProposalModal extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <>
        <Modal size="lg" data={this.props.data} show={this.props.show}>
          <Modal.Header>
            <Modal.Title>{this.props._id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Title: {this.props.proposal_title}</p>
            <p>Submission Date: December 03 2019</p>
            <p>Category: {this.props.proposal_category}</p>
            <p>{this.props.proposal_details}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.toggle}>
              Close
            </Button>
            <Button variant="secondary" onClick={this.showData}>
              data
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ProposalModal;
