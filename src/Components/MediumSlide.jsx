import React, { useState } from "react";
import {
  Col,
  Container,
  Jumbotron,
  Row,
  Button,
  Form,
  FormControl,
  ListGroup,
} from "react-bootstrap";
import { finlandCity } from "../utils/data";
import axios from "axios";
import useSWR from "swr";

function MediumSlide({ defaultCity, setDefaultCity }) {
  const [searchInput, setSearchInput] = useState("");
  const [city, setCities] = useState([]);
  //const [defaultCity, setDefaultCity] = useState("Helsinki");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  /* const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data: allCities } = useSWR(finlandCity, fetcher); */

  console.log("data here", searchInput);
  //console.log("data here", allCities);

  const filterCity = finlandCity.filter((allC) => {
    if (
      searchInput &&
      !allC.city.toLowerCase().includes(searchInput.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <>
      <Container
        className="p-5 mt-5 mr-5"
        style={{
          height: "100vh",
          display: "flex",
        }}
      >
        <Jumbotron className="p-5 mt-0" style={{ width: "70rem" }}>
          <div style={{ backgroundColor: "#0000009D" }}>
            <Row>
              <Form>
                <Row>
                  <Col className="mt-3" style={{ flexBasis: "15rem" }}>
                    <Form.Label
                      className="p-2"
                      style={{ color: "#fff", zIndex: 2 }}
                    >
                      <p>where</p>
                      <FormControl
                        placeholder="from"
                        onChange={(e) => handleSearch(e)}
                      />
                      <ListGroup
                        variant="flush"
                        style={{
                          color: "#000000",
                          position: "absolute",
                          backgroundColor: "#ffffff",
                        }}
                      >
                        {filterCity && (
                          <>
                            <div
                              style={{
                                marginTop: "5px",
                                width: "207px",
                                height: "150px",
                                boxShadow: "rgba(0,0,0,35) 0px 5px 15px",
                                overflow: "hidden",
                                overflowY: "auto",
                              }}
                            >
                              {filterCity.map((city, index) => (
                                <ListGroup.Item key={index}>
                                  <p className="pl-1">{city.city}</p>
                                </ListGroup.Item>
                              ))}
                            </div>
                          </>
                        )}
                      </ListGroup>
                    </Form.Label>
                  </Col>
                  <Col className="mt-3" style={{ flexBasis: "15rem" }}>
                    <Form.Label
                      className="p-2"
                      style={{ color: "#fff", zIndex: 2 }}
                    >
                      <p>destination</p>
                    </Form.Label>
                    <Form.Control placeholder="to" />
                  </Col>
                </Row>
                <br />
                <br />
                <Row>
                  <Col className="mt-3" style={{ flexBasis: "15rem" }}>
                    <Form.Label
                      className="p-2"
                      style={{ color: "#fff" }}
                      onChange={() => handleSearch()}
                    >
                      departure date & time
                    </Form.Label>
                    <Form.Control className="p-2" placeholder="choose time" />
                  </Col>
                  <Col className="mt-3" style={{ flexBasis: "15rem" }}>
                    <Form.Label
                      className="p-2"
                      style={{ color: "#fff" }}
                      onChange={() => handleSearch()}
                    >
                      train model
                    </Form.Label>
                    <Form.Control placeholder="type here" />
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
