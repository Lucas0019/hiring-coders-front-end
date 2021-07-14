import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Repositories from "./Repositories";
import Home from './Home'

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path="/repositories" component={Repositories} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
