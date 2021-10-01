import React from "react";
import { Button, Card, Col, Container, Jumbotron, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { FoodData } from "../utils/foodData";
import Count from "./Reusable/count";
import Burg from "../Images/image.jpg";

function OrderFood() {
  const history = useHistory();
  return (
    <>
      <div className="m-5">
        <Container
          /* className="m-5 mr-5" */
          style={{
            backgroundColor: "#fff",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            height: "50rem",
          }}
        >
          <Jumbotron>
            <Container className="m-4 pt-5">
              <>
                <Row>
                  <Col sm={12} md={6} lg={3} my={1}>
                    <Count
                      item={FoodData.map((item) => item.id)}
                      label="result"
                    />
                    {/*  <strong>abc</strong> */}
                  </Col>
                  <Col>
                    <Button variant="dark" size="m" style={{ width: "100px" }}>
                      full-meal
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant="dark"
                      size="m"
                      style={{ width: "115px", textAlign: "center" }}
                    >
                      course-meal
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="dark" size="m" style={{ width: "100px" }}>
                      apetizer
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="dark" size="m" style={{ width: "100px" }}>
                      drinks
                    </Button>
                  </Col>
                  <Col>
                    <Button variant="dark" size="m" style={{ width: "100px" }}>
                      children's
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={1} lg={3}>
                    ads
                  </Col>
                  <Col sm={12} md={10} lg={9}>
                    {" "}
                    <Container
                      style={{
                        background: "#000",
                        marginLeft: "-15px",
                        height: "50vh",
                      }}
                    >
                      <Card style={{ height: "20%", width: "20%" }}>
                        <Card.Img
                          variant="top"
                          src={Burg}
                          width={20}
                          height={20}
                          alt="image"
                          style={{
                            cursor: "pointer",
                            height: "17.5rem",
                            objectFit: "cover",
                          }}
                          onClick={() => history.push(`/school-search/`)}
                        />
                        <Card.Footer>
                          <div className="text-center">
                            <Button
                              variant=""
                              style={{
                                color: "white",
                                outline: "none",
                                backgroundColor: "blue",
                              }}
                              onClick={() => history.push(`/meal`)}
                            >
                              abc
                            </Button>
                          </div>
                        </Card.Footer>
                      </Card>
                    </Container>
                  </Col>
                </Row>
              </>
            </Container>
          </Jumbotron>
        </Container>
      </div>
    </>
  );
}

export default OrderFood;