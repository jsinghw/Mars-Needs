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
            <p>Name: {this.props.name}</p>
            <p>E-mail: {this.props.email}</p>
            <p>Phone: {this.props.phone_number}</p>
            <p>
              Website:{" "}
              <a
                href={this.props.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.props.website}
              </a>
            </p>
            <p>Company: {this.props.company}</p>
            <p>Industry: {this.props.industry}</p>
            <p>
              Details: <br /> {this.props.proposal_details}
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
