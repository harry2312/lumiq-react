import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./index.css";

const App = () => {
  return (
      <Switch>
        <Route exact={true} path="/" component={Home}></Route>
        <Route exact={true} path="*" component={NotFound}></Route>
      </Switch>
  );
};

export default App;
