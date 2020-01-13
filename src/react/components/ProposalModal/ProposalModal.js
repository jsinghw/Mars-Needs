import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class ProposalModal extends React.Component {
  render() {
    return (
      <>
        <Modal>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Proposal: {this.props.title}</p>
            <p>Submission Date: {this.props.date}</p>
            <p>Category: {this.props.category}</p>
            <p>Name: {this.props.name}</p>
            <p>Email: {this.props.email}</p>
            <p>Phone: {this.props.phone}</p>
            <p>Website: {this.props.website}</p>
            <p>Company: {this.props.company}</p>
            <p>Industry: {this.props.industry}</p>
            <p>Details: {this.props.details}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save Changes</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ProposalModal;
