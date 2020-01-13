import "./Home.css"
import React from "react"
import { Menu } from "../../components"
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
            <div>This is just a placeholder description for now.</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              blandit lacus eget consectetur sollicitudin. Pellentesque ut
              tincidunt ligula. Cras facilisis urna et pretium sodales. Nulla
              tortor nisi, laoreet at enim at, venenatis accumsan dolor.
              Praesent viverra magna non turpis finibus, vel finibus leo
              tincidunt. Donec accumsan justo tellus, a molestie arcu laoreet
              eget. Vivamus tempus neque eu efficitur elementum. Suspendisse a
              nisi ac felis auctor pretium ac eu quam. Suspendisse eu dui sit
              amet ante iaculis condimentum. Nullam et dignissim velit.
              Suspendisse dictum orci vitae libero consectetur elementum. Sed id
              lacus quis quam aliquam semper non non elit. Sed id diam vitae leo
              tincidunt euismod. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. In eu neque quis odio
              congue porttitor vel a ligula. Vestibulum est ante, suscipit sed
              venenatis vitae, tristique ac augue. Sed eu laoreet sem. Vivamus
              sit amet quam at purus fringilla blandit quis et augue. Etiam at
              molestie diam. Pellentesque quis ex ante. Integer ac nunc ex.
              Curabitur suscipit sapien vel turpis ullamcorper suscipit. Cras ut
              elementum quam. Mauris luctus ac augue pretium efficitur. In eu
              aliquam ante. Pellentesque facilisis urna vitae condimentum
              mattis. Pellentesque justo odio, accumsan et urna eget, pulvinar
              auctor turpis. Aliquam semper vel erat a fringilla. Vivamus
              ultrices erat tortor, sed lacinia nibh blandit convallis. Integer
              semper ex vel nisl feugiat varius. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia Curae; Aenean
              bibendum faucibus erat non eleifend. Nulla at eleifend turpis. Sed
              mollis orci id mi mollis, vitae ullamcorper enim tempor. Fusce
              eget quam at ex molestie semper. Donec vitae tempor lorem.
              Curabitur laoreet tincidunt orci, a rhoncus ex condimentum non. Ut
              euismod elementum hendrerit. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Ut eu dui
              turpis. Nunc feugiat, mi quis feugiat sagittis, lacus neque
              sollicitudin erat, ultrices laoreet metus sapien auctor orci.
            </div>
          </div>
          <Button id="submitButtonRedirect" variant="primary" size="lg">
            Submit a Proposal
          </Button>
        </div>
      </>
    )
  }
}

export default Home
