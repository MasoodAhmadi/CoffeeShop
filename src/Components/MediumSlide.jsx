import React from "react";
import DesktopImage from "../Images/backgroundImageWorks.jpg";
import { Container, Image } from "react-bootstrap";

function MediumSlide() {
  return (
    <>
      <div
        style={{
          position: "relative",
          zIndex: "-1",
        }}
      >
        <Image
          alt="homepage-picture"
          src={DesktopImage}
          style={{ width: "100%", objectFit: "cover", height: "50rem" }}
          fluid
        />
        <Container>
          <div>
            <p
              className="text-center mb-4"
              style={{
                display: "inline-block",
                width: "30rem",
                height: " 60px",
                margin: "0 4rem",
                backgroundColor: "#555",
                bottom: "0 2rem",
              }}
            >
              check out our <br />
              <strong>Best Cousine</strong>
            </p>
            {/* </Container> */}
          </div>
        </Container>
      </div>
    </>
  );
}

export default MediumSlide;
