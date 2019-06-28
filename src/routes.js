import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Details from './container/Details'
import PokeApp from './container/PokeContainer'


const PublicRoutes = () => {
  return (
    <Router >
      <div>
        <Route
          exact
          path={"/details"}
          component={Details}
        />
        <Route
          exact
          path={"/"}
          component={PokeApp}
        />
 
     
      </div>
    </Router>
  )
};

export default PublicRoutes;