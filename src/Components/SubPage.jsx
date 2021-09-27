import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

function Board() {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3 p-0 text-center">Header Text</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Board;
