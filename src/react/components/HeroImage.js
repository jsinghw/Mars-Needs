import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import marsImage from "../../assets/marsImage.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${marsImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const HeroImage = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Mars Needs Proposals</h1>
      </Container>
    </Jumbo>
  </Styles>
);
