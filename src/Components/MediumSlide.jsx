import React from "react";
import { Col, Container, Jumbotron, Row, Button, Form } from "react-bootstrap";

function MediumSlide() {
  return (
    <>
      <Container
        className="p-5 mt-5 mr-5"
        style={{
          height: "100vh",
          display: "flex",
        }}
      >
        {/* <div> */}
        {/*  <p className="m-3 text-white">
            <h4>check out our</h4> <br />
            <h3>Best Cousine</h3>
          </p> */}

        <Jumbotron className="p-5 mt-0" style={{ width: "70rem" }}>
          <div style={{ backgroundColor: "#0000009D" }}>
            <Row>
              <Form>
                <Row>
                  <Col className="mt-3" /* style={{ flexBasis: "10rem" }} */>
                    <Form.Label className="p-2" style={{ color: "#fff" }}>
                      Text here
                    </Form.Label>
                    <Form.Control placeholder="Text here 1" />
                  </Col>
                  <Col className="mt-3" /* style={{ flexBasis: "10rem" }} */>
                    <Form.Label className="p-2" style={{ color: "#fff" }}>
                      Text here
                    </Form.Label>
                    <Form.Control placeholder="Text here 2" />
                  </Col>
                </Row>
                <br />
                <br />
                <Row>
                  <Col className="mt-3" /* style={{ flexBasis: "10rem" }} */>
                    <Form.Label className="p-2" style={{ color: "#fff" }}>
                      Text here
                    </Form.Label>
                    <Form.Control className="p-2" placeholder="Text here 3" />
                  </Col>
                  <Col className="mt-3" /* style={{ flexBasis: "10rem" }} */>
                    <Form.Label className="p-2" style={{ color: "#fff" }}>
                      Text here
                    </Form.Label>
                    <Form.Control placeholder="Text here 4" />
                  </Col>
                </Row>
                <Button>Search</Button>
              </Form>
            </Row>
          </div>
        </Jumbotron>
        {/*  </div> */}
      </Container>
    </>
  );
}

export default MediumSlide;
/** 
 *  <Container
        className="p-5 mt-5 mr-5"
        style={{ height: "100vh", display: "flex" }}
      >
       
        <Jumbotron className="p-5 mt-0">
          <div style={{ backgroundColor: "#0000009D" }}>
            <Row>
              <Col
                md={6}
                sm={6}
                xs={8}
                lg={6}
                className="mt-3"
                style={{ flexBasis: "25rem" }}
              >
                <div
                  style={{
                    paddingRight: "70%",
                    borderRadius: "0.3rem",
                  }}
                >
                  <h6 style={{ color: "#ffffff", textAlign: "center" }}>
                    Where:
                  </h6>
                </div>
                <Card className="" style={{ width: "26rem", height: "12rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col
                md={6}
                sm={6}
                xs={8}
                lg={6}
                className="mt-3"
                style={{ flexBasis: "25rem" }}
              >
                <div
                  style={{
                    paddingRight: "60%",
                    borderRadius: "0.3rem",
                  }}
                >
                  <h6
                    className="mr-3"
                    style={{ color: "#ffffff", textAlign: "center" }}
                  >
                    Destination:
                  </h6>
                </div>
                <Card style={{ width: "25rem", height: "12rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          <Button>Search</Button>
        </Jumbotron>
        
      </Container>
 */
