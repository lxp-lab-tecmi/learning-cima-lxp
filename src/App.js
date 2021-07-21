import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MessengerCustomerChat from 'react-messenger-customer-chat';
import React from "react";

import Block from "./Block";
import Intro from "./Intro";

export default function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/block" component={Block} />
      </Switch>
    </Router>
    <MessengerCustomerChat pageId="109132038102012" appId="320817016358987" />
  </>
  );
}
