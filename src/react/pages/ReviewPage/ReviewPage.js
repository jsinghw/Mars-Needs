import React from "react";
import { Menu } from "../../components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { MDBDataTable, MDBBtn } from "mdbreact";
import { Modal } from "../../components";
import "./ReviewPage.css";
import axios from "axios";

class ReviewPage extends React.Component {
  state = {
    show: false,
    rows: [],
    _id: "",
    name: "",
    email: "",
    proposal_title: "",
    proposal_category: "",
    proposal_details: "",
    company: "",
    industry: "",
    phone_number: "",
    website: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/proposals")
      .then(response => {
        //console.log(response);
        this.setState({ rows: response.data });
        console.log(this.state.rows);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  toggle = () => {
    this.setState({
      show: !this.state.show
    });
    console.log(this.state);
  };

  updateModal = rowIndex => {
    this.setState({
      _id: this.state.rows[rowIndex]._id,
      name: this.state.rows[rowIndex].name,
      email: this.state.rows[rowIndex].email,
      proposal_title: this.state.rows[rowIndex].proposal_title,
      proposal_category: this.state.rows[rowIndex].proposal_category,
      proposal_details: this.state.rows[rowIndex].proposal_details,
      company: this.state.rows[rowIndex].company,
      industry: this.state.rows[rowIndex].industry,
      phone_number: this.state.rows[rowIndex].phone_number,
      website: this.state.rows[rowIndex].website
    });

    //console.log(rowIndex);
    //console.log(this.state.rows[rowIndex].name);
  };

  render() {
    const data = {
      columns: [
        {
          label: "Number",
          field: "number",
          sort: "asc"
        },
        {
          label: "Title",
          field: "title",
          sort: "asc"
        },
        {
          label: "Category",
          field: "category",
          sort: "asc"
        },
        {
          label: "Submission Date",
          field: "submissionDate",
          sort: "asc"
        },
        {
          label: "File",
          field: "file"
        }
      ],
      rows: []
    };

    this.state.rows.map(function(row, i) {
      //console.log(row);
      return data.rows.push({
        number: row._id,
        title: row.proposal_title,
        category: row.proposal_category,
        submissionDate: "need a date"
      });
    });

    for (let i = 0; i < data.rows.length; i++) {
      //console.log(data.rows[i]);
      data.rows[i].file = (
        <MDBBtn
          className="purple"
          outline
          size="sm"
          onClick={e => {
            //console.log(i);
            this.updateModal(i);
            this.toggle();
          }}
        >
          Button
        </MDBBtn>
      );
    }

    //console.log(data);
    return (
      <Container>
        <Menu />
        <Modal
          show={this.state.show}
          toggle={this.toggle}
          _id={this.state._id}
          name={this.state.name}
          email={this.state.email}
          proposal_title={this.state.proposal_title}
          proposal_category={this.state.proposal_category}
          proposal_details={this.state.proposal_details}
          company={this.state.company}
          industry={this.state.industry}
          phone_number={this.state.phone_number}
          website={this.state.website}
        />
        <MDBDataTable striped bordered hover data={data} />
      </Container>
    );
  }
}

export default ReviewPage;
