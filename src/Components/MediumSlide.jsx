import React from "react";
import DesktopImage from "../Images/backgroundImageWorks.jpg";
import { Badge, Col, Container, Image, Row } from "react-bootstrap";

function MediumSlide() {
  return (
    <>
      <div
        style={{
          position: "relative",
          zIndex: "-2",
        }}
      >
        <Image
          alt="homepage-picture"
          src={DesktopImage}
          style={{ width: "100%", objectFit: "cover", height: "35rem" }}
        />
      </div>

      <Container>
        <Row>
          <Col
            style={{
              width: "100%",
              marginTop: "-30.5rem",
              paddingBottom: "11rem",
              backgroundColor: "none",
              color: "#000000",
            }}
          >
            <h5>check out our</h5>
            <h4 style={{ fontSize: "2rem" }}>Best Cousine</h4>
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              zIndex: "-2",
              width: "100%",
              marginTop: "-25.5rem",
              paddingBottom: "12rem",
              backgroundColor: "rgb(192,192,192)",
              color: "#000000",
              opacity: "1.4",
            }}
          >
            Hello Hello
          </Col>
        </Row>

        {/*  <Badge className="text-left p-3 mb-3">
            <h5>check out our</h5>
            <h4 style={{ fontSize: "2rem" }}>Best Cousine</h4>
          </Badge> */}
      </Container>
    </>
  );
}

export default MediumSlide;
