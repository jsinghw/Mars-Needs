import React from "react";
import { Menu } from "../../components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { MDBDataTable, MDBBtn } from "mdbreact";
import { Modal } from "../../components";
import "./ReviewPage.css";

class ReviewPage extends React.Component {
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
      rows: [
        {
          number: "AA493892B2",
          title: "Red Planet Donuts",
          category: "Food & Drink",
          submissionDate: "2020-01-07",
          file: (
            <MDBBtn className="purple" outline size="sm">
              File
            </MDBBtn>
          )
        },
        {
          number: "AA493t422B2",
          title: "Space Shoes",
          category: "Clothing",
          submissionDate: "2020-01-07",
          file: (
            <MDBBtn className="purple" outline size="sm">
              File
            </MDBBtn>
          )
        },
        {
          number: "AA4952242B2",
          title: "Hover Board",
          category: "Vechicles",
          submissionDate: "2020-01-07",
          file: (
            <MDBBtn className="purple" outline size="sm">
              File
            </MDBBtn>
          )
        },
        {
          number: "AA49535B2",
          title: "Wall-E",
          category: "Robotics",
          submissionDate: "2020-01-07",
          file: (
            <MDBBtn className="purple" outline size="sm">
              File
            </MDBBtn>
          )
        },
        {
          number: "AA493231122B2",
          title: "Ray Gun",
          category: "Weapons",
          submissionDate: "2020-01-07",
          file: (
            <MDBBtn className="purple" outline size="sm">
              File
            </MDBBtn>
          )
        },
        {
          number: "AA42332292B2",
          title: "Mars Tents",
          category: "Housing",
          submissionDate: "2020-01-07",
          file: (
            <MDBBtn className="purple" outline size="sm">
              File
            </MDBBtn>
          )
        },
        {
          number: "AA4554592B2",
          title: "Mars Cookies",
          category: "Food & Drink",
          submissionDate: "2020-01-07",
          file: (
            <MDBBtn className="purple" outline size="sm">
              File
            </MDBBtn>
          )
        },
        {
          number: "AA49366667B2",
          title: "Lightsaber",
          category: "Weapons",
          submissionDate: "2020-01-07",
          file: (
            <MDBBtn className="purple" outline size="sm">
              File
            </MDBBtn>
          )
        },
        {
          number: "AA493822TRF2",
          title: "Solar Panels",
          category: "Energy",
          submissionDate: "2020-01-07",
          file: (
            <MDBBtn className="purple" outline size="sm">
              File
            </MDBBtn>
          )
        },
        {
          number: "AA493JGJD453",
          title: "Stuf and things",
          category: "Misc",
          submissionDate: "2020-01-07",
          file: (
            <MDBBtn className="purple" outline size="sm">
              File
            </MDBBtn>
          )
        },
        {
          number: "AA49GJ452GG2",
          title: "Mars Soap",
          category: "Personal Care",
          submissionDate: "2020-01-07",
          file: (
            <MDBBtn className="purple" outline size="sm">
              File
            </MDBBtn>
          )
        }
      ]
    };

    return (
      <Container>
        <Menu />
        <h1>Review Page</h1>
        <MDBDataTable striped bordered hover data={data} />
      </Container>
    );
  }
}

export default ReviewPage;
