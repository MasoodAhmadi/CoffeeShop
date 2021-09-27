import React from "react";
import Navbar from "./files/Navbar";
import { Route, Switch } from "react-router";
import MainPage from "./files/Main.page";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" render={(props) => <MainPage {...props} />} />
      </Switch>
    </>
  );
}

export default App;
