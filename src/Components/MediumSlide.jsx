import React from "react";
import DesktopImage from "../Images/backgroundImageWorks.jpg";
import { Col, Container, Image, Jumbotron, Row } from "react-bootstrap";

function MediumSlide() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: "-2",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${DesktopImage})`,
        }}
      >
        <div
          alt="homepage-picture"
          style={{
            zIndex: "-5",
            width: "100%",
            height: "100%",
            backgroundColor: "#0000004D",
          }}
        >
          <Container className="pt-5" style={{ zIndex: "1" }}>
            <Jumbotron
              className="mb-4 pt-3"
              style={{ height: "100%", backgroundColor: "#0000004D" }}
            >
              <Container className="m-0 p-0">
                <h1 className="mb-5">ABC</h1>
                <Container>
                  <Row>
                    <Col xs={8} md={5} /*  lg={6} */ className="mb-2">
                      <div
                        style={{
                          height: "100%",
                          padding: "1.5rem",
                          borderRadius: "0.3rem",
                          backgroundColor: "#0000004D",
                        }}
                      >
                        <div className="mb-4 pb-2">
                          <h2 className="mr-4" style={{ color: "#ffffff" }}>
                            abc
                          </h2>
                        </div>
                      </div>
                    </Col>
                    {/*  */}

                    <Col xs={8} md={1} /* lg={1} */ className="mb-1">
                      <div
                      /*  style={{
                          height: "50%",
                        }} */
                      >
                        <div className="mb-4 pb-5">
                          {/*   <h2 className="mr-04" style={{ color: "#ffffff" }}> */}
                          <p className="mr-04" style={{ color: "#ffffff" }}>
                            to
                          </p>
                          {/* </h2> */}
                        </div>
                      </div>
                    </Col>
                    {/*  */}
                    <Col
                      xs={8}
                      md={5} /*  lg={5} */
                      className="mb-2"
                      style={{ paddingRight: "-1rem" }}
                    >
                      <div
                        style={{
                          height: "100%",
                          padding: "1.5rem",
                          borderRadius: "0.3rem",
                          backgroundColor: "#0000004D",
                        }}
                      >
                        <div className="mb-4 pb-2">
                          <h2 className="mr-4" style={{ color: "#ffffff" }}>
                            abc
                          </h2>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Container>
              {/* <Row>
            <Col
              style={{
                width: "100%",
                height: "100%",
                marginTop: "-31rem",
                paddingBottom: "1rem",
                backgroundColor: "",
                color: "#ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "start",
              }}
            >
              <p>
                <span style={{ fontSize: "2rem" }}>check out our</span>
                <br />
                <span style={{ fontSize: "3rem" }}>Best Cousine</span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                position: "relative",
                width: "80%",
                height: "80%",
                marginTop: "-24rem",
                paddingBottom: "1rem",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
            >
              adfasd
            </Col>
          </Row> */}
            </Jumbotron>
          </Container>
        </div>
      </div>
    </>
  );
}

export default MediumSlide;
