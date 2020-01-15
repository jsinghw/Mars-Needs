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
        <Modal size="lg" show={this.props.show}>
          <Modal.Header>
            <Modal.Title>{this.props.number}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Title: {this.props.title}</p>
            <p>Submission Date: {this.props.submissionDate}</p>
            <p>Category: {this.props.category}</p>
            <p>
              Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.toggle}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ProposalModal;
