import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ProposalModal.css";

class ProposalModal extends React.Component {
  showData = () => {
    console.log("hi");
    console.log(this.props.data);
    console.log(this.props.data.rows);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <>
        <Modal size="lg" show={this.props.show}>
          <Modal.Header>
            <Modal.Title>{this.props.data.rows[0].number}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Title: {this.props.data.rows[0].title}</p>
            <p>Submission Date: {this.props.data.rows[0].submissionDate}</p>
            <p>Category: {this.props.data.rows[0].category}</p>
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
