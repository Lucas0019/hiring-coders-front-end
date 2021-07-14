import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from './Pages/Home/Home'
import Repositories from "./Pages/Repositpries/Repositories";

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
