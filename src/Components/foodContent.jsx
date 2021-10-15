import React, { useEffect, useState } from "react";
import { Options } from "../utils/Options";
import { paginate } from "../utils/paginate";
import { FoodData } from "../utils/foodData";
import Count from "./Reusable-components/count";
import { Button, Card, Col } from "react-bootstrap";
import FootItems from "./Reusable-components/foodItem";
import { Container, Jumbotron, Row } from "react-bootstrap";
import { Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import Pagination from "../Components/Reusable-components/Pagination";

function FoodContent({ searchField }) {
  const [pageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [distance, setDistance] = useState(0);
  const [allData, setAllData] = useState([]);
  const [select, setSelect] = useState([]);
  const [itemSelect, setItemSelect] = useState([]);

  const getOptions = () => {
    setSelect(Options);
  };

  const getFoodData = () => {
    setAllData(FoodData);
  };
  useEffect(() => {
    getOptions();
    getFoodData();
  }, []);

  const filterItems = allData.filter((m) => {
    if (
      searchField &&
      !m.item.toLowerCase().includes(searchField.toLowerCase())
    ) {
      return false;
    }
    if (
      itemSelect.length > 0 &&
      !itemSelect.some((catagory) => m.foodChoices.includes(catagory))
    ) {
      return false;
    }
    return true;
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const onPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleCheckCatagories = (e) => {
    if (e.target.checked) {
      setItemSelect(itemSelect.concat(e.target.name));
    } else {
      setItemSelect(
        itemSelect.filter((catagory) => e.target.name !== catagory)
      );
    }
  };

  const paginatedItem = paginate(filterItems, currentPage, pageSize);

  console.log("select", select);
  return (
    <>
      <div className="m-5">
        <Container
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
                      /* item={FoodData.map((item) => item.id)} */
                      item={filterItems}
                      label="result"
                    />
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
                  <>
                    <Col
                      sm={12}
                      md={10}
                      lg={3}
                      /* style={{ borderRadius: "20px" }} */
                    >
                      <Card
                        style={{
                          height: "22rem",
                          backgroundColor: "black",
                          borderRadius: "26px",
                        }}
                      >
                        <Card.Body className="text-right">
                          <>
                            <h5 className="m-1 mt-4" style={{ color: "gray" }}>
                              Price
                            </h5>
                            <Form.Group controlId="formBasicRange">
                              {/*       <Form.Label>Range</Form.Label> */}
                              <OverlayTrigger
                                placement="top"
                                overlay={
                                  <Tooltip>
                                    {distance}
                                    {"   "}€
                                  </Tooltip>
                                }
                              >
                                <Form.Control
                                  style={{ width: "12rem" }}
                                  type="range"
                                  className="mt-3"
                                  placement="top"
                                  defaultValue="{distance}"
                                  onChange={(e) => setDistance(e.target.value)}
                                />
                              </OverlayTrigger>
                            </Form.Group>
                          </>
                          <h4 className="m-1 mt-5" style={{ color: "gray" }}>
                            Foot Choices
                          </h4>
                          <>
                            <Form.Group as={Row} className="mt-4">
                              <Col sm={10}>
                                {select.foodChoices &&
                                  select.foodChoices?.map((i) => {
                                    return (
                                      <div
                                        key={i.id}
                                        style={{
                                          display: "flex",
                                          overflow: "auto",
                                          alignItems: "center",
                                          flexDirection: "row",
                                          justifyContent: "flex-start",
                                        }}
                                      >
                                        <Form.Check
                                          style={{ color: "gray" }}
                                          type="checkbox"
                                          name={i.label}
                                          id={`default-${i.label}`}
                                          onClick={handleCheckCatagories}
                                        />
                                        <span>{i.label}</span>
                                      </div>
                                    );
                                  })}
                              </Col>
                            </Form.Group>
                          </>
                        </Card.Body>
                      </Card>
                    </Col>
                  </>
                  <Col sm={12} md={10} lg={9}>
                    {/*   <Container> */}
                    <FootItems data={paginatedItem} />
                    <Container className="justify-content-center mt-2">
                      <Pagination
                        pageSize={pageSize}
                        onNextPage={onNextPage}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                        onPreviousPage={onPreviousPage}
                        itemsCount={filterItems?.length}
                      />
                    </Container>
                    {/*    </Container> */}

                    {/* <Container className="text-align center mt-2">
                      <Pagination
                        pageSize={pageSize}
                        onNextPage={onNextPage}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                        onPreviousPage={onPreviousPage}
                        itemsCount={filterItems?.length}
                      />
                    </Container> */}
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

export default FoodContent;
