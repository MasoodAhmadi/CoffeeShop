import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router";
import LandingPage from "./Components/Main-page/LandingPage";
import Feature from "./Components/Features";
import Prices from "./Components/Pricing";
import OrderFood from "./Components/OrderFood";

function App() {
  //const [defaultCity, setDefaultCity] = useState("Helsinki");
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <Navbar />
      {/* <MediumSlide /> */}
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <LandingPage
              {...props}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
          )}
        />

        <Route path="/features" render={(props) => <Feature {...props} />} />

        <Route path="/pricing" render={(props) => <Prices {...props} />} />

        <Route path="/orders" render={(props) => <OrderFood {...props} />} />

        <Route path="/features" render={(props) => <Feature {...props} />} />

        <Route path="/features" render={(props) => <Feature {...props} />} />
      </Switch>
    </>
  );
}

export default App;
