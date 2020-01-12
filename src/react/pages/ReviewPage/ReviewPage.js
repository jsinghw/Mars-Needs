import React from "react";
import { Menu } from "../../components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  InputGroup,
  FormControl,
  Button,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownButton
} from "react-bootstrap";
import "./ReviewPage.css";

class ReviewPage extends React.Component {
  render() {
    return (
      <Container>
        <Menu />
        <h1>Review Page</h1>
        <Row>
          <Col xs={3}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search Keyword"
                aria-label="Search Keyword"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="primary">Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col>
            <DropdownButton
              id="dropdown-basic-button"
              title="Filter by Category"
              variant="outline-secondary"
            >
              <Dropdown.Item href="#/action-1">Category 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Category 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Category 3</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col>
            <Button variant="primary">Show All</Button>
          </Col>
          <Col>
            <DropdownButton
              id="dropdown-basic-button"
              title="Results per Page"
              variant="outline-secondary"
            >
              <Dropdown.Item href="#/action-1">Category 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Category 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Category 3</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
        <Table responsive striped bordered hover className="table-width">
          <thead>
            <tr>
              <th>Proposal ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Submission Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default ReviewPage;
