import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Details from './container/Details'
import PokeApp from './container/PokeContainer'


const PublicRoutes = ({history}) => {
  return (
    <Router  history={history}>
        <Route
         exact strict 
          path={"/details/:id"}
          component={Details}
        />
        <Route
          exact
          path={"/"}
          component={PokeApp}
        />
 
     
    </Router>
  )
};

export default PublicRoutes;