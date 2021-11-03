//import logo from "./logo.svg";
import React from "react";
import { Button, Card, Col, Container, Jumbotron, Row } from "react-bootstrap";
//import Afghanistanflag from "../Images/A.jpg";

function Footer() {
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col xs={12} md={3} sm={6} lg={3}>
            <strong>Contacts:</strong>
          </Col>
          <Col xs={12} md={3} sm={6} lg={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Footer Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3} sm={6} lg={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Footer Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3} sm={6} lg={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Footer Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Footer;
