import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router";
import LandingPage from "./Components/Main-page/LandingPage";
import Feature from "./Components/Features";
import Prices from "./Components/Pricing";
//import MediumSlide from "./Components/MediumSlide";

function App() {
  return (
    <>
      <Navbar />
      {/* <MediumSlide /> */}
      <Switch>
        <Route exact path="/" render={(props) => <LandingPage {...props} />} />

        <Route path="/features" render={(props) => <Feature {...props} />} />

        <Route path="/pricing" render={(props) => <Prices {...props} />} />

        <Route path="/features" render={(props) => <Feature {...props} />} />

        <Route path="/features" render={(props) => <Feature {...props} />} />

        <Route path="/features" render={(props) => <Feature {...props} />} />
      </Switch>
    </>
  );
}

export default App;
