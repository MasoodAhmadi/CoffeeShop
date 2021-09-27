//import logo from "./logo.svg";
import React from "react";
import Afghanistanflag from "../Images/A.jpg";

function Board() {
  return (
    <div
      style={{
        color: "white",
        backgroundImage: `url(${Afghanistanflag})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "100%",
      }}
    >
      main Board
      <br />
      main Board
      <br />
      main Board
      {/*  <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead"></p>
      </Jumbotron> */}
    </div>
  );
}

export default Board;
