import "./Home.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "../../components";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { HeroImage } from "../../components/HeroImage";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <HeroImage></HeroImage>
        <div id="projectDescriptionWrapper">
          <div id="projectDescription">
            <p>
              Welcome to the Mars Needs Proposals project website. In accordance
              with the stated goal of The Mars Society to aid in the human
              exploration and settlement of the planet Mars, the Mars Needs
              project seeks to collect ideas for products and services that
              might contribute to the long-term success of a future Mars colony.
            </p>
            <p>
              Humanity’s strategy for expansion to the Red Planet can be summed
              up in the phrase “arrive, survive, and thrive.” All of these are
              critical components of the process, but most of our efforts to
              this point have been focused on developing an efficient means of
              travel to Mars. As we come closer to achieving this milestone with
              initiatives from companies like SpaceX, we feel it is vital that
              we begin to direct more attention towards the challenges of
              surviving -- and thriving -- once we get there. We want our first
              colony ship to Mars to be loaded with all the best humanity has to
              offer, and the time for us to be developing those products and
              services is now.
            </p>
            <p>
              Our aim in collecting this information is to connect people who
              have ideas with the industry professionals and investors who have
              the resources to make them happen, with the ultimate goal of
              securing a brighter future for humanity on Mars.
            </p>
            <p>
              Do you have an idea for a product or service that could help a
              future Mars colony to survive and thrive? We’d love to hear it!
              Submit your proposal and become part of humanity’s greatest
              adventure yet!
            </p>
          </div>
          <NavLink to="/proposal">
            <Button id="submitButtonRedirect" variant="primary" size="lg">
              Submit a Proposal
            </Button>
          </NavLink>
        </div>
      </>
    );
  }
}

export default Home;
