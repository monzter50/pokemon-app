import React from "react";
import { BrowserRouter as Router, Route,Redirect  } from "react-router-dom";
import Details from './container/Details'
import PokeApp from './container/PokeContainer'


const PublicRoutes = ({history}) => {
  return (
    <Router  history={history}>
      <Redirect from='/details/:id' to='/'/>
        <Route
          exact strict 
          path={"/details/"}
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