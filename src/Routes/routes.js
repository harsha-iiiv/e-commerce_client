import React from "react";

import { Switch, Route } from "react-router-dom";

// Components
import Home from "../components/Home";
import Cart from "../components/cart/Cart";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cart" component={Cart} exact />
    </Switch>
  );
};

export default Routes;
