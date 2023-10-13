import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import crown from "./images/crown.png";
const Head = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={crown}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            King Corp.
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Head;
