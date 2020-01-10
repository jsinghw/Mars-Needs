import "./Home.css"
import React from "react"
import { Menu } from "../components"
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Project Description</h2>
        <div id="projectDescriptionWrapper">
          <div id="projectDescription">
            This is just a placeholder description for now.
          </div>
          <Button id="submitButtonRedirect" variant="primary" size ="lg">Submit a Proposal</Button>
        </div>
      </>
    )
  }
}

export default Home
