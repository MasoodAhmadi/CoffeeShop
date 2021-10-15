import axios from "axios";
//import Select from "react-select";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { finlandCity } from "../utils/data";
import React, { useEffect, useState } from "react";
import { Col, Container, Jumbotron, Row, Button } from "react-bootstrap";

function OrderForm({ searchInput, setSearchInput }) {
  const history = useHistory();
  const [trains, setTrains] = useState([]);

  const getTrainModel = () => {
    try {
      axios
        .get("https://rata.digitraffic.fi/api/v1/live-trains?version=0")
        .then((res) => res.data)

        .then((res) => {
          setTrains(res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrainModel();
  }, []);

  const routeToNextPage = () => {
    history.push("/orders");
  };

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
          <div className="m-3" style={{ color: "#FFFFFF" }}>
            checkout our
            <br />
            <h3>Best Cousine</h3>
          </div>
          <div style={{ backgroundColor: "#0000009D" }}>
            <Row>
              <Form
                /* onSubmit={onSubmit()} */ /* onSubmit={() => handleSubmit()} */
                noValidate
              >
                <Row>
                  <Col className="mt-3" style={{ flexBasis: "15rem" }}>
                    <Form.Label
                      className="p-2"
                      style={{ color: "#fff", zIndex: 2 }}
                    >
                      where
                    </Form.Label>

                    {/*  <Select
                      isMulti
                      name="cities"
                      type="text"
                      onMenuOpen={filterCity}
                      options={OnlyCity()}
                      onChange={() => handleChange()}
                      data-live-search="true"
                      className="basic-multi-select"
                      classNamePrefix="select"
                    /> */}
                    <Form.Group>
                      <Form.Control
                        as="select"
                        isMulti
                        placeholder="search city"
                      >
                        {searchInput === ""
                          ? finlandCity.map((m) => {
                              return (
                                <option placeholder="search city" key={m.city}>
                                  {m.city}
                                </option>
                              );
                            })
                          : null}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="mt-3" style={{ flexBasis: "15rem" }}>
                    <Form.Label
                      className="p-2"
                      style={{ color: "#fff", zIndex: 2 }}
                    >
                      destination
                    </Form.Label>
                    {/*  <Select
                      
                      style={{ backgroundColor: "#fff" }}
                      isMulti
                      name="cities"
                      onMenuOpen={filterCity}
                      options={filterCity.map((i) => ({
                        label: i.city,
                        value: i.country,
                      }))}
                      className="basic-multi-select"
                      classNamePrefix="select"
                    /> */}
                    <Form.Group>
                      <Form.Control as="select" isMulti>
                        {searchInput === ""
                          ? finlandCity.map((m) => {
                              return <option key={m.city}>{m.city}</option>;
                            })
                          : null}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <br />
                <br />
                <Row>
                  <Col className="mt-3" style={{ flexBasis: "15rem" }}>
                    <Form.Label
                      className="p-2"
                      style={{ color: "#fff" }}
                      onChange={() => console("text here")}
                    >
                      departure date & time
                    </Form.Label>
                    <Form.Control
                      className="p-2"
                      type="datetime-local"
                      placeholder="choose time"
                      style={{ marginTop: "0rem" }}
                    />
                  </Col>

                  <Col className="mt-3" style={{ flexBasis: "15rem" }}>
                    <Form.Label
                      className="p-2"
                      style={{ color: "#fff" }}
                      onChange={() => console("text here")}
                    >
                      train model
                    </Form.Label>
                    {/*  <Select
                      isMulti
                      name="cities"
                      
                      options={trains.map((i) => ({
                        label: i.trainType + i.trainNumber,
                        value: i.trainType + i.trainNumber,
                      }))}
                      className="basic-multi-select"
                      classNamePrefix="select"
                      onChange={() => console.log("something changed")}
                    /> */}
                    <Form.Group>
                      <Form.Control as="select" isMulti>
                        {trains.map((i) => {
                          return (
                            <option key={i.trainNumber}>
                              {i.trainType + i.trainNumber}
                            </option>
                          );
                        })}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="m-1 text-center">
                    <Button
                      type="submit"
                      className="mt-3"
                      style={{ width: "7rem", height: "3rem" }}
                      variant="secondary"
                      onClick={routeToNextPage}
                    >
                      Search
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Row>
          </div>
        </Jumbotron>
      </Container>
    </>
  );
}

export default OrderForm;

/* const filterCity = finlandCity.filter((allC) => {
    if (
      searchInput &&
      !allC.city.toLowerCase().includes(searchInput?.toLowerCase())
    ) {
      return false;
    }
    return true;
  }); */

/* const OnlyCity = () => {
    return filterCity.map((i) => ({
      label: i.city,
      value: i.country,
    }));
  }; */