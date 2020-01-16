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
        //console.log(this.state.rows);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  toggle = () => {
    this.setState({
      show: !this.state.show
    });
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
      console.log(row);
      return data.rows.push({
        number: row._id,
        title: row.proposal_title,
        category: row.proposal_category,
        submissionDate: "need a date"
      });
    });

    for (let i = 0; i < data.rows.length; i++) {
      console.log(data.rows[i]);

      data.rows[i].file = (
        <MDBBtn
          className="purple"
          outline
          size="sm"
          onClick={e => {
            this.toggle();
          }}
        >
          Button
        </MDBBtn>
      );
    }

    console.log(data);
    return (
      <Container>
        <Menu />
        <Modal show={this.state.show} data={data} toggle={this.toggle} />
        <MDBBtn
          className="purple"
          outline
          size="sm"
          onClick={e => {
            this.toggle();
          }}
        >
          Button
        </MDBBtn>
        <MDBDataTable striped bordered hover data={data} />
      </Container>
    );
  }
}

export default ReviewPage;
