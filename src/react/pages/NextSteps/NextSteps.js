import  React from "react"
import { Link } from "react-router-dom"
import { Menu } from "../../components"

class NextSteps extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <h2>Thank You for Your Proposal</h2>
        <div id="next-steps-body-container">
        <div>
          1. The Mars Society may contact you via the contact information you
          provided in order to discuss your proposal further.
        </div>
        <div>
          2. If you have any questions about your proposal or the project in
          general, please direct them to address@marssociety.org.
        </div>
        <div>
          3. If you would like to get more involved with the Mars Society,
          <a href="https://www.marssociety.org/" target ="new" > join here</a>!
        </div>
        <br></br>
        <div>
          You can also sumbit
          <Link to="/proposal"> another proposal </Link>
          or
          <Link to="/" > return home</Link>
          .
        </div>
        </div>
      </React.Fragment>
    )
    }
}
export default NextSteps